import React, { useEffect, useState } from "react";
import "./Form.css";
import db from "./firebase";
import firebase from "firebase";
import {
  MenuItem,
  FormControl,
  Select,
  Input,
  Button,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Form() {
  const [venues, setVenues] = useState([]);
  const [venue, setVenue] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  useEffect(() => {
    db.collection("venues")
      .orderBy("venue_name", "desc")
      .onSnapshot((snapshot) => {
        setVenues(
          snapshot.docs.map((doc) => ({ id: doc.id, venue: doc.data() }))
        );
      });
  }, []);

  const onVenueChange = (event) => {
    setVenue(event.target.value);
  };

  const onSubmitClick = (event) => {
    event.preventDefault();
    db.collection("venues").doc(venue).collection("customers").add({
      name: name,
      phoneNumber: phoneNumber,
      email: email,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    history.push(`/success`);
  };

  return (
    <div className="form">
      <div className="form__inputs">
        <Input
          placeholder="Whats your full name?*"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <FormControl className="form__dropdown">
          <Select
            variant="standard"
            onChange={onVenueChange}
            value={venue.length > 0 ? venue : `Which venue are you visting?`}
          >
            <MenuItem value="Which venue are you visting?" disabled>
              Which venue are you visting?
            </MenuItem>
            {venues.map(({ id, venue }) => (
              <MenuItem value={venue.venue_name}>{venue.venue_name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Input
          placeholder="What is your phone number?*"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
        <Input
          placeholder="What is your email address?*"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Button
          className="form__button"
          variant="outlined"
          onClick={onSubmitClick}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Form;
