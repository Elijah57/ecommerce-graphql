# E-Commerce GraphQL API with Express

This project is a simple e-commerce platform backend using **GraphQL**, **Express**, and **MongoDB**. It exposes a GraphQL API that allows querying and mutating product data, such as retrieving products, adding new products, updating product details, and deleting products.

### Features:
- Fetch a list of products.
- Fetch a single product by ID.
- Add a new product.
- Update existing product details.
- Delete a product.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Setup Instructions](#setup-instructions)
4. [API Documentation](#api-documentation)
5. [Running the Application](#running-the-application)
6. [License](#license)

---

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 12 or higher) – [Install Node.js](https://nodejs.org/en/download/)
- **MongoDB** (local or MongoDB Atlas) – [MongoDB Setup Guide](https://www.mongodb.com/docs/manual/installation/)

---

## Installation

### 1. Clone the repository:

```bash
git clone https://github.com/Elijah57/ecommerce-graphql.git
cd ecommerce-graphql
```

### 2. Install dependencies:

Run the following command to install the required Node.js packages:

```bash
npm install
```

---

## Setup Instructions

### 1. Set up MongoDB:

If you're using **MongoDB Atlas** (cloud version) or a **local MongoDB instance**, make sure to:

- Create a new MongoDB database for this project (e.g., `ecommerce`).
- Update the MongoDB URI in the `server.js` file (default is `mongodb://localhost/ecommerce`).
  
### 2. Database Models:

The project uses **Mongoose** to define the data models. In the `models` folder, you will find the `product.model.js` model, which defines the schema for products in the e-commerce platform.

Example model (`models/product.model.js`):

```js
import {Schema, model} from "mongoose";

const ProductSchema = Schema({
  name: String,
  description: String,
  price: Number,
  stock: Number,
  category: String,
});

const Product = model('Product', ProductSchema);

export default Product;
```

### 3. Update API Endpoint (Optional):

If you're using MongoDB Atlas, replace the connection URL in `db.js` with your connection string:

```js
import mongoose from "mongoose"
import { config } from "dotenv";

config()

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.DB_URI);
        console.log('connected to db')
    }catch(err){
        throw new Error(err.message)  
    } 
}

export default connectDB;
```

---

## API Documentation

This API is built with **GraphQL**, which allows clients to request specific data and perform mutations in a flexible way.

### Available Queries:

1. **`getProducts`**: Retrieve all products.

   **Query Example**:
   ```graphql
   query {
     getProducts {
       id
       name
       price
     }
   }
   ```

2. **`getProduct(id: ID!)`**: Retrieve a single product by ID.

   **Query Example**:
   ```graphql
   query {
     getProduct(id: "60d717f24f1b2c3d8e3d6e57") {
       name
       description
       price
     }
   }
   ```

### Available Mutations:

1. **`addProduct`**: Add a new product.

   **Mutation Example**:
   ```graphql
   mutation {
     addProduct(name: "Laptop", description: "A powerful laptop", price: 999.99, stock: 10, category: "Electronics") {
       id
       name
       price
     }
   }
   ```

2. **`updateProduct(id: ID!, name: String, description: String, price: Float, stock: Int, category: String)`**: Update an existing product.

   **Mutation Example**:
   ```graphql
   mutation {
     updateProduct(id: "60d717f24f1b2c3d8e3d6e57", name: "Laptop Pro", price: 1099.99) {
       id
       name
       price
     }
   }
   ```

3. **`deleteProduct(id: ID!)`**: Delete a product by ID.

   **Mutation Example**:
   ```graphql
   mutation {
     deleteProduct(id: "60d717f24f1b2c3d8e3d6e57") {
       id
       name
     }
   }
   ```

---

## Running the Application

### 1. Start the Express server:

Run the following command to start the server:

```bash
npm start
```

The application will run on **http://localhost:4000**.

### 2. Test the GraphQL API:

Once the server is running, you can visit **http://localhost:4000/graphql** in your browser, where you'll find **GraphQL Playground**. From here, you can interact with the API by making queries and mutations.

---

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.
