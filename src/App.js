import logo from "./logo.svg";
import "./App.css";
import imagePublic from "/imageInPublic.jpg";

function App() {
  return (
    <div>
      <div style={{ border: "solid 1 black", maxWidth: "100vw" }} />

      <h1 className="title red">Your name here</h1>

      <br />

      <img src={"/imageInSrc.jpg"} />

      <br />

      <img src={imagePublic} />

      <video style={{ width: "320", height: "240", controls }}>
        <source src={"myVideo.mp4"} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
