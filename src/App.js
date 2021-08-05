import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="input">
      <span class="input-group-text">First and last name</span>
      <input
        type="text"
        aria-label="First name"
        class="form-control"
        placeholder="First Name"
      />
      <input
        type="text"
        aria-label="Last name"
        class="form-control"
        placeholder="Last Name"
      />

      <div class="secondinput">
        <span class="text" id="addon-wrapping"></span>
        <input
          type="text"
          class="form-control"
          placeholder="Email @"
          aria-label="Username"
          aria-describedby="addon-wrapping"
        />
      </div>
      <label for="inputPassword" class="col-sm-2 col-form-label">
        Password
      </label>
      <div class="col-sm-10">
        <input type="password" class="form-control" id="inputPassword" />
      </div>
    </div>
  );
}

export default App;
