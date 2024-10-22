
import  { useState } from 'react';
// import axios from 'axios';
import { Link } from "react-router-dom";
// import Button from '@mui/material/Button';
import CustomizedDialogs from './FeedBack';
import { useNavbar } from './useNavbar';
// import FeedbackPage from "./FeedBack_Grid"
// import {
//     MDBBtn} from 'mdb-react-ui-kit';
// import { Typed } from 'react-typed';
// import { error } from 'console';

export default function HomePage() {
    // const [navbarData, setNavbarData] = useState([]);
    // const [errorMessage, setErrorMessage] = useState("");
    const [open, setOpen] = useState(false);

    let { navbarData, errorMessage } = useNavbar()
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    // useEffect(() => {
    //     const fetchNavbarData = async () => {
    //         try {
    //             console.log('Making API request...');
    //             const result = await axios.get('http://localhost:3001/api');

    //             console.log('Response received:', result);
    //             if (result) {
    //                 if (result) {
    //                     console.log("Data received successfully:", result.data);
    //                     setNavbarData(result.data);
    //                 }
    //             }
    //         } catch (error) {
    //             console.error("Error fetching data:", error);
    //             setErrorMessage(error.message);
    //         }
    //     };
    //     fetchNavbarData();
    // }, []);

    // function popUp(){
    //     console.log("hey you have clicked the button")
    //     setModalShow(!modalShow);
    // }

    // try {
    //   const response = await axios.get('/');
    //   setNavbarData(response.data);
    // } catch (error) {
    //   console.error(error);
    // }
    // await axios.get('/')
    //     .then(response => {
    //         console.log(response.data);
    //         // Process the response data
    //     })
    //     .catch(error => {
    //         console.error(error);
    //         // Handle the error
    //     });
    //     };
    //     fetchNavbarData();
    // }, []);
    return (
        <>
            <div className="App-Header">
                {/* <h1 className="App-Header">That's me Ashik</h1> */ }

                <ul className="navbar">
                    { (!errorMessage && Array.isArray(navbarData)) && navbarData.map((item) => (
                        <li key={ item.id }><Link to={ `/${item.id}` }>{ item.Navbar }</Link></li>
                    )) }
                    {
                        errorMessage && <Error errorMessage={ errorMessage } />
                    }
                </ul>

                <div className='heroBox'>
                    <h1 className="intro ">👋 Hey, I'm Ashik</h1>
                    <h1 className="professional_intro">Full Stack Developer</h1>
                </div>

            </div>
            {/* <div>
                <h4 onClick={ toggleOpen } className="feedback" >FeedBack</h4>
            </div>
            <div>
                <FeedbackForm centredModal={ centredModal } toggleOpen={ toggleOpen } setCentredModal={ setCentredModal } />
            </div> */}

            {/* <div className='feedback'>
                <h4 onClick={ () => setModalShow(!modalShow) }>FeedBack</h4>
            </div>
            <FeedbackForm
                show={ modalShow }
                onHide={ () => setModalShow(false) }
            /> */}
            {
                <>
                    <div className='feedback' onClick={ handleClickOpen }>
                        <h4>FeedBack</h4>
                    </div>


                    <CustomizedDialogs handleClose={ handleClose } open={ open } />
                </>
            }


        </>
    );
}

export function Error({ errorMessage }) {
    return (
        <div>
            <h1>{ errorMessage }</h1>
        </div>
    )
}


