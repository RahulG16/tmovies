import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import apiConfig from "../../../Api/APIConfig";
import './ButtonModal.css'

const axios = require("axios");

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  height: 350,
  bgcolor: "black",
  boxShadow: 24,
  p: 4,
};

const btnStyle = {
  bgcolor: "red",
  borderRadius: "25px",
  color: "white",
  fontWeight: "bold",
  textTransform: "capitalize",
  padding: "8px 25px",
  minWidth: "140px",
};

export default function ButtonModal({ BtnName, data_id, data_type }) {

  let [link, setLink] = useState('')


  async function getInfo(id, type) {
    try {
      let response;

      if (type === "tv") {
        response = await axios.get(`${apiConfig.tvInfo(id)}`);
      } else if (type === "movie") {
        response = await axios.get(`${apiConfig.movieInfo(id)}`);
      }

      let ytKey = response.data.videos.results[0].key;

      setLink(ytKey)

      // console.log(resultArr)
    } catch (error) {
      console.error(error);
    }
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = (e) => {
    setOpen(true);
    // console.log(e.nativeEvent.originalTarget.dataset.id);
    let id = e.nativeEvent.originalTarget.dataset.id;
    let type = e.nativeEvent.originalTarget.dataset.type;

    console.log(id, type);

    getInfo(id, type)
  };
  const handleClose = () => setOpen(false);

  // e.nativeEvent.originalTarget.dataset.id || type
  return (
    <div>
      <Button
        onClick={handleOpen}
        data-id={data_id}
        data-type={data_type}
        sx={btnStyle}
        selected
        className="trailer-btn"
      >
        {BtnName}
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <iframe
            width="650"
            height="350"
            src={`https://www.youtube.com/embed/${link}`}
            title="YouTube video player"
            frameborder="0"
            allowFullScreen
          ></iframe>
        </Box>
      </Modal>
    </div>
  );
}
