import {Schema, model} from "mongoose"

const ProductSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    stock: Number,
    category: String
})

const Product = model("Product", ProductSchema)
export default Product