import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';
import { Meetup } from './meetups';

type Props = {
  meetups: Meetup[];
}

function MeetupList(props: Props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup: Meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
