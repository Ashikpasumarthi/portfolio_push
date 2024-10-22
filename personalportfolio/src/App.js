// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import PreLoader from './PreLoader';
import HomePage from './HomePage';
// import FeedbackPage from './FeedBack_Grid'; this is done using useState hook
import Practise from './Feedback_Grid_useReducer'; // this is done using useReducer hook
// import { useState, useEffect } from 'react';
function App() {
  // let [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   function handleLoadingTimeout() {
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 5000);
  //   }
  //   handleLoadingTimeout();
  // }, []);

  return (
    <div className="App">
      {/* {
        isLoading ? (<PreLoader />) : (<HomePage/>)
      } */}

      <Router>
        <Routes>
          <Route path="/1" element={ <HomePage /> } />
          {/* <Route path="/7" element={ <FeedbackPage /> } /> {/* Route for FeedbackPage */ } */}
          <Route path="/7" element = {<Practise/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
