import React from 'react';
import {Grid, Box } from "@mui/material";
import { styled } from "@mui/system";
import './App.css';
import ListWrapper from './views/MainPage/ListWrapper/ListWrapper';
import PlanetWrapper from './views/MainPage/PlanetWrapper/PlanetWrapper';
import TopHeader from './layouts/TopHeader/TopHeader';
import SelectedItems from './views/MainPage/SelectedItems/SelectedItems';
// 
import store from "./store";
import { Provider } from "react-redux";

const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: 'calc(100vh - 50px)',
  marginTop: '50px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflowY: 'auto',
  "@media only screen and (max-width: 700px)": {
    paddingBottom: '30px'
  },
}));
const CostumGrid = styled(Grid)(({ theme }) => ({
  width: "90vw",
  "@media only screen and (max-width: 700px)": {
    width: "100vw",
  },
  
}));

function App() {
  
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Wrapper>
          <TopHeader/>
          <CostumGrid container spacing={10}>
            <Grid item xs={12} md={4}><ListWrapper/></Grid>
            <Grid item xs={12} md={4}><PlanetWrapper/></Grid>
            <Grid item xs={12} md={4}><SelectedItems/></Grid>
          </CostumGrid>
        </Wrapper>
      </Provider>
    </React.StrictMode>
    
  );
}

export default App;
