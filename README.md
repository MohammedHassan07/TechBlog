# TechBlog

TechBlog is a blog website developed using **Node.js, Express.js, HTML, CSS, HBS, and MySQL**. The website allows an **admin** to upload blogs after registering using **JWT authentication**, while **users can read blogs without registration**.

## Features

- Admin registration using **JWT authentication**.
- Admin can **upload blogs**.
- Users can **read blogs without creating an account**.

## Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js**
- **XAMPP** (to run MySQL and phpMyAdmin)

## Installation and Setup

Follow these steps to set up and run the project:

### Step 1: Set Up the Database
1. Open **phpMyAdmin** and create a database named **`blogsDB`**.
2. Open the provided **SQL file**, copy the queries, and execute them in the SQL query interface.

### Step 2: Install Dependencies
1. Open a terminal in the project folder.
2. Run the following command to install dependencies:

   ```sh
   npm install
  ```

### Step 3: Start the Server
```sh npm start ```

### Step 4: Open the Website
- Open your browser and go to:
http://localhost:3000/

- To access the Admin Panel, enter:
http://localhost:3000/admin

Admin Panel
Logging in as an Admin

## To log in as an author, follow these steps:
Ensure you have created an author (See Step 1: Set Up the Database).
Open the browser and visit:
http://localhost:3000/admin
You will be redirected to the Login Page.
Enter your credentials to log in.
Once logged in, you will be redirected to the Admin Panel.
From the Admin Panel, you can insert blogs.

## Note:
To insert authors, you need to hit the corresponding API endpoint using tools like Postman, Thunder Client, or any similar software.
