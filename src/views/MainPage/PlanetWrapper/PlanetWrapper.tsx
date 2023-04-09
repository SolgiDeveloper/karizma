import React,{useEffect, useState} from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import axios from 'axios'
import { styled } from "@mui/system";
import { useDispatch } from "react-redux";
import { addToList } from "../../../store/slices/listSlice";
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
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
const IconWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#c4c4c4',
  borderRadius: '50%',
  padding: '10px',
  height: '24px',
  width: '24px',
  marginRight: '10px'
}));
const Planets = styled(Box)(({ theme }) => ({
  marginBottom: '10px',
  border: '1px solid #c4c4c460',
  borderRadius: '10px',
  padding: '10px',
  display: 'flex',
  alignItems: 'center',
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
    const dispatch = useDispatch();
    const [planets, setPlanets] = useState<planetT[]>([])
    const [searchedList, setSearchList] = useState<planetT[]>([])
    const [isSearch, setIsSearch] = useState<boolean>(false)
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
    const handleSearch = (event:any) => {
      let planetHolder:planetT[] = []
      if(event.target.value.length > 0) setIsSearch(true)
      planets.map(item => {
        if(item.name.toLowerCase().search(event.target.value.toLowerCase()) >= 0) planetHolder.push(item)
      })
      setSearchList(planetHolder)
    }
  useEffect(() => {
    getAllPlanets()
  },[])
  return (
    <Wrapper>
      <TextField placeholder='Search...' variant="outlined" onChange={handleSearch}/>
      {searchedList.length === 0 && isSearch && <Box>Nothing Founded !</Box>}
      {!isSearch && <ItemsWrapper>
        {planets.length > 0 && planets.map((item) => {
          return <Planets onClick={()=> dispatch(addToList(item.name))}>
                    <IconWrapper>
                      <InsertPhotoIcon sx={{color: '#fff'}}/>
                    </IconWrapper>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                      <Typography variant="h6">name: {item.name}</Typography>
                      <Typography variant="subtitle1">climate: {item.climate}</Typography>
                      <Typography variant="subtitle1">diameter: {item.diameter}</Typography>
                      <Typography variant="subtitle1">gravity: {item.gravity}</Typography>
                    </Box>
                </Planets>
        })}
      </ItemsWrapper>}
      {isSearch && <ItemsWrapper>
        {searchedList.length > 0 && searchedList.map((item) => {
          return <Planets onClick={()=> dispatch(addToList(item.name))}>
                    <IconWrapper>
                      <InsertPhotoIcon sx={{color: '#fff'}}/>
                    </IconWrapper>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                      <Typography variant="h6">name: {item.name}</Typography>
                      <Typography variant="subtitle1">climate: {item.climate}</Typography>
                      <Typography variant="subtitle1">diameter: {item.diameter}</Typography>
                      <Typography variant="subtitle1">gravity: {item.gravity}</Typography>
                    </Box>
                </Planets>
        })}
      </ItemsWrapper>}
      <Button sx={BottonStyle} variant="contained" onClick={handleGetPalnets}>{planets.length > 0 ? 'CLEAR LIST' : 'LOAD PLANETS'}</Button>
    </Wrapper>
  )
};

export default PlanetWrapper;