import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";


export default function MeetUps(props) {
  return (
    <>
      <h1>MeetUps</h1>
      <MeetupList meetups={props.meetups}></MeetupList>
    </>
  );
}

/* export async function getServerSideProps(context) {
  const req= context.req
  const res= context.res
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
  };
} */

export async function getStaticProps() {
  const client = MongoClient.connect(
    "mongodb+srv://pedro:pedromendoza@cluster0.d1bpk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = (await client).db("DB1");
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();
  (await client).close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      })),
    },
    revalidate: 10,
  };
}
