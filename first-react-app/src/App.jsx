import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ButtonComponent
          textContent="Buonasera"
          btnStyle={{ padding: "1rem 2rem", marginTop: "3rem", borderRadius: "5px", fontWeight: "bold" }}
        />

        <ImageComponent imgSrc="./assets/img/img1.jpg" alt="immagine strana" width="200px" height="300px" />
        <ImageComponent imgSrc="./assets/img/img2.jpg" alt="immagine animale" width="300px" height="200px" />
      </header>
    </div>
  );
}

export default App;
