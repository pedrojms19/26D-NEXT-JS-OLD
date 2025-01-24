import classes from "./[meetupDetails].module.css";

export default function MeetUpDetails() {
  return (
    <section className={classes.detail}>
      <img
        src="https://th.bing.com/th/id/R.729b2a612a1fc2a98ce751a5574811e7?rik=muQg0fEkHG5sCg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f05%2fHD-New-York-City-Wallpaper.jpg&ehk=Ev7kmTcu%2bDKK762nXWsXuqXTm2NyT4gnvpcgaGzM1ms%3d&risl=&pid=ImgRaw&r=0"
        alt="something"
      ></img>
      <h1>A first meetup</h1>
      <address>No se</address>
      <p>The meetup description</p>
    </section>
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupDetails: "1",
        },
      },
      {
        params: {
          meetupDetails: "2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupDetails;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        image:
          "https://th.bing.com/th/id/R.729b2a612a1fc2a98ce751a5574811e7?rik=muQg0fEkHG5sCg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f05%2fHD-New-York-City-Wallpaper.jpg&ehk=Ev7kmTcu%2bDKK762nXWsXuqXTm2NyT4gnvpcgaGzM1ms%3d&risl=&pid=ImgRaw&r=0",
        id: meetupId,
        title: "First meetup",
        address: "Por alla",
        description: "Me gusta el arroz con atun",
      },
    },
  };
}
