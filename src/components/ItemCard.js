import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
export default function MediaCard({name,address,image,rating,ranking}) {
    const renderStart = (n)=>{
        return (
            Array(n).fill(0).map((e,i) =>{
            return <StarIcon style={{fill: '#FF9529'}}/>
        })
        )
    }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={image?.url}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {address}
        </Typography>
        <br/>
        <Typography variant="p" color="text.secondary">
          {ranking}
        </Typography>
        <br/>
        <br/>
        <Typography variant="p" color="text.secondary">
          <div className="d-flex">
              {
                renderStart(parseInt(rating))
              }
          </div>
        </Typography>
      </CardContent>
      <CardActions>

        <Button size="small">See More</Button>
      </CardActions>
    </Card>
  );
}