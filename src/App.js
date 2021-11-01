import {useEffect, useState} from "react"
import Map from "./components/Map";
import Grid from '@mui/material/Grid';
import {getPlacesData} from './helper/index';
import Lists from "./components/Lists";
import Header from "./components/Header";
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
    <div>
      {/* Header */}
      <Header/>

      <Grid container spacing={2} padding={2}>
        <Grid item xs={12} md={4}>
          <Lists places={places}/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map coordinates={coordinates} setCoordinates={setCoordinates} setBounds={setBounds}/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
