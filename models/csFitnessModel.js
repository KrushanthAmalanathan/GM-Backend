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

const csFitnessSchema = mongoose.Schema(
    {
        Name: {
            type: String,
            required: true,
        },
        Email: {
            type: String,
            required: true,
            unique: true,
        },
        Category: {
            type: String,
            required: true,
        },
        Time: {
            type: String,
            required: true,
        },
        NeedTrainer: {
            type: String,
            default: false,
        }, 

    },
    {
        timestamps: true,
    }
);

// Apply the auto-increment plugin to the rmRequest schema
csFitnessSchema.plugin(AutoIncrement, {
    id: 'schedule1_id_counter', // Identifier for the sequence
    inc_field: 'ScheduleID'    // Field to increment
});


export const csFitness = mongoose.model('csFitness', csFitnessSchema);