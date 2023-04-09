import React from 'react';
import {Box, Button} from "@mui/material";
import { styled } from "@mui/system";
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
  return (
    <Main>
        <Box>Tab To Delete</Box>
        <Wrapper>
            <Items variant="contained">Contained</Items>
        </Wrapper>
    </Main>
  )
};

export default SelectedItems;