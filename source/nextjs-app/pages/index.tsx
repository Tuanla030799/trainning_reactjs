import type { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { DUMMY_MEETUPS, Meetup } from "../components/meetups/meetups";

const HomePage = (props: { meetups: Meetup[] }) => {
  // const [loadedMeetups, setLoadedMeetups] = useState<Meetup[]>([]);

  // useEffect(() => {
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);
  return <MeetupList meetups={props.meetups} />;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
};

export default HomePage;
