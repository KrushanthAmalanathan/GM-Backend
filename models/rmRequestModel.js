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

// Define the schema for rmRequest
const rmRequestSchema = new mongoose.Schema({
    ItemName: {
        type: String,
    },
    ItemType: {
        type: String,
    },
    Company: {
        type: String,
    },
    Condition: {
        type: String,
    },
    Price: {
        type: String,
    },
    ItemWeight: {
        type: String,
    },
    Description: {
        type: String,
    }
}, {
    timestamps: true // Adds createdAt and updatedAt timestamps
});

// Apply the auto-increment plugin to the rmRequest schema
rmRequestSchema.plugin(AutoIncrement, {
    id: 'item1_id_counter', // Identifier for the sequence
    inc_field: 'ItemID'    // Field to increment
});

// Create the model from the schema
const rmRequest = mongoose.model('rmRequest', rmRequestSchema);

export default rmRequest;
