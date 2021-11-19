import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import {Link} from 'react-router-dom';
import { Chip, Rating } from '@mui/material';
export default function MediaCard({place,type, selected, refProp}) {
  if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={place.photo.images.original.url}
        
        alt={place.name}
      />
      {/* {console.log(place.photo.images.original.url)} */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {place.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {place.address}
        </Typography>
        <Typography variant="p" color="text.secondary">
          {place.ranking}
        </Typography>
        <Typography variant="p" color="text.secondary">
          <div className="d-flex">
              <Rating name="read-only" value={parseFloat(place.rating)} precision={0.5} readOnly />
          </div>
        </Typography>
        {place?.cuisine?.map(({name}) => (
          <Chip label={name} sx={{mb: "8px",mr: "5px"}}/>
        ))}
      </CardContent>
      <CardActions>
        <Button size="small"><Link to={{pathname: `/viewPlacesDetails/${type}/${place.location_id}`, state: {...place}}} style={{textDecoration:"none", color:"inherit"}}>See More</Link></Button>
      </CardActions>
    </Card>
  );
}