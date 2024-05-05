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

const fbFitnessSchema = mongoose.Schema(
    {
        Name: {
            type: String,
        },
        Email: {
            type: String,
            unique: true,
        },
        Feedback: {
            type: String,
        },
        Rating: {
            type: Number,
        },
        Reply : {
            type: String,
        },


    },
    {
        timestamps: true,
    }
);

// Apply the auto-increment plugin to the rmRequest schema
fbFitnessSchema.plugin(AutoIncrement, {
    id: 'user_id_counter', // Identifier for the sequence
    inc_field: 'UserID'    // Field to increment
});

export const fbFitness = mongoose.model('fbFitness', fbFitnessSchema);