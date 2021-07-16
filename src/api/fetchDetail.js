import axios from "axios";

/*
This component houses the api call function used by associated sagas to get the movie details from api
*/

const fetchDetail = (id) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=149322c872ad4b5be985e67a21e4a636`
    )
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(`${error.status} : ${error.message}`);
    });
};

export default fetchDetail;
