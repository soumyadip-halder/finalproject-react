import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { bookLatestSuccess } from "../redux/seatsLatest/action";
import { bookUpcomingSuccess } from "../redux/seatsUpcoming/action";
import { bookEventSuccess } from "../redux/seatsEvents/action";
import "../css/SeatBooking.css";
import { getBooking } from "../redux/bookingDetails/actions";

/*
This component shows the available seats for the movie to the user. From here user can
choose the seats as per wish and proceed for booking.
*/

function SeatBooking(props) {
  const seats = Array.from({ length: 8 * 8 }, (_, i) => i);
  const [selectedSeat, setSelectedSeat] = useState([]);

  let item = [];
  if (props.from === "latest") {
    item = props.latestOne.filter((latest) => latest.id === props.movieid);
  } else if (props.from === "upcoming") {
    item = props.upcomingOne.filter((latest) => latest.id === props.movieid);
    console.log(item);
  } else if (props.from === "event") {
    item = props.eventOne.filter((latest) => latest.id === props.movieid);
  }

  function handleSelectedState(seat) {
    const isSelected = selectedSeat.includes(seat);
    if (isSelected) {
      const seats = selectedSeat.filter(
        (selectedSeat) => selectedSeat !== seat
      );
      console.log("from here ", seats);
      setSelectedSeat([...seats]);
    } else {
      setSelectedSeat([...selectedSeat, seat]);
    }
  }

  const dispatchIt = () => {
    if (selectedSeat.length !== 0) {
      const confirmBox = window.confirm(
        "Are you sure you wanna go ahead with the booking?"
      );
      if (confirmBox) {
        if (props.from === "latest") {
          props.latestDispatch(selectedSeat, props.movieid);
        } else if (props.from === "upcoming") {
          props.upcomingDispatch(selectedSeat, props.movieid);
        } else if (props.from === "event") {
          props.eventDispatch(selectedSeat, props.movieid);
        }
        window.alert("Booking done succesfully");
        const details = {
          id: props.movieid,
          moviename: props.moviename,
          date: item[0].date,
          time: item[0].time,
          totalprice: `Rs ${item[0].price * selectedSeat.length}`,
          seatsBooked: selectedSeat,
        };
        props.bookingDetailsReducer(details);
        props.close();
        props.paymentModalOn();
      }
    }
  };

  return (
    <>
      {item.length !== 0 ? (
        <>
          <div>
            <h4 className="font-weight-bold">Booking for Movie:</h4>
            <h5 className="font-italic font-weight-bold">{props.moviename}</h5>
            <button className="right1" onClick={props.close}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <hr />
          <div className="App">
            <span>
              Date and Time for booking:{" "}
              <span className="font-weight-bold">
                {item[0].date} {item[0].time}
              </span>
            </span>
            <ul className="ShowCase">
              <li>
                <span className="seat" /> <small>N/A</small>
              </li>
              <li>
                <span className="seat selected" /> <small>Selected</small>
              </li>
              <li>
                <span className="seat occupied" /> <small>Occupied</small>
              </li>
            </ul>
            <div className="Cinema">
              <div className="screen" />
              <div className="seats">
                {seats.map((seat) => {
                  const occupied = item[0].occupied.includes(seat);
                  const selected = selectedSeat.includes(seat);

                  return (
                    <span
                      tabIndex="0"
                      key={seat}
                      className={
                        "seat " +
                        (occupied ? "occupied" : selected ? "selected" : "")
                      }
                      onClick={
                        occupied ? null : () => handleSelectedState(seat)
                      }
                      onKeyPress={
                        occupied
                          ? null
                          : (event) => {
                              if (event.key === "Enter") {
                                handleSelectedState(seat);
                              }
                            }
                      }
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="App">
            <p className="info">
              You have selected{" "}
              <span className="count">{selectedSeat.length}</span> seats for the
              price of{" "}
              <span className="total">
                Rs {selectedSeat.length * item[0].price}
              </span>
            </p>
          </div>
          <hr />
          <div className="App">
            <button className="btn btn-secondary" onClick={dispatchIt}>
              Confirm Booking
            </button>
          </div>
        </>
      ) : (
        <div>
          <h4 className="font-weight-bold">Booking for Movie:</h4>
          <h5 className="font-italic font-weight-bold">{props.moviename}</h5>
          <button className="right1" onClick={props.close}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <hr />
          <div className="App">
            <h2>
              The movie is not running in any of the halls. Sorry for the
              inconvenience
            </h2>
          </div>
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    latestOne: state.bookingLatestReducer,
    upcomingOne: state.bookingUpcomingReducer,
    eventOne: state.bookingEventReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    latestDispatch: (seatList, id) => dispatch(bookLatestSuccess(seatList, id)),
    upcomingDispatch: (seatList, id) =>
      dispatch(bookUpcomingSuccess(seatList, id)),
    eventDispatch: (seatList, id) => dispatch(bookEventSuccess(seatList, id)),
    bookingDetailsReducer: (details) => dispatch(getBooking(details)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeatBooking);
