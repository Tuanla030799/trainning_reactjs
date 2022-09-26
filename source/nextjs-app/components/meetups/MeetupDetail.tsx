import React from "react";
import { Meetup } from "./meetups";
import classes from "./MeetupDetail.module.css";
import "./MeetupDetail.module.css";

const MeetupDetail = (props: Meetup) => {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address> {props.address} </address>
      <p> {props.description} </p>
    </section>
  );
};

export default MeetupDetail;
