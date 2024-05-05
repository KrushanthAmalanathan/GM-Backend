import mongoose from "mongoose";
import AutoIncrementFactory from 'mongoose-sequence';

// Initialize your database connection; modify the URI as needed for your environment
const mongoURI = 'mongodb+srv://comfyfitness:root@cluster0.j7yazs1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your MongoDB connection string

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
const AutoIncrement = AutoIncrementFactory(connection);

const mdFitnessSchema = mongoose.Schema(
    {
        Name: {
            type: String,
            required: true,
        },
        Tests: {
            type: String,
            required: true,
        },
        Medications: {
            type: String,
            required: true,
        },
        Conditions: {
            type: String,
            required: true,
        },
        Age: {
            type: Number,
            required: true,
        },
        Weight: {
            type: Number,
            required: true,
        },
        Height: {
            type: Number,
            required: true,
        },

    },
    {
        timestamps: true,
    }
);

// Apply the auto-increment plugin to the rmRequest schema
mdFitnessSchema.plugin(AutoIncrement, {
    id: 'users_id_counter', // Identifier for the sequence
    inc_field: 'UserID'    // Field to increment
});

export const mdFitness = mongoose.model('mdFitness', mdFitnessSchema);