import Lists from "./components/Lists";
import Header from "./components/Header";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import PlacesPage from "./components/PlacesPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import UserPage from "./components/UserPage";
import Footer from "./components/Footer";
function App() {
  return (
      <Router>
        <Header/>
        <Switch>
          {/* Header */}
          <Route exact path="/userpage">
            <UserPage/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/signup">
            <SignUp/>
          </Route>
          <Route exact path="/viewPlacesDetails/:type/:id" component={PlacesPage}>
            </Route>
          <Route exact path="/">
            <Lists/>
          </Route>
          
        </Switch>
        <Footer/>
      </Router>
    
  );
}
export default App;