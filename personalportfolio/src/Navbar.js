import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'; // Make sure to import Link from react-router-dom
import Error from './HomePage'
function NavbarComponent() {
    const [navbarData, setNavbarData] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const fetchNavbarData = async () => {
            try {
                console.log('Making API request...');
                const result = await axios.get('http://localhost:3001/api');

                console.log('Response received:', result);
                if (result && result.data) {
                    console.log("Data received successfully:", result.data);
                    setNavbarData(result.data);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setErrorMessage(error.message);
            }
        };
        fetchNavbarData();
    }, []);

    return (
        <div style={ {
            display: "flex",
            justifyContent: "center"
        } }>
            <ul className="navbar">
                { !errorMessage && Array.isArray(navbarData) && navbarData.map((item) => (
                    <li key={ item.id }>
                        <Link to={ `/${item.id}` }>{ item.Navbar }</Link>
                    </li>
                )) }
                { errorMessage && <Error errorMessage={ errorMessage } /> }
            </ul>
        </div>
    );
}

export default NavbarComponent;
