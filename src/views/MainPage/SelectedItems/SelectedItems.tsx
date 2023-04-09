import React from 'react';
import {Box, Button} from "@mui/material";
import { styled } from "@mui/system";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromList } from "../../../store/slices/listSlice";
const Main = styled(Box)(({ theme }) => ({
    backgroundColor: '#fff',
    height: '725px',
    display: 'flex',
    flexDirection: 'column',
    padding: '16px',
}));
const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    overflowY: 'auto',
    marginTop: '10px',
    height: 'fit-content',
    maxHeight: '690px'
}));
const Items = styled(Button)(({ theme }) => ({
    backgroundColor: '#1976d2',
    height: '32px',
    margin: '5px',
    borderRadius: '16px'
}));
const SelectedItems = () => {
    const dispatch = useDispatch();
    const list: string[] = useSelector(
        (state: RootState) => state.list.value
      );
  return (
    <Main>
        {list.length > 0 && <Box>Tab To Delete</Box>}
        <Wrapper>
            {list.length > 0 && list.map((item)=>{
                return <Items variant="contained" onClick={()=> dispatch(removeFromList(item))}>{item}</Items>
            })}
            
        </Wrapper>
    </Main>
  )
};

export default SelectedItems;