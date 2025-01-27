import { useRouter } from "next/router";
import Head from "next/head";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function newMeetup() {
  const router = useRouter();

  async function handleAddMeetUp(formData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Add a new Meetup</title>
        <meta name="description" content="Add your own meetup"></meta>
      </Head>
      <NewMeetupForm onAddMeetup={handleAddMeetUp}></NewMeetupForm>
    </>
  );
}
