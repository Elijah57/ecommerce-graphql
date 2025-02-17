import express from "express";
import { ApolloServer } from "apollo-server-express"
import typeDefs from "./graphql/schema.js"
import resolvers from "./graphql/resolvers.js"
import connectDB from "./db.js"

const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers
})

async function startServer() {
    await connectDB()
    await server.start()
    server.applyMiddleware({ app })
    
    app.listen(4000, ()=>{
        console.log(`Server is running on http://localhost:4000`)
    })

};

startServer()