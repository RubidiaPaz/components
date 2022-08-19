import logo from './logo.svg';
import './App.css';
//import Welcome from './Components/welcome'
//import Bienvenida from './Components/bienvenida';
import React from 'react'
import Avatar from './Components/avatar';
import Nombre from './Components/nombre';
import Carrera from './Components/carrera';
import Skill from './Components/skill';

function App(props) {

/*const datos={
  name:"Maria",
  age:12
}*/

  return (
    /*<div className="App">
      <Welcome name="Ruby"></Welcome>
      <Welcome {...datos}></Welcome>
      <Bienvenida name="UDB"></Bienvenida>
      <Bienvenida></Bienvenida>
    </div>*/
    <div className='App'>
      <Avatar></Avatar>
      <Nombre></Nombre>
      <Carrera></Carrera>
      <Skill></Skill>
    </div>
  );
}

export default App;
