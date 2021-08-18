import React from "react";
import ProfilePhoto from "./components/ProfilePhoto/ProfilePhoto";
import FullName from "./components/FullName/FullName";
import Adresse from "./components/Adresse/Adresse";
import profile from "./profile.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="photo">
        <ProfilePhoto profile={profile} />
      </div>
      <FullName FullName="Aquila Touati" />
      <Adresse Adresse="akilatouati97@gmail.com" />
    </div>
  );
}

// // function App() {
// //   return (
// //     <div>
// //       <div style={{ border: "solid 1 black", maxWidth: "100vw" }} />

// //       <h1 className="title red">Your name here</h1>

// //       <br />

// //       <img src={"/imageInSrc.jpg"} />

// //       <br />

// //       <img src={imagePublic} />

// //       <video style={{ width: "320", height: "240", controls }}>
// //         <source src={"myVideo.mp4"} type="video/mp4" />
// //       </video>
// //     </div>
// //   );
// // }

// class student {
//   constructor(firstName, name, year) {
//     this.firstName = firstName;
//     this.name = name;
//     this.year = year;
//   }
//   getYear() {
//     return 2021 + 3 - year;
//   }
// }

export default App;
