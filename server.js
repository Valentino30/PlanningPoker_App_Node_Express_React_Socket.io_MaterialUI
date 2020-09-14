const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

require("dotenv").config();
const port = process.env.PORT || 4000;

let users = [];
let votes = [];

const nsp = io.of("/");

nsp.on("connection", function (socket) {
  socket.on("join", ({ roomId, username }) => {
    socket.join(roomId);
    socket.emit("you have joined the room", { id: socket.id, username, roomId });
    users.push({ id: socket.id, username, roomId });
    users = users.filter((user) => user.roomId === roomId);
    console.log(`a new user has joined the room: ${roomId}`);
    nsp.in(roomId).emit("a new user has joined the room", { users });
    socket.on("vote", ({ vote }) => {
      vote = { username, value: vote, roomId };
      votes.some((oldVote) => oldVote.username === username)
        ? (votes = votes.filter((oldVote) => oldVote.username !== username))
        : null;
      votes.push(vote);
      votes = votes.filter((vote) => vote.roomId === roomId);
      console.log(`a user voted ${vote.value} in room: ${roomId}`);
      nsp.to(roomId).emit("a new vote has been cast in the room", { votes });
    });
    socket.on("reset", () => {
      votes = votes.filter((vote) => vote.roomId !== roomId);
      console.log(`a user has reset the votes in room: ${roomId}`);
      socket.to(roomId).emit("a user has reset the votes", { votes: [] });
    });
    socket.on("reveal", () => {
      const showVotes = true;
      console.log(`a user has revealed the votes in room: ${roomId}`);
      socket.to(roomId).emit("a user has revealed the votes", { showVotes });
    });
    socket.on("disconnect", () => {
      const disconnectUser = () => {
        votes = votes.filter((oldVote) => oldVote.username !== username);
        users = users.filter((oldUser) => oldUser.id !== socket.id);
        console.log(`a user has left the room: ${roomId}`);
        socket.to(roomId).emit("a user has left the room", { users, votes });
      };
      disconnectUser();
    });
  });
});

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
      status: err.status,
    },
  });
});

http.listen(port, function () {
  console.log(`listening on port ${port}`);
});
