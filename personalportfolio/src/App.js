// import logo from './logo.svg';
import './App.css';
// import PreLoader from './PreLoader';
import HomePage from './HomePage';
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

      <HomePage />

    </div>
  );
}

export default App;
