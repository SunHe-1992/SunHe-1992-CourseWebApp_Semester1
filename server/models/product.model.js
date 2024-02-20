import mongoose from 'mongoose'
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Name is required'
    },
    description: {
        type: String,
        trim: true,
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    },
    price: {
        type: Number,
    },
    quantity: {
        type: Number,
    },
    category: {
        type: String,
        trim: true,
    },
});
export default mongoose.model('Product', ProductSchema);
