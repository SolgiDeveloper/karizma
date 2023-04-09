import React,{useEffect, useState} from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import axios from 'axios'
import { styled } from "@mui/system";
const Wrapper = styled(Box)(({ theme }) => ({
    backgroundColor: '#fff',
    height: '725px',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    position: 'relative',
    padding: '16px'
}));
const ItemsWrapper = styled(Box)(({ theme }) => ({
  height: 'calc(100% - 110px)',
  marginTop: '5px',
  overflowY: 'auto'
}));
const Planets = styled(Box)(({ theme }) => ({
  marginBottom: '10px',
  border: '1px solid gray',
  borderRadius: '10px',
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer'
}));
const BottonStyle = {
  position: 'absolute', 
  bottom: '16px', 
  width: 'calc(100% - 32px)'
}
interface planetT{
  name: string,
  climate: string,
  diameter: string,
  gravity:string
}
const PlanetWrapper = () => {
    const [planets, setPlanets] = useState<planetT[]>([])
    const getAllPlanets = () => {
      let getPlanets:planetT[] = []
      axios.get<any>(`https://swapi.dev/api/planets/`)
        .then(res => {
          res?.data.results.map((item:any) => {
            getPlanets.push({
              name: item.name,
              climate: item.climate,
              diameter: item.diameter,
              gravity:item.gravity
            })
          })
          setPlanets(getPlanets)
        })
    }
    const handleGetPalnets = () => {
      planets.length > 0 ? setPlanets([]) : getAllPlanets()
    }
  useEffect(()=>{
    getAllPlanets()
  },[])
  return (
    <Wrapper>
      <TextField placeholder='Search...' variant="outlined" />
      <ItemsWrapper>
        {planets.map((item) => {
          return <Planets>
                  <Typography variant="h6">name: {item.name}</Typography>
                  <Typography variant="subtitle1">climate: {item.climate}</Typography>
                  <Typography variant="subtitle1">diameter: {item.diameter}</Typography>
                  <Typography variant="subtitle1">gravity: {item.gravity}</Typography>
                </Planets>
        })}
      </ItemsWrapper>
      <Button sx={BottonStyle} variant="contained" onClick={handleGetPalnets}>{planets.length > 0 ? 'CLEAR LIST' : 'LOAD PLANETS'}</Button>
    </Wrapper>
  )
};

export default PlanetWrapper;