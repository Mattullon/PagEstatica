import { Grid } from "@mui/material";
import { MediaCard, MediaCard2, MediaCard3, MediaCard4, MediaCard5 } from "./card";
import "../App.css"
import { Layout } from "./Layout";
import Footer from "./footer";

export const Cardss = ()=>  
<>
<div  className="App">
  <Layout> </Layout>
<h3 className="strong" justifyItems={"center"}> DEVELOPERS </h3>
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
<Footer></Footer>
</div>
</>