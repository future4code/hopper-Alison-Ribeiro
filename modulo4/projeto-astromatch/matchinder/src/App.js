import React, {useEffect, useState} from "react";
import styled from "styled-components";
import api from "./config/configApi";
import {GlobalStyle, Container, TelaMatch} from "./components/Styled"
import Matches from "./pages/Matches";
import PerfisMatchs from "./pages/PerfisMatchs";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <TelaMatch>
        <Matches altm="banana123" outravar="Outra Coisa" />
        {/* <PerfisMatchs /> */}
      </TelaMatch>
    </Container>
  );
}

export default App;