import Product from "../models/product.model.js";
import {Types} from "mongoose";

const resolvers = {

    Query: {
        getProducts: async ()=>{
            return await Product.find();
        },

        getProduct: async (_, {id})=>{
            const productId = new Types.ObjectId(id)
            return await Product.findById(productId)
        }
    },


    Mutation: {
        addProduct: async (_, {name, description, price, stock, category})=>{
            let newProduct = new Product()
            newProduct.name = name;
            newProduct.description = description;
            newProduct.price = price;
            newProduct.stock = stock;
            newProduct.category = category;

            const product = await newProduct.save()
            return product
        },

        updateProduct: async (_, {id, name, description, price, stock, category})=>{
            const productId = new Types.ObjectId(id)
            let product = await Product.findByIdAndUpdate(productId, 
                { name, description, price, stock, category},
            { new: true} );
            
            return product
        },

        deleteProduct: async (_, {id})=>{
            const productId = new Types.ObjectId(id)
            let product = await Product.findByIdAndDelete(productId);
            return product
        },

        
    }

}

export default resolvers;