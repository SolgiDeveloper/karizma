import React from 'react';
import {Box, Button, TextField} from "@mui/material";
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
const BottonStyle = {
  position: 'absolute', 
  bottom: '16px', 
  width: 'calc(100% - 32px)'
}
const ListWrapper = () => {
  return (
    <Wrapper>
      <TextField placeholder='Search...' variant="outlined" />
      <ItemsWrapper></ItemsWrapper>
      <Button sx={BottonStyle} variant="contained">CLEAR LIST</Button>
    </Wrapper>
  )
};

export default ListWrapper;