import mongoose from 'mongoose';
import AutoIncrementFactory from 'mongoose-sequence';

// Initialize your database connection; modify the URI as needed for your environment
const mongoURI = 'mongodb+srv://comfyfitness:root@cluster0.j7yazs1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your MongoDB connection string

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
const AutoIncrement = AutoIncrementFactory(connection);

// Define the schema for smShop
const smShopSchema = new mongoose.Schema({
    ItemName: {
        type: String,
    },
    Company: {
        type: String,
    },
    Price: {
        type: String,
    },
    ItemWeight: {
        type: String,
    },
    Discount: {
        type: String,
    },
    TotalPrice: {
        type: String,
    },
    Description: {
        type: String,
    }
}, {
    timestamps: true // Adds createdAt and updatedAt timestamps
});

// Apply the auto-increment plugin to the smShop schema
smShopSchema.plugin(AutoIncrement, {
    id: 'sm_id_counter', // Identifier for the sequence
    inc_field: 'SmID'    // Field to increment
});

// Create the model from the schema
const smShop = mongoose.model('smShop', smShopSchema);

export default smShop;
