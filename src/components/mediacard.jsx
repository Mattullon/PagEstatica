import { Grid } from "@mui/material";
import { MediaCard, MediaCard2, MediaCard3, MediaCard4, MediaCard5 } from "./card";


export const Cardss = ()=>  <div  className="fundadores">
<h3 className="strong"> DEVELOPERS </h3>
<Grid container spacing={4} justifyContent={"center"}>
  <Grid item  >
    <MediaCard />
  </Grid>
  <Grid item >
    <MediaCard2 />
  </Grid>
  <Grid item>
    <MediaCard3 />
  </Grid>
  <Grid item>
    <MediaCard4 />
  </Grid>
  <Grid item>
    <MediaCard5 />
  </Grid>
</Grid>
</div>