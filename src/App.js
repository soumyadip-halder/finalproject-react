import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LatestMovies from "./components/LatestMovies";
import Header from "./components/Header";
import UpcomingMovies from "./components/UpcomingMovies";
import EventMovies from "./components/EventMovies";
import MovieDetails from "./components/MovieDetails";
import Footer from "./components/Footer";

/*
The main function featuring all the different routes and the default footer. 
This component also wraps all others with the redux store for further use
*/

function App() {
  return (
    <Provider store={store}>
      <Container fluid className="bg-dark">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={LatestMovies} />
            <Route exact path="/latest" component={LatestMovies} />
            <Route exact path="/upcoming" component={UpcomingMovies} />
            <Route exact path="/events" component={EventMovies} />
            <Route
              exact
              path="/:movieId/:from"
              component={MovieDetails}
            ></Route>
            <Route>
              <div className="App App-header">404 Page Not Found</div>
            </Route>
          </Switch>
        </BrowserRouter>
      </Container>
      <Footer />
    </Provider>
  );
}

export default App;
