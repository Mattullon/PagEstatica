import "./App.css";
import React from "react";
import { Layout } from "./components/Layout";
import { Chip, Divider, Stack, Button } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import HtmlIcon from "@mui/icons-material/Html";
function App() {
  return (
    <div className="App">
    <Layout>
      
      <div className="inicio">

        <h3 className="big"> BIENVENIDOS ! </h3>
        <h4 className="media">
          Este seria el Primer Torneo Para Desarrolladores de Apps En Todo el
          Paraguay !
        </h4>
        <div className="Tparrafo">
          <p className="parrafo">
            Agile Tribe matches start-ups with the best remote developers,
            however, just in case you didn't realise, our rates are 50% cheaper
            than the industry average and we don't charge ridiculous mark-ups
            (only 25%). To top it off, all our developers have successfully
            completed our technical vetting which includes a 2-stage interview
            process, soft-skills test and a technical assessment.
          </p>{" "}
          <p className="parrafo">holaaa</p>
        </div>
        <Divider>
          <ArrowDownwardIcon />
        </Divider>
        <div className="inicio1">
          <div className="inicio2">
            hola este seria una imagen de ilustracion nada mas para anidar texto
            Agile Tribe matches start-ups with the best remote developers,
            however, just in case you didn't realise, our rates are 50% cheaper
            than the industry average and we don't charge ridiculous mark-ups
            (only 25%). To top it off, all our developers have successfully
            completed our technical vetting which includes a 2-stage interview
            process, soft-skills test and a technical assessment.
          </div>
          <div className="tiv">UNA IMAGEN DENTRO DE UN DIV CON TEXTO</div>

          <img
            src="https://pandorafms.com/blog/wp-content/uploads/2020/07/que-es-un-desarrollador-featured.jpg"
            alt=""
            className="img"
          />
        </div>
        <Button variant="contained" style={{ left: -45 }}>
          {" "}
          More{" "}
        </Button>
        <Button variant="outlined" style={{ left: 20 }}>
          {" "}
          next{" "}
        </Button>
      </div>
      <Divider>
        <ArrowDownwardIcon />
      </Divider>
      <div className="fotos">
        <div className="caja">
          <div className="caja1">
            <HtmlIcon></HtmlIcon> <br></br>
            200+ developers ready to work
          </div>
          <div className="caja2">200+ developers ready to work</div>
          <div className="caja3">200+ developers ready to work</div>
        </div>
        <div className="strong">
          Work with an Agile developer
          <div className="stron">
            {" "}
            Agile Tribe matches start-ups with the best remote developers,
            however, just in case you didn't realise, our rates are 50% cheaper
            than the industry average and we don't charge ridiculous mark-ups
            (only 25%). To top it off, all our developers have successfully
            completed our technical vetting which includes a 2-stage interview
            process, soft-skills test and a technical assessment.
          </div>
        </div>
        <Stack justifyContent={"center"} direction="row" spacing={1}>
          <Chip label="Chip Filled" />
          <Chip label="Chip Outlined" variant="outlined" />
        </Stack>
      </div>
      
    </Layout>
    </div>
  );
}

export default App;

//
//layout  que este anidado como hijop un componente para quie siempre tenga el appbar
// drawer que salga las opciones
// pie de pag al layout foother
// agregarle mas pag
