# Project Title

Brief description of your project goes here.

## Tech Stack

| Technology    | Description                                                                 |
|---------------|-----------------------------------------------------------------------------|
| Express       | Fast, unopinionated, minimalist web framework for Node.js                   |
| Morgan        | HTTP request logger middleware for Node.js                                 |
| Body-Parser   | Node.js body parsing middleware, used to parse incoming request bodies      |
| CORS          | Node.js package to enable Cross-Origin Resource Sharing                     |
| Nodemon       | Utility that automatically restarts the server when file changes are detected |
| JSON Web Token| Library to implement JSON Web Token (JWT) for securely transmitting information |

## Database and Tools

| Tool          | Description                                                                 |
|---------------|-----------------------------------------------------------------------------|
| MySQL         | Open-source relational database management system (RDBMS)                   |
| SQL Workbench | Tool used for working with MySQL databases, including design and management |
| Prisma        | Next-generation ORM that helps to interact with databases in a type-safe way|

## Installation and Commands

### Step 1: Initialize the Project
```bash
npm init -y

```
### Step 2: Install Dependencies
```bash
npm install express morgan body-parser cors nodemon jsonwebtoken bcrypt

```

### Step 3: Install Prisma and Set Up the Database
```bash
npm install @prisma/client
npx prisma migrate dev --name name_of_database

```