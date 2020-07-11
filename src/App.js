import React, {useState} from "react";

import Header from './Components/Header'
// import Tags from './Components/Tags'
import Tags2 from './Components/Tags'

import {BrowserRouter as Router } from 'react-router-dom'
import Board from "./Components/Board";
import courses from "./mock/courses"


function App() {

  const [active, setActive] = useState('')
  const [lastActive, setLastActive] = useState('')


  return (

    <div class = "flex flex-col">
      <Router>
        <Header />
        <Tags2 active = {active} setActive = {setActive}/>
        <Board classes = {courses} active = {active} setActive = {setActive}
          lastActive = {lastActive} setLastActive = {setLastActive}/>        
      </Router>
        
    </div>
  );
}

export default App;
