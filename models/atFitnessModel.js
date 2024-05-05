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

const atFitnessSchema = mongoose.Schema(
    {
        UserID: {
            type: String,

        },
        Name: {
            type: String,

        },

    },
    {
        timestamps: true,
    }
);

// Apply the auto-increment plugin to the rmRequest schema
atFitnessSchema.plugin(AutoIncrement, {
    id: 'AttnaceID_id_counter', // Identifier for the sequence
    inc_field: 'AttnaceID'    // Field to increment
});

export const atFitness = mongoose.model('atFitness', atFitnessSchema);