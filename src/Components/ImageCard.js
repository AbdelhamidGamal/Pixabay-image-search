import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export default function ImageCard({ image }) {
  return (
    <Card style={{ width: '20vw', margin: '8px' }}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt={image.tags}
          height='240'
          image={image.largeImageURL}
          title={image.tags}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {image.tags}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
