import { MongoClient } from "mongodb";

//api/new-meetup
//POST /api/new-meetup

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = MongoClient.connect(
      "mongodb+srv://pedro:pedromendoza@cluster0.d1bpk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    const db = (await client).db("DB1");
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    (await client).close();

    res.status(201).json({ message: "Meetup inserted!" });
    console.log;
  }
}
