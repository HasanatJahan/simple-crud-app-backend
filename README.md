# Simple CRUD App Backend

A Node.js backend for a simple CRUD application using Express, MongoDB, and Mongoose. This API allows basic operations such as creating, reading, updating, and deleting products from a MongoDB database. Built with RESTful routes and supports JSON data exchange.

## Features:

- **CRUD Operations**: Create, Read, Update, Delete products.
- **Express**: Lightweight and flexible web server.
- **MongoDB & Mongoose**: Object Data Modeling (ODM) to interact with MongoDB.
- **Error Handling**: Basic error handling for database operations.
- **API Ready**: Routes for product management ready to be consumed by any frontend.
- **Environment Configuration**: Securely manage sensitive credentials using `dotenv`.

## Installation:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/simple-crud-app-backend.git

   ```

2. Install dependencies

   ```bash
   npm install

   ```

3. Create a .env file in the root directory and add your MongoDB connection string:

   ```bash
   MONGO_URI=your_mongodb_connection_string

   ```

4. Start the server
   ```bash
   npm start
   ```

## API Endpoints

- GET /api/products: Fetch all products.
- POST /api/products: Add a new product.
- PUT /api/products/:id: Update a product by ID.
- DELETE /api/products/:id: Delete a product by ID.

## Technologies Used:

- Node.js: JavaScript runtime for building server-side applications.
- Express.js: Web framework for Node.js.
- MongoDB: NoSQL database for storing product data.
- Mongoose: ODM for MongoDB to structure and manage data.
- dotenv: Secure management of environment variables.
