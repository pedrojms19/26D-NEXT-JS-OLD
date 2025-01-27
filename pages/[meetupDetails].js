import classes from "./[meetupDetails].module.css";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

export default function MeetUpDetails(props) {
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content="Review the content of this event"></meta>
      </Head>
      <section className={classes.detail}>
        <img src={props.meetupData.image} alt={props.meetupData.title}></img>
        <h1>{props.meetupData.title}</h1>
        <address>{props.meetupData.address}</address>
        <p>{props.meetupData.description}</p>
      </section>
    </>
  );
}

export async function getStaticPaths() {
  const client = MongoClient.connect(
    "mongodb+srv://pedro:pedromendoza@cluster0.d1bpk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = (await client).db("DB1");
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  (await client).close();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupDetails: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupDetails;

  const client = MongoClient.connect(
    "mongodb+srv://pedro:pedromendoza@cluster0.d1bpk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = (await client).db("DB1");
  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId.createFromHexString(meetupId),
  });
  console.log(selectedMeetup);

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
      },
    },
  };
}
