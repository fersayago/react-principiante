import React from 'react'
import './Contador.css'

class Contador extends React.Component{
  constructor(props){
    super(props)

    this.incrementar = this.incrementar.bind(this);

    this.state = {
      contador : Number(props.valor)
    }
  }

  /* state = {
    contador: Number(this.props.valor)
  } */

  incrementar(){
    console.log(`C${this.props.id} incrementando`);
    this.setState(prevstate => ({ contador: prevstate.contador + 1 }))
  }

  render(){

    let { id, fondo } = this.props;
    let { contador } = this.state;

    return(
      <div className="Contador">
        <div className="jumbotron" style={{ backgroundColor: fondo }}>
          <h1>Contador {id}</h1>
          <hr />
          <h4 className="alert alert-info w-50">Valor: {contador}</h4>

          <button className="btn btn-success my-1" onClick={() => this.incrementar()}
          /* onClick={() => {
            // this.state.contador + 1 ❌
            this.setState(prevstate => ({ contador: prevstate.contador + 1 }))
          }} */
          >Incrementar</button>
        </div>
      </div>
    )}
}

export default Contador;