// this is make use of custom hook.
import { useState, useEffect } from "react";
import axios from 'axios';

export function useNavbar() {
    const [navbarData, setNavbarData] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    useEffect(() => {
        const fetchNavbarData = async () => {
            try {
                console.log('Making API request...');
                const result = await axios.get('http://localhost:3001/api');

                console.log('Response received:', result);
                if (result) {
                    if (result) {
                        console.log("Data received successfully:", result.data);
                        setNavbarData(result.data);
                    }
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setErrorMessage(error.message);
            }
        };
        fetchNavbarData();
    }, []);
    return { navbarData, errorMessage }

}