export default function Table(props) {
  const { empList, sortByName, removeEmp } = props;
  const emps = (
    <>
      {empList.map((emp) => (
        <>
          <tr id={emp.id}>
            <td>{emp.id} </td>
            <td>{emp.name} </td>
            <td>{emp.age} </td>
            <td onClick={() => removeEmp(emp)}>X</td>
          </tr>
        </>
      ))}
    </>
  );

  return (
    <div className="tcontainer">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th onClick={() => sortByName()}>Name</th>
            <th>Age</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>{emps}</tbody>
      </table>
    </div>
  );
}
