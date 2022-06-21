import "./App.css";
import Contador from "./components/Contador";
import Mensaje from "./components/Mensaje";

function App() {
  return (
    <div className="App">
      <div className="container mt-3">
        <div class="jumbotron">
          <h1 class="display-4">Mi proyecto React</h1>
          <hr class="my-4" />
          <p class="lead">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            veritatis deserunt perspiciatis, iste dolorum ducimus sequi nisi
            voluptate placeat distinctio laboriosam nesciunt dolor voluptatibus.
            Illum atque eligendi eius deserunt quod.
          </p>
          <div className="row">
            <div className="col-4">
              <Mensaje mensaje="Mensaje N1 desde props" fondo="darkSeaGreen" />
            </div>
            <div className="col-4">
              <Mensaje mensaje="Mensaje N2 desde props" fondo="darkSalmon" />
            </div>
            <div className="col-4">
              <Mensaje mensaje="Mensaje N3 desde props" fondo="skyBlue" />
            </div>
          </div>

          <hr />

          <Contador id="1" valor="123" fondo="purple"/>
          <Contador id="2" valor="321" fondo="brown"/>
        </div>
      </div>
    </div>
  );
}

export default App;
