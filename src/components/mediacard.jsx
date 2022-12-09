import { Button, Grid } from "@mui/material";
import {
  MediaCard,
  MediaCard2,
  MediaCard3,
  MediaCard4,
  MediaCard5,
} from "./card";
import "../App.css";
import { Layout } from "../Layout/Layout";

export const Cardss = () => (
  <div className="App">
    <Layout>
          <div className="divs" >
            <h1>
              The world's best developers, on-demand.{" "}
              </h1>
          </div>
      <Grid container spacing={4} justifyContent={"center"} padding="40px">
        
        
        <Grid item>
          <MediaCard />
        </Grid>
        <Grid item>
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
      <Grid container rowSpacing={8} fontSize={"30px"} flexDirection={"column"}>
        <Grid item textAlign={"center"}>
          Ready to start building your dream team?
        </Grid>
        <Grid item marginBottom={10}>
          <Button variant="contained"> Start to get contact </Button>
        </Grid>
      </Grid>
    </Layout>
  </div>
);
