
# Newborn Babies Management System

## Overview

This project is designed to manage data for newborn babies in a hospital environment. It utilizes a MEAN stack architecture, leveraging MongoDB, Express.js, Angular, and Node.js for a comprehensive full-stack solution.

## Prerequisites

Before you start with the setup instructions, make sure you have the following prerequisites installed on your system:


- **Git**: to clone the git repository [Download Git](https://git-scm.com/download/win)
- **MongoDB Server**: Ensure MongoDB is installed and running on your system. [Download MongoDB](https://www.mongodb.com/try/download/community)
- **Node.js**: Required to run the server-side code. [Download Node.js](https://nodejs.org/)
- **Angular CLI**: Necessary for the Angular application. you can install it by running `npm install -g @angular/cli` in your terminal. [Angular CLI](https://angular.io/cli)

## Initial Setup

### Cloning the Repository

1. **Open a Terminal**

   - On Windows, press `Windows + R`, type `cmd`, and press `Enter`.
   - On macOS, open Spotlight search (`Command + Space`), type `Terminal`, and press `Enter`.
   - On Linux, press `Ctrl + Alt + T` or search for `Terminal` in your applications menu.

2. **Clone the Repository**

   Execute the following command to clone the repository:

   ```bash
   git clone https://github.com/davidbiton33/Interview-Assignment
   ```

3. **Navigate to the Project Directory**

   Change your current directory to the cloned project's directory.

   ```bash
   cd Interview-Assignment
   ```

## Setup Instructions

### Server Side

1. **Navigate to the Server Directory**

   From the project directory, navigate to the `node-server` directory.

   ```bash
   cd node-server
   ```

2. **Install Dependencies**

   Install the required npm packages.

   ```bash
   npm install
   ```

3. **Run the Server**

   Start the development server.

   ```bash
   npm start
   ```

   The server will start on `http://localhost:3000`.

### Client Side

1. **Navigate to the Client Directory**

   From the project directory, open a new terminal and navigate to the `client` directory.

   ```bash
   cd client
   ```

2. **Install Dependencies**

   Install the required npm packages.

   ```bash
   npm install
   ```

3. **Serve the Application**

   Start the Angular development server.

   ```bash
   ng serve
   ```

   The application will be available on `http://localhost:4200`.

## Usage

After setting up both the server and client sides, you can use the application to manage data for newborn babies in the hospital. The system supports Create, Read, Update, and Delete (CRUD) operations.
