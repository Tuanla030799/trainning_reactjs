import { NextPage } from "next";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { Meetup } from '../../components/meetups/meetups';


const NewMeetupPage: NextPage = () => {

  const handleAddMeetup = (enteredMeetupData: Meetup) => {
    console.log(enteredMeetupData)
  }

  return (
    <NewMeetupForm onAddMeetup={handleAddMeetup}/>
  );
};

export default NewMeetupPage;