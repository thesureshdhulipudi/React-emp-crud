import "./styles.css";

import { useEffect, useState } from "react";
import Table from "./Table";
export default function App() {
  const emp = {
    id: "1",
    name: "suresh",
    age: "30"
  };
  const arr = [];
  arr.push(emp);
  const [empList, setEmpList] = useState(arr);
  const [filteredEmpList, setFilteredEmpList] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [id, setId] = useState(0);
  const [sort, setSort] = useState(true);
  useEffect(() => {
    setFilteredEmpList(empList);
  }, [empList]);

  const hadelNameChange = (e) => {
    setName(e.target.value);
  };
  const hadelAgeChange = (e) => {
    setAge(e.target.value);
  };
  const hadelIdChange = (e) => {
    setId(e.target.value);
  };
  function save(e) {
    e.preventDefault();
    const emp = {
      id: id,
      name: name,
      age: age
    };
    setEmpList([...empList, emp]);
    setId(0);
    setName("");
    setAge(0);
  }
  const handelSearchName = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      setFilteredEmpList(empList);
    } else {
      setFilteredEmpList(
        empList.filter((emp) => emp.name.includes(e.target.value))
      );
    }
  };
  const sortByName = () => {
    let data;
    if (sort) {
      data = filteredEmpList.sort((emp1, emp2) =>
        emp1.name > emp2.name ? -1 : 1
      );
    } else {
      data = filteredEmpList.sort((emp1, emp2) =>
        emp1.name < emp2.name ? -1 : 1
      );
    }
    setSort(!sort);
    setFilteredEmpList(data);
  };
  const removeEmp = (e) => {
    alert(e.name);
    setEmpList(empList.filter((emp) => emp.id !== e.id));
  };
  return (
    <div>
      <form onSubmit={save}>
        <div className="App">
          <h1>Employee form</h1>
          <div class="efiled">
            <lable for="id">Id</lable>
            <input type="number" value={id} onChange={hadelIdChange} />
          </div>
          <div class="efiled">
            <label for="name">Name </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={hadelNameChange}
            />
          </div>
          <div class="efiled">
            <lable for="age">Age</lable>
            <input type="number" value={age} onChange={hadelAgeChange} />
          </div>
          <button> Add </button>
        </div>
      </form>

      <div>
        <h1> Employee List {empList.length} </h1>

        {empList.length > 0 ? (
          <div>
            <input
              type="text"
              placeholder="Search name"
              onChange={handelSearchName}
            />

            <Table
              empList={filteredEmpList}
              sortByName={sortByName}
              removeEmp={removeEmp}
            />
          </div>
        ) : (
          "No data"
        )}
      </div>
    </div>
  );
}
