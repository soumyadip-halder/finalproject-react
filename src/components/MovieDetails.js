import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Spinner } from "react-bootstrap";
import { toggleUp } from "../redux/toggle/action";
import { fetchId } from "../redux/movieDetails/actions";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import SeatBooking from "./SeatBooking";
import PaymentReceipt from "./PaymentReceipt";

/*
This component shows the details of the movie clicked by the user and also houses the booking link.
For further movie ticket booking
*/

Modal.setAppElement("#root");

function MovieDetails(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenReceipt, setIsOpenReceipt] = useState(false);
  const { detailsDispatch } = props;
  const params = useParams();
  useEffect(() => {
    detailsDispatch(params.movieId);
  }, [params.movieId, detailsDispatch]);

  let errored = false;
  if (props.errorFetch !== "") {
    errored = true;
  }

  const closeit = () => {
    setIsOpen(false);
  };

  const closeitReceipt = () => {
    setIsOpenReceipt(false);
  };

  const paymentModalOn = () => {
    setIsOpenReceipt(true);
  };

  return (
    <>
      {props.load ? (
        <div className="App-header">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : !errored ? (
        <div className="d-flex flex-row justify-content-around">
          <Modal
            isOpen={isOpen}
            contentLabel="Booking"
            className="mymodal"
            overlayClassName="myoverlay"
            scrollable={true}
          >
            <SeatBooking
              movieid={props.detailsFetch.id}
              from={params.from}
              moviename={props.detailsFetch.title}
              paymentModalOn={paymentModalOn}
              close={closeit}
            />
          </Modal>
          <Modal
            isOpen={isOpenReceipt}
            contentLabel="Booking Receipt"
            className="mymodal"
            overlayClassName="myoverlay"
            scrollable={true}
          >
            <PaymentReceipt close={closeitReceipt} />
          </Modal>
          <div className="card w-50">
            <img
              className="img-thumbnail"
              src={`https://image.tmdb.org/t/p/w500/${props.detailsFetch.poster_path}`}
              alt=""
            />
          </div>
          <div className="card d-flex flex-columns text-dark w-50 text-left">
            <div className="d-flex justify-content-between">
              <div>
                <div className="font-weight-bold">Original Title: </div>
                {props.detailsFetch.original_title}
              </div>
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                Book Ticket
              </button>
            </div>
            <br />
            <div className="d-flex justify-content-between">
              <div>
                <div className="font-weight-bold">Title: </div>
                {props.detailsFetch.title}
              </div>
              <div className="d-flex flex-rows">
                <div className="font-weight-bold">Rating: </div>
                <div>{props.detailsFetch.vote_average}</div>
              </div>
            </div>
            <br />
            <div>
              <div className="font-weight-bold">TagLine: </div>
              {props.detailsFetch.tagline}
            </div>
            <br />
            <div>
              <div className="font-weight-bold">Release Date: </div>
              {props.detailsFetch.release_date}
            </div>
            <br />
            <div className="font-weight-bold">Genres: </div>
            <div className="d-flex flex-rows">
              {props.detailsFetch.genres &&
                props.detailsFetch.genres.map((data) => (
                  <div key={data.id}>
                    {data.name}
                    {".."}
                  </div>
                ))}
            </div>
            <br />
            <div className="font-weight-bold">Languages: </div>
            <div className="d-flex flex-rows">
              {props.detailsFetch.spoken_languages &&
                props.detailsFetch.spoken_languages.map((data, index) => (
                  <div key={index}>
                    {data.english_name}
                    {".."}
                  </div>
                ))}
            </div>
            <br />
            <div>
              <div className="font-weight-bold">Movie Duration: </div>
              {Math.floor(props.detailsFetch.runtime / 60)} hr{" "}
              {Math.floor(props.detailsFetch.runtime % 60)} mins
            </div>
            <br />
            <div>
              <div className="font-weight-bold">About the movie: </div>
              {props.detailsFetch.overview}
            </div>
            <br />
            <div className="font-weight-bold">Production Houses: </div>
            <div>
              {props.detailsFetch.production_companies &&
                props.detailsFetch.production_companies.map((data) => (
                  <div key={data.id}>. {data.name}</div>
                ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="App">
          <h1>Error while fetch data {props.errorFetch}</h1>
        </div>
      )}
    </>
  );
}

const makeStateToProps = (state) => {
  return {
    detailsFetch: state.detailsReducer.data,
    load: state.detailsReducer.loading,
    errorFetch: state.detailsReducer.error,
    toggleIt: state.toggleReducer,
  };
};

const makeDispatchToProps = (dispatch) => {
  return {
    detailsDispatch: (id) => dispatch(fetchId(id)),
    toggleUp: (itemLen, index) => dispatch(toggleUp(itemLen, index)),
  };
};

export default connect(makeStateToProps, makeDispatchToProps)(MovieDetails);
