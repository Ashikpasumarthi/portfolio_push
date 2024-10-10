// // import { Button } from "bootstrap";
// import React from "react";
// // import PropTypes from 'prop-types';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import {
//     MDBBtn,
//     MDBModal,
//     MDBModalDialog,
//     MDBModalContent,
//     MDBModalHeader,
//     MDBModalTitle,
//     MDBModalBody,
//     MDBModalFooter,
//   } from 'mdb-react-ui-kit';



// export default function FeedbackForm({centredModal,toggleOpen,setCentredModal}) {


//   return (
//     <>


//       <MDBModal className="modalPopUp" tabIndex='-1' open={centredModal} onClose={() => setCentredModal(false)} size="lg" backdrop={true}>
//         <MDBModalDialog centered>
//           <MDBModalContent>
//             <MDBModalHeader>
//               <MDBModalTitle>Modal title</MDBModalTitle>
//               <button className='btn-close' color='none' style={{height:"1.7rem"}} onClick={toggleOpen}>X</button>
//             </MDBModalHeader>
//             <MDBModalBody>
//               <p>
//                 Hello World
//               </p>
//             </MDBModalBody>
//             <MDBModalFooter>
//               <MDBBtn color='secondary' onClick={toggleOpen}>
//                 Close
//               </MDBBtn>
//               <MDBBtn>Save changes</MDBBtn>
//             </MDBModalFooter>
//           </MDBModalContent>
//         </MDBModalDialog>
//       </MDBModal>
//     </>
//   );
// }

// // export function FeedbackButton() {
// //     const [modalShow, setModalShow] = React.useState(false);

// //     return (
// //         <>
// //             {/* <Button  onClick={() => setModalShow(true)}>
// //         Launch vertically centered modal
// //       </Button> */}


// //         </>
// //     );
// // }


// // render(<App />);

import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios'
// import FormModal from './FormModal'
// import {
//   FormLabel,TextField,Input,  FormControl,  InputLabel,  FormHelperText,  Checkbox,  Switch,  FormControlLabel,    Stack,  Button,  TextField } from "@mui/material";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs({ handleClose, open }) {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [feedback, setFeedback] = React.useState("");

  async function sendData(newItems) {
    try {
      const response = await axios.post("http://localhost:3001/feedback", newItems);
      console.log("Data sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Collect the form data into `newItems`
    let newItems = { FirstName: firstName, LastName: lastName, Feedback: feedback };
    console.log(newItems);

    // Await the data submission
    sendData(newItems);

    // Clear form fields after submission
    setFirstName("");
    setLastName("");
    setFeedback("");

    // Close the form/modal or handle UI updates
    handleClose();
  }


  return (
    <React.Fragment>

      <BootstrapDialog
        onClose={ handleClose }
        aria-labelledby="customized-dialog-title"
        open={ open }
      >
        <DialogTitle sx={ { m: 0, p: 2 } } id="customized-dialog-title" style={ {
          background: "linear-gradient(45deg, yellow, orange)", fontWeight: "bold", display: "flex",
          justifyContent: "center"
        } }>
          FeedBack
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={ handleClose }
          sx={ (theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          }) }
        >
          <CloseIcon style={ { fontWeight: "bolder" } } />
        </IconButton>
        <DialogContent dividers>
          <div>
            <form className="form">
              <div className="label">
                <label>First Name</label>
                <input value={ firstName } onChange={ (e) => setFirstName(e.target.value) } />
              </div>
              <div className="label">
                <label>Last Name</label>
                <input value={ lastName } onChange={ (e) => setLastName(e.target.value) } />
              </div>
              <div className="label">
                <label>FeedBack</label>
                <textarea style={ {
                  width: "22rem", height: "5rem", position: "relative",
                  left: "0.5rem"
                } } value={ feedback } onChange={ (e) => setFeedback(e.target.value) }></textarea>
              </div>

            </form>

          </div>
        </DialogContent>
        <DialogActions>
          {/* <Button autoFocus onClick={ handleClose }>
            Save changes
          </Button> */}
          <Button onClick={handleSubmit} className='subButton' >Submit</Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}

