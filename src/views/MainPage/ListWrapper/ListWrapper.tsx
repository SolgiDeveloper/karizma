import React,{useEffect, useState} from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import axios from 'axios'
import { styled } from "@mui/system";
import { useDispatch } from "react-redux";
import { addToList } from "../../../store/slices/listSlice";
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
const Peoples = styled(Box)(({ theme }) => ({
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
interface peopleT {
  name: string,
  barthDay: string,
  eyeColor: string,
  hairColor:string
}
const ListWrapper = () => {
    const dispatch = useDispatch();
    const [people, setPeople] = useState<peopleT[]>([])

    const getAllPeoples = () => {
      let getPeople:peopleT[] = []
      axios.get<any>(`https://swapi.dev/api/people/`)
        .then(res => {
          res?.data.results.map((item:any) => {
            getPeople.push({
              name: item.name,
              barthDay: item.birth_year,
              eyeColor: item.eye_color,
              hairColor:item.hair_color
            })
          })
          setPeople(getPeople)
        })
    }
    const handleGetPeoples = () => {
      people.length > 0 ? setPeople([]) : getAllPeoples()
    }
  useEffect(() => {
    getAllPeoples()
  },[])
  return (
    <Wrapper>
      <TextField placeholder='Search...' variant="outlined" />
      <ItemsWrapper>
        {people.map((item) => {
          return <Peoples onClick={()=> dispatch(addToList(item.name))}>
                  <Typography variant="h6">name: {item.name}</Typography>
                  <Typography variant="subtitle1">barth day: {item.barthDay}</Typography>
                  <Typography variant="subtitle1">eye color: {item.eyeColor}</Typography>
                  <Typography variant="subtitle1">hair color: {item.hairColor}</Typography>
                </Peoples>
        })}
      </ItemsWrapper>
      <Button sx={BottonStyle} variant="contained" onClick={handleGetPeoples}>{people.length > 0 ? 'CLEAR LIST' : 'LOAD PEOPLES'}</Button>
    </Wrapper>
  )
};

export default ListWrapper;