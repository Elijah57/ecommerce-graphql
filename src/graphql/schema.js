import { gql } from "apollo-server-express";


const typeDefs = gql`
    type Product {
        id: ID!
        name: String!
        description: String!
        price: Float!
        stock: Int!
        category: String
    }

    type Query {
        getProducts: [Product]
        getProduct(id: ID!): Product
    }

    type Mutation {
        addProduct(name: String!, description: String!, price: Float!, stock: Int!, category: String!): Product
        updateProduct(id: ID!, name: String!, description: String!, price: Float!, stock: Int!, category: String!): Product
        deleteProduct(id: ID!): Product

    }
`



export default typeDefs;