import axios from "axios";
import React, { useEffect, useReducer } from "react";
import MUIDataTable from "mui-datatables";
import NavbarComponent from "./Navbar";
const initialState = {
    usersData: []
}
function reducer(state, action) {
    switch (action.type) {
        case "SET_USERS_DATA":
            return { ...state, usersData: action.payload }; // Return a new state object
        default:
            return state; // Always return state for unmatched action types
    }
}
export default function Practise() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const {usersData} = state;
    const columns = ["FirstName", "LastName", "Feedback"];
    const options = {
        selectedRows: false,
        elevation: 0,
        rowsPerPage: 5,
        rowsPerPageOptions: [5, 10, 20],
    }


    useEffect(() => {
        const fetchTableData = async () => {
            try {
                const result = await axios.get('http://localhost:3001/feedback');
                if (result) {
                    dispatch({ type: "SET_USERS_DATA", payload: result.data });
                }
            } catch (error) {
                console.log(error);
            }

        }
        fetchTableData();
    }, [])

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
}