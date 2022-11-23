import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import imag from '../image/imag.jpeg'
import imag2 from '../image/imag2.jpeg'
import imag3 from '../image/imag3.jpeg'
import imag4 from '../image/imag4.jpeg'
import imag5 from '../image/imag5.jpeg'




export function MediaCard() {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={imag}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Full-stack Engineer
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Jose Sosa
          </Typography>
        </CardContent>
        <CardActions>
          <Button fullWidth variant="contained">Contact</Button>
          
        </CardActions>
      </Card>

      
    );
  }
  export function MediaCard2() {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={imag2}
          alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Mobile Engineer
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Eugenio Gamarra
          </Typography>
        </CardContent>
        <CardActions>
          <Button fullWidth variant="contained">Contact</Button>
  
        </CardActions>
      </Card>
  
  
    );
  }
  export function MediaCard3() {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={imag3}
          alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Mobile Engineer
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Nicolas Benitez
          </Typography>
        </CardContent>
        <CardActions>
          <Button fullWidth variant="contained">Contact</Button>
  
        </CardActions>
      </Card>
  
  
    );
  }
  export function MediaCard4() {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={imag4}
          alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Mobile Engineer
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Merary Diniz
          </Typography>
        </CardContent>
        <CardActions>
          <Button fullWidth variant="contained">Contact</Button>
  
        </CardActions>
      </Card>
  
  
    );
  }
  export function MediaCard5() {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={imag5}
          alt="green iguana" 
          />
          
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Mobile Engineer
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Jeffrey Dahmer
          </Typography>
        </CardContent>
        <CardActions>
          <Button fullWidth variant="contained">Contact</Button>
  
        </CardActions>
      </Card>
  
  
    );
  }
  