# PlanningPoker

This app was built using **Node** and **Express** in the backend and **React** in the frontend. **Socket.io** was also utilized to allow for server/client real time communication.

Here is how to run the application:

- Run the command **yarn** in the root folder to install the backend dependencies 
- Run the command **cd client/ && yarn** to install the frontend  dependencies 
- Run the command **yarn start** in the root folder to concurrently start both the backend and the frontend

Here is how to use the application:

- Once the application has started visit the url: **http://localhost:3000/**
- Click on the **Create New Room** button to create a new room with an automatically generated ID
- Open a new tab in the browser and visit the url: **http://localhost:3000/**
- Copy and paste the previously generated room ID and click on the **Join Room** button to join the previously created room
- Click on a **Card** to vote and see the vote cast in both tabs
- Click on another **Card** to change the vote
- Cards will be revealed automatically once every participant has voted
- Cards can also be revealed before every participant has voted by clicking on the **Reveal** button
- Once the cards have been revealed voting is no longer allowed, so click on the **Reset** button to reset their value and vote again
