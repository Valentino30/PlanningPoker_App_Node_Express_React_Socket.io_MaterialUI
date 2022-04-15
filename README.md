# PlanningPoker

This is a planning poker app built using `Node` and `Express` in the backend and `React` in the frontend. `Socket.io` was also utilized to allow for server/client real time communication.

Note: Socket IDs do not persist accross page refreshes so, once the page has been refreshed, the application will have no memory of the previous users and the votes that they have been casting.

# Get Started

Here is how to run the application:

- Run the command `yarn` in the root folder to install the backend dependencies
- Run the command `cd client/ && yarn` to install the frontend  dependencies
- Run the command `yarn start` in the root folder to concurrently start both the backend and the frontend

# Usage

Here is how to use the application:

- Once the application has started visit [this url](http://localhost:3000/)
- Insert your username and click on the `Create New Room` button to create a new room with an automatically generated ID
- To add a new user, open a new tab in the browser and visit [this url](http://localhost:3000/)
- Copy and paste the previously generated room ID, add a new user name and click on the `Join Room` button to join the previously created room
- Now, click on any `Card` to vote and see a hidden vote cast in both tabs
- You may click on another `Card` to change your vote
- Cards can be revealed by clicking on the `Reveal` button
- Once the cards have been revealed voting is no longer allowed, so click on the `Reset` button to reset their value and vote again
