import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import HandshakeIcon from '@mui/icons-material/Handshake';
import * as  postService from "../../services/postService";
import { Navigate, useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: "flex",
  direction: "column",
  justifyContent: "center",
};

export default function OfferModal({post}) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAcceptOffer = async () => {
    const acceptedOffer = await postService.closePost(post?._id)
    handleClose()
    navigate("/")
  }
  
  return (
    <div>
      <Button onClick={handleOpen}><HandshakeIcon/></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button variant="contained" onClick={handleAcceptOffer}>Accept Offer</Button>
        </Box>
      </Modal>
    </div>
  );
}