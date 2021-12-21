import React from "react";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx';

ReactDOM.render(
    <React.StrictMode>
      <App />    
    </React.StrictMode>,
    document.getElementById('root')
  );
  

//const getUserModule = () =>
////  import(/* webpackChunkName: "usersAPI" */ "./common/usersAPI");
  
//const btn = document.getElementById("btn");

//btn.addEventListener("click", () => {
  //getUserModule().then(({ getUsers }) => {
    //getUsers().then(json => console.log(json));
//  });
//});


