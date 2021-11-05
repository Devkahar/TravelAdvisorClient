import axios from 'axios';

// key-1 80b9502cddmshb0f15ca82d9513fp18cda4jsn39318d159672
// key-2 e459e3700amsh1643555e8da30bfp159241jsn289d99d7226b
// key-3 42aa039cbfmshee326db8eb75280p125554jsn359b0ed12bfd
const key1= "80b9502cddmshb0f15ca82d9513fp18cda4jsn39318d159672";
const key2= "e459e3700amsh1643555e8da30bfp159241jsn289d99d7226b";
const key3= "42aa039cbfmshee326db8eb75280p125554jsn359b0ed12bfd";

const getPlacesData = async (sw,ne) =>{
    const URL = 'https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary';
    const options = {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng
        },
        headers: {
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
          'x-rapidapi-key': `${key2}`
        }
    };
    try {
        const {data:{data}} = await axios.get(URL,options);
        // console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

const getPlacesDetails = async (id) =>{
  const URL =  'https://travel-advisor.p.rapidapi.com/attractions/get-details';
  const options = {
    params: {location_id: id, lang: 'en_US'},
    headers: {
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      'x-rapidapi-key': `${key2}`
    }
  }
  try {
    const data = await axios.get(URL,options);

    console.log(data.data);
    return data.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}


export { getPlacesData,getPlacesDetails };