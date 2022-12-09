import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'






export function MediaCard() {
    return (
      <Card sx={{ maxWidth: 200 }}>
        <CardMedia
          component="img"
          height="140"
          image={'https://media.istockphoto.com/id/968315374/es/vector/concepto-de-icono-de-c%C3%ADrculo-de-bomba-de-combustible.jpg?s=612x612&w=0&k=20&c=aMSuI_Oo6-pVCz5wOVHQMqIr1iiMtiNobmibi0PeZZ8='}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Default
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Ofertas
          </Typography>
        </CardContent>
        <CardActions>
          <Button fullWidth variant="contained">Ver Precios</Button>
          
        </CardActions>
      </Card>

      
    );
  }
  export function MediaCard2() {
    return (
      <Card sx={{ maxWidth: 200 }}>
        <CardMedia
          component="img"
          height="140"
          image={'https://e7.pngegg.com/pngimages/511/57/png-clipart-royal-dutch-shell-logo-decal-design-text-logo.png'}
          alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Shell
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Oferta del dia
          </Typography>
        </CardContent>
        <CardActions>
          <Button fullWidth variant="contained">Ver Precios</Button>
  
        </CardActions>
      </Card>
  
  
    );
  }
  export function MediaCard3() {
    return (
      <Card sx={{ maxWidth: 200 }}>
        <CardMedia
          component="img"
          height="140"
          image={'https://companieslogo.com/img/orig/PBR-435ea1d8.png?t=1647968022'}
          alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Petrobras
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Oferta del dia
          </Typography>
        </CardContent>
        <CardActions>
          <Button fullWidth variant="contained">Ver Precios</Button>
  
        </CardActions>
      </Card>
  
  
    );
  }
  export function MediaCard4() {
    return (
      <Card sx={{ maxWidth: 200 }}>
        <CardMedia
          component="img"
          height="140"
          image={'https://pbs.twimg.com/profile_images/1598311484920061953/tYHNgJiM_400x400.jpg'}
          alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          PetroPar
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Ofertas
          </Typography>
        </CardContent>
        <CardActions>
          <Button fullWidth variant="contained">Ver Precios</Button>
  
        </CardActions>
      </Card>
  
  
    );
  }
  export function MediaCard5() {
    return (
      <Card sx={{ maxWidth: 200 }}>
        <CardMedia
          component="img"
          height="140"
          image={'https://media.istockphoto.com/id/968315374/es/vector/concepto-de-icono-de-c%C3%ADrculo-de-bomba-de-combustible.jpg?s=612x612&w=0&k=20&c=aMSuI_Oo6-pVCz5wOVHQMqIr1iiMtiNobmibi0PeZZ8='}
          alt="green iguana" 
          />
          
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Petrobas
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Ofertas
          </Typography>
        </CardContent>
        <CardActions>
          <Button fullWidth variant="contained">Ver Precios</Button>
  
        </CardActions>
      </Card>
  
  
    );
  }
  