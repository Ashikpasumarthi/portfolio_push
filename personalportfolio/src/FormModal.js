// import React from "react";
// // import {
// //     FormControl, InputLabel, Input,
// // } from "@mui/material";
// export default function FormModal() {

//     const [firstName, setFirstName] = React.useState("");
//     const [lastName, setLastName] = React.useState("");
//     const [feedback, setFeedback] = React.useState("");
//     return (
//         <div>
//             <form className="form">
//                 <div className="label">
//                     <label>First Name</label>
//                     <input value={ firstName } onChange={ (e) => setFirstName(e.target.value) } />
//                 </div>
//                 <div className="label">
//                     <label>Last Name</label>
//                     <input value={ lastName } onChange={ (e) => setLastName(e.target.value) } />
//                 </div>
//                 <div className="label">
//                     <label>FeedBack</label>
//                     <textarea style={ {
//                         width: "22rem", height: "5rem", position: "relative",
//                         left: "0.5rem"
//                     } }></textarea>
//                 </div>

//             </form>

//         </div>
//     )
// }