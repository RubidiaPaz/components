import React from 'react'

export default class Bienvenida extends React.Component{
    constructor(props){
        super(props);
        this.state={name:this.props.name}
    }
  render(){
    return <h1 className='colorLetra'>Saludo {this.state.name} ,desde componente de clase</h1>
  }
}