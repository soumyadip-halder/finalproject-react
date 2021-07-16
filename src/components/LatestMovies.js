import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Button, Collapse, Spinner } from "react-bootstrap";
import { toggleUp } from "../redux/toggle/action";
import { fetchLatest } from "../redux/latest/actions";
import { Link } from "react-router-dom";
import { bookLatestInit } from "../redux/seatsLatest/action";
import latest from "../assets/latestMovieSeatData";

/*
This component displays all the available latest movies in the browser for user to interact with
*/

function LatestMovies(props) {
  const { latestDispatch, bookedSeats } = props;

  useEffect(() => {
    latestDispatch();
    bookedSeats(latest);
  }, [latestDispatch, bookedSeats]);

  let errored = false;
  if (props.errorFetch !== "") {
    errored = true;
  }

  let filtered = [];
  if (props.searchStr !== "") {
    filtered = props.latestFetch.filter((data) =>
      data.title.toLowerCase().includes(props.searchStr.toLowerCase())
    );
  } else {
    filtered = props.latestFetch;
  }

  return (
    <>
      {props.load ? (
        <div className="App-header">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : !errored ? (
        <>
          {props.searchStr && (
            <div className="alert alert-light App">
              Showing results for search string: {props.searchStr}
            </div>
          )}
          <div className="d-flex flex-wrap justify-content-around">
            {/*<Modal
            isOpen={this.state.isOpen}
            contentLabel="Enroll"
            className="mymodal"
            overlayClassName="myoverlay"
            scrollable={true}
          >
            <FoodDetails recipe={this.state.tosend} close={this.closeit} />
          </Modal>*/}

            {filtered.length !== 0 ? (
              filtered.map((results, index) => (
                <div className="d-flex flex-column" key={results.id}>
                  <div className="card Card">
                    <Link to={`/${results.id}/latest`}>
                      <img
                        className="card-img-top"
                        src={`https://image.tmdb.org/t/p/w500/${results.poster_path}`}
                        alt=""
                      />
                    </Link>
                    <h6 className="card-title">Title: {results.title}</h6>
                    <h6 className="card-text">
                      Original Title: {results.original_title}
                    </h6>
                    <h6 className="card-text">
                      Released on: {results.release_date}
                    </h6>
                    <Button
                      onClick={() =>
                        props.toggleUp(props.latestFetch.length, index)
                      }
                      aria-controls={index}
                      aria-expanded={props.toggleIt[index]}
                    >
                      View Summary
                    </Button>
                  </div>

                  <Collapse
                    in={props.toggleIt[index]}
                    key={results.id}
                    unmountOnExit
                  >
                    <div id={index} className="card CardPop">
                      {/* {results.recipe.ingredientLines.map((line, index) => (
                    <h5 key={index} style={{ fontSize: "small" }}>
                      {index + 1}) {line}
                      <br />
                    </h5>
                  ))} */}
                      {results.overview}
                    </div>
                  </Collapse>
                </div>
              ))
            ) : (
              <div style={{ width: "100%", height: "500px" }}></div>
            )}
          </div>
        </>
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
    latestFetch: state.latestReducer.data,
    load: state.latestReducer.loading,
    errorFetch: state.latestReducer.error,
    toggleIt: state.toggleReducer,
    searchStr: state.searchReducer.str,
  };
};

const makeDispatchToProps = (dispatch) => {
  return {
    latestDispatch: () => dispatch(fetchLatest()),
    bookedSeats: (data) => dispatch(bookLatestInit(data)),
    toggleUp: (itemLen, index) => dispatch(toggleUp(itemLen, index)),
  };
};

export default connect(makeStateToProps, makeDispatchToProps)(LatestMovies);
