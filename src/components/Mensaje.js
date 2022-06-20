import './Mensaje.css'

const Mensaje = (props) => {

  //let mensaje = 'Mensaje como parametro desde componente';
  //let mensaje = props.mensaje;
  //let fondo = props.fondo;

  // destructuring objects
  let { mensaje, fondo } = props;
  
  return (
    <div className="mensaje">
      <div className="jumbotron" style={{ backgroundColor: fondo }}>
        <h3>{mensaje}</h3>
        {new Date().toLocaleDateString()}
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
          accusantium omnis!
        </p>
      </div>
    </div>
  );
};

export default Mensaje;
