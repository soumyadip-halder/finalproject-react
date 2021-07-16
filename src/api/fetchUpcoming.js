import axios from "axios";

/*
This component houses the api call function used by associated sagas to get the upcoming movie lists from api
*/

const fetchUpcoming = () => {
  return axios
    .get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=149322c872ad4b5be985e67a21e4a636&page=3"
    )
    .then((response) => response.data.results)
    .catch((error) => {
      throw new Error(`${error.status} : ${error.message}`);
    });
};

export default fetchUpcoming;
