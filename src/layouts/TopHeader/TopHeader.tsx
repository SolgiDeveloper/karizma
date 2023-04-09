import React, { useState } from "react";
import { Box, IconButton, Typography, Modal } from "@mui/material";
import { styled } from "@mui/system";
import HelpIcon from "@mui/icons-material/Help";

const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "50px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#1976d2",
  boxShadow:
    "rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px",
  position: "fixed",
  top: "0",
  zIndex: '2'
}));
const Img = styled("img")(({ theme }) => ({
  width: "40px",
  height: "40px",
  marginLeft: "10px",
}));
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: '5px',
  textAlign: "right",
};
const TopHeader = () => {
  const [openQModal, setOpenQModal] = useState(false);
  const handleQModal = () => {
    openQModal ? setOpenQModal(false) : setOpenQModal(true);
  };
  return (
    <Wrapper>
      <Img src="/logos/karizma.png" alt="karizma-logo" />
      <Typography variant="subtitle1" color="#fff">
        Code Challenge
      </Typography>
      <IconButton aria-label="help" onClick={handleQModal}>
        <HelpIcon sx={{ color: "#fff" }} />
      </IconButton>
      <Modal
        open={openQModal}
        onClose={handleQModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            آیتم های مورد نیاز
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, direction: "rtl" }}
          >
            با استفاده از api های فیک دو لیست دریافت کرده و در دو کامپوننت مجزا
            <br />
            نمایش داده شوند.
            <br />
            هر کدام از لیست ها قابلیت فیلتر داشته باشند .
            <br />
            با کلیک بر روی آیتم های هر لیست ، آن آیتم به لیست دست راستی اضافه
            شود .
            <br />
            با کلیک بر روی آیتم های لیست دست راست، آن آیتم حذف شود .
            <br />
            از typescript , redux , material ui استفاده شود .
          </Typography>
        </Box>
      </Modal>
    </Wrapper>
  );
};

export default TopHeader;
