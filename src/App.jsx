import { useState } from "react";
import "./css/App.css";

function App() {
  const [weight, setweight] = useState("");
  const [height, setheight] = useState("");
  const [bmi, setbmi] = useState("");
  const [message, setmessage] = useState("");
  const [error, setError] = useState("");

  let calbmi = (e) => {
    e.preventDefault();

    if (!weight || !height) {
      setError("Please fill in all fields.");
      setbmi("");
      setmessage("");
      return;
    }

    setError("");

    let heightInMeters = height * 0.3048;
    let bmi = weight / (heightInMeters * heightInMeters);
    setbmi(bmi.toFixed(1));

    if (bmi >= 25 && bmi <= 29.9) {
      setmessage("You are Overweight Bro");
    } else if (bmi <= 18.5) {
      setmessage("You are Underweight Bro");
    } else {
      setmessage("You are Normal Bro");
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h1>BMI Calculator</h1>
        <form onSubmit={calbmi}>
          <div>
            <label>Weight (kg)</label>
            <input
              type="number"
              placeholder="Enter Weight"
              value={weight}
              onChange={(e) => setweight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (feet)</label>
            <input
              type="number"
              placeholder="Enter Height"
              value={height}
              onChange={(e) => setheight(e.target.value)}
            />
          </div>

          {error && (
            <p style={{ color: "red", fontWeight: "500", marginTop: "10px" }}>
              {error}
            </p>
          )}

          <div>
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
          <div>
            <button className="btn" type="button" onClick={reload}>
              Reload
            </button>
          </div>
          <div className="center">
            <h2>Your BMI is: {bmi}</h2>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
