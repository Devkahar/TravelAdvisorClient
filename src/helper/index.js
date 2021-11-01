import axios from 'axios';

    
const getPlacesData = async (sw,ne) => {
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
          'x-rapidapi-key': '80b9502cddmshb0f15ca82d9513fp18cda4jsn39318d159672'
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


export { getPlacesData };