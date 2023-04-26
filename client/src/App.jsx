import axios from "axios";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState("");

  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = () => {
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

  const getEmployees = () => {
    axios
      .get("http://localhost:3001/employees")
      .then((res) => setEmployeeList(res.data));
  };

  const deleteEmployee = (id) => {
    axios
      .delete(`http://localhost:3001/delete/${id}`)
      .then(() => getEmployees());
  };

  const InputField = ({ Name, SetState }) => {
    return (
      <div className="flex gap-2">
        <label>{Name}: </label>
        <input
          type="text"
          className="border border-gray-400 rounded-lg text-gray-600 p-2 px-4"
          onChange={(e) => SetState(e.target.value)}
        />
      </div>
    );
  };

  const Button = ({ Text, ClickEffect }) => {
    return (
      <button
        className="bg-amber-300 text-amber-900 hover:bg-amber-400 w-fit p-2 px-6 rounded-lg duration-100"
        onClick={() => ClickEffect()}
      >
        {Text}
      </button>
    );
  };

  return (
    <div className="grid place-items-center w-screen min-h-[100vh] p-8 bg-gray-600 text-gray-300">
      <div className="grid gap-2 place-items-center">
        <InputField Name="Name" SetState={setName} />
        <InputField Name="Age" SetState={setAge} />
        <InputField Name="Country" SetState={setCountry} />
        <InputField Name="Position" SetState={setPosition} />
        <InputField Name="Wage (year)" SetState={setWage} />

        <Button Text="Add Employee" ClickEffect={addEmployee} />
      </div>

      <div className="h-[1px] w-full bg-gray-400" />

      <div className="grid gap-4">
        <Button Text="Show Employees" ClickEffect={getEmployees} />

        <div className="flex flex-wrap gap-2">
          {employeeList.map((employee) => {
            return (
              <div className="grid p-2 bg-gray-500 rounded-lg">
                <button
                  className="bg-red-300 text-red-900 hover:bg-red-400 w-fit p-1 px-2 rounded-lg duration-100"
                  onClick={() => deleteEmployee(employee.id)}
                >
                  Delete
                </button>
                <div>ID: {employee.id}</div>
                <div>Name: {employee.name}</div>
                <div>Age: {employee.age}</div>
                <div>Country: {employee.country}</div>
                <div>Position: {employee.position}</div>
                <div>Wage: {employee.wage}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
