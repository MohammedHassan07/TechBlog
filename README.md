# TechBlog

TechBlog is a blog website developed using **Node.js, Express.js, HTML, CSS, HBS, and MySQL**. The website allows an **admin** to upload blogs after registering using **JWT authentication**, while **users can read blogs without registration**.

## Features

- Admin registration using **JWT authentication**.
- Admin can **upload blogs**.
- Users can **read blogs without creating an account**.

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![Handlebars](https://img.shields.io/badge/Handlebars.js-f0772b?style=for-the-badge&logo=handlebarsdotjs&logoColor=black)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)


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
```sh
   npm start
```

### Step 4: Open the Website
- Open your browser and go to:
http://localhost:3000/

- To access the Admin Panel, enter:
http://localhost:3000/admin

## Admin Panel
To log in as an author, follow these steps:
Ensure you have created an author

Open the browser and visit:
http://localhost:3000/admin
You will be redirected to the Login Page.
Enter your credentials to log in.
Once logged in, you will be redirected to the Admin Panel.
From the Admin Panel, you can insert blogs.

## Note:
To insert authors, you need to hit the corresponding API endpoint using tools like Postman, Thunder Client, or any similar software.
