import React, { useState, useEffect } from "react";
// import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import axios from 'axios';
import MUIDataTable from "mui-datatables";
import NavbarComponent from "./Navbar";

const FeedbackPage = () => {
    const [usersData, setUsersData] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    console.log(errorMessage, usersData);

    const columns = ["FirstName", "LastName", "Feedback"];
    const options = {
        selectedRows: false,
        elevation: 0,
        rowsPerPage: 5,
        rowsPerPageOptions: [5, 10, 20],
    }


    useEffect(() => {
        const fetchFeedbackData = async () => {
            try {
                console.log('Making API request...');
                const result = await axios.get('http://localhost:3001/feedback');

                console.log('Response received:', result);
                if (result) {
                    if (result) {
                        console.log("Data received successfully:", result.data);
                        setUsersData(result.data);
                    }
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setErrorMessage(error.message);
            }
        };
        fetchFeedbackData();
    }, []);
    return (
        <>
            <div>
                <NavbarComponent />
            </div>
            <div>
                <MUIDataTable
                    title={ "Employee List" }
                    data={ usersData }
                    columns={ columns }
                    options={ options }
                />


            </div>
        </>
    )
};
//     <Grid
//         style={ {
//             height: "400px",
//         } }
//         data={ usersData }
//     >
//         {/* <Column field="id" title="ID" width="40px" /> */ }
//         <Column field="name" title="FirstName" width="250px" />
//         <Column field="lastName" title="LastName" width="250px" />
//         <Column field="feedback" title="Feedback" width="250px" />
//         {/* <Column field="email" title="Email" />
//   <Column field="address.street" title="Address" />
//   <Column field="address.zipcode" title="Zipcode" />
//   <Column field="address.city" title="City" /> */}
//     </Grid>
// );


export default FeedbackPage;