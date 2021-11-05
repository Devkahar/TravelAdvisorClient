import {useEffect, useState} from "react"
import Map from "./components/Map";
import Grid from '@mui/material/Grid';
import {getPlacesData} from './helper/index';
import Lists from "./components/Lists";
import Header from "./components/Header";
import { Container } from "@mui/material";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import PlacesPage from "./components/PlacesPage";
function App() {
  const [coordinates,setCoordinates] = useState({});
  const [bounds,setBounds] = useState(null);
  const [places,setPlaces] = useState([]);
  // SetUp User coordinates
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition( e => {
      setCoordinates({lat: e.coords.latitude,lng: e.coords.longitude});
    });
  },[]);
  useEffect(()=>{
    if(bounds!=null){
      getPlacesData(bounds.sw,bounds.ne)
        .then(data =>{
          console.log("[ Places Data ] ",data);
          setPlaces(data);
        })
    }
  },[bounds]);
  return (
      <Router>
        <Header />
        <Switch>
          {/* Header */}
          <Route exact path="/viewPlacesDetails/:id" component={PlacesPage} />
          <Route exact path="/">
            <Container>
              <Lists places={places} />
            </Container>
            <Grid container spacing={2} padding={2}>
              <Grid item xs={12} md={4}>
              </Grid>
              <Grid item xs={12} md={8}>
                <Map coordinates={coordinates} setCoordinates={setCoordinates} setBounds={setBounds}/>
              </Grid>
            </Grid>
          </Route>
          
        </Switch>
        
      </Router>
    
  );
}

export default App;
