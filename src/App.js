import {useEffect, useState} from "react"
import Map from "./components/Map";
import Grid from '@mui/material/Grid';
import {getPlacesData} from './helper/index';
import Lists from "./components/Lists";
import Header from "./components/Header";
import { Container, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import PlacesPage from "./components/PlacesPage";
import { Box } from "@mui/system";
import Loading from './components/Loading';
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import UserPage from "./components/UserPage";
import Footer from "./components/Footer";
function App() {
  const [coordinates,setCoordinates] = useState({});
  const [bounds,setBounds] = useState(null);
  const [places,setPlaces] = useState([]);
  const [type,setType] = useState('attractions');
  const [loading,setLoading] = useState(false);
  const [rating,setRating] = useState('');
  const [userInfo,setUserInfo] = useState(null);
  const [childClicked, setChildClicked] = useState(null);
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition( e => {
      setCoordinates({lat: e.coords.latitude,lng: e.coords.longitude});
    });
  },[]);
  useEffect(()=>{
    const data = localStorage.getItem('userInfo');
    setUserInfo(data);
    console.log(data);
  },[]);
  useEffect(()=>{
    if(bounds){
      console.log("Here");
      setLoading(true);
      // getPlacesData(bounds.sw,bounds.ne,type)
      //   .then(data =>{
      //     console.log("[ Places Data ] ",data);
      //     setPlaces(data);
      //     setLoading(false);
      //   })
      //   .catch(err=>{
      //     console.log(err);
      //   })
    }
  },[bounds,type]);
  return (
      <Router>
        <Header setCoordinates={setCoordinates}/>
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
            <Container>
              <Box variant="div" sx={{display: 'flex',mt: 4,}}>
                <FormControl sx={{minWidth: 120,mr: '40px'}}>
                    <InputLabel id="type">Explore</InputLabel>
                    <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
                      <MenuItem value="attractions">Attraction</MenuItem>
                      <MenuItem value="hotels">Hotels</MenuItem>
                      <MenuItem value="restaurants">Restaurants</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{minWidth: 120}}>
                  <InputLabel id="rating">Rating</InputLabel>
                  <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="3">Above 3.0</MenuItem>
                    <MenuItem value="4">Above 4.0</MenuItem>
                    <MenuItem value="4.5">Above 4.5</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box variant="div" sx={{ zindex: '1'}}>
                {loading===true? <Loading/>:
                  <Lists childClicked={childClicked} places={places} rating={rating} type={type} />
                }
              </Box>
            </Container>
            <Grid container spacing={2} padding={2}>
              <Grid item xs={12} md={12} sx={{display: 'flex', alignItems: 'center',justifyContent: 'center'}}>
                <Map setChildClicked={setChildClicked} coordinates={coordinates} setCoordinates={setCoordinates} setBounds={setBounds} places={places}/>
              </Grid>
            </Grid>
          </Route>
          
        </Switch>
        <Footer/>
        
      </Router>
    
  );
}
export default App;