import axios from "axios";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState("");

  const addEmployee = () => {
    console.log(name, age, country, position, wage);
    axios
      .post("http://localhost:3001/create", {
        name: name,
        age: age,
        country: country,
        position: position,
        wage: wage,
      })
      .then(() => console.log("success"));
  };

  return (
    <div className="grid place-items-center w-screen h-screen">
      <div className="grid gap-2 place-items-center">
        <div className="flex gap-2">
          <label>Name</label>
          <input
            type="text"
            className="border border-gray-400 rounded-lg"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex gap-2">
          <label>Age</label>
          <input
            type="number"
            className="border border-gray-400 rounded-lg"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className="flex gap-2">
          <label>Country</label>
          <input
            type="text"
            className="border border-gray-400 rounded-lg"
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>

        <div className="flex gap-2">
          <label>Position</label>
          <input
            type="text"
            className="border border-gray-400 rounded-lg"
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>

        <div className="flex gap-2">
          <label>Wage (year)</label>
          <input
            type="text"
            className="border border-gray-400 rounded-lg"
            onChange={(e) => setWage(e.target.value)}
          />
        </div>

        <button
          className="bg-blue-500 text-gray-100 hover:bg-blue-600 w-fit p-2 px-6 rounded-lg"
          onClick={addEmployee}
        >
          Add Employee
        </button>
      </div>
    </div>
  );
}

export default App;
