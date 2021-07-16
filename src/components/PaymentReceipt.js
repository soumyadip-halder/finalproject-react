import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import QRCode from "qrcode.react";
import "../css/SeatBooking.css";

/*
This component shows the QRCode for the movie ticket booked by the user
alongwith the details in tabular format
*/

function PaymentReceipt(props) {
  let seats = "";
  if (props.bookingDetails) {
    for (let i = 0; i < props.bookingDetails.seatsBooked.length; i++) {
      seats = seats + props.bookingDetails.seatsBooked[i] + "#";
    }
  }
  return (
    <>
      <div>
        <h4 className="font-weight-bold">Payment Receipt and QR code</h4>
        <button className="right1" onClick={props.close}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <hr />
      <div className="App">
        <div>
          {props.bookingDetails && (
            <QRCode
              id="movieBooking"
              value={`${props.bookingDetails.id}#${props.bookingDetails.moviename}#${props.bookingDetails.date}#${props.bookingDetails.time}#${props.bookingDetails.totalprice}#${seats}`}
              size={290}
              level={"H"}
              includeMargin={true}
            />
          )}
        </div>
        <hr />
        <div className="text-left">
          <table className="tab" style={{ width: "100%" }}>
            <tbody className="tab">
              <tr className="tab">
                <td className="tab font-weight-bold">Movie Name:</td>
                <td className="tab">{props.bookingDetails.moviename}</td>
              </tr>
              <tr className="tab">
                <td className="tab font-weight-bold">Date:</td>
                <td className="tab">{props.bookingDetails.date}</td>
              </tr>
              <tr className="tab">
                <td className="tab font-weight-bold">Time:</td>
                <td className="tab">{props.bookingDetails.time}</td>
              </tr>
              <tr className="tab">
                <td className="tab font-weight-bold">Amount Paid:</td>
                <td className="tab">{props.bookingDetails.totalprice}</td>
              </tr>
              <tr className="tab">
                <td className="tab font-weight-bold">Seat Numbers:</td>
                <td className="tab">
                  {props.bookingDetails.seatsBooked.map((seat, index) => (
                    <span key={index}>{seat} </span>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    bookingDetails: state.bookingDetailsReducer.details,
  };
};

export default connect(mapStateToProps, null)(PaymentReceipt);
