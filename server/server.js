require('dotenv').config();

const express = require("express");
const cors = require("cors");
const MongoClient = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());


const mongo_url = process.env.MONGO_URL;
const db_name = process.env.DB_NAME;
const collection_name = process.env.COLLECTION_NAME;
const port = process.env.PORT || 8000;

const client = new MongoClient.MongoClient(mongo_url);

let db, collection;

async function connectToDB() {
    try {
        await client.connect();
        db = client.db(db_name);
        collection = db.collection(collection_name);
        console.log("MongoDB connected!");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
}


app.post("/data_from_react", async (req, res) => {
    try {
        const body = req.body;
        const new_user = {
            user_name: body.u_name,
            user_age: body.u_age,
            user_car: body.u_car,
            user_color: body.u_color
        };
        await collection.insertOne(new_user);
        res.send("Data saved!");
    } catch (error) {
        console.error("Insert error:", error);
        res.status(500).send("Server error");
    }
});


app.get("/get_all_user_data", async (req, res) => {
    try {
        const users = await collection.find().toArray();
        res.send(users);
    } catch (error) {
        console.error("Fetch error:", error);
        res.status(500).send("Server error");
    }
});


connectToDB().then(() => {
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
});
