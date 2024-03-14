import F1Drivers from '../data/F1Drivers'; 

function TableDrivers() {
  return (
    <div className="main-content">
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Team</th>
            <th>Country</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {F1Drivers.map((driver, index) => (
            <tr key={index}>
             <td>{ index+1}</td>
              <td>{driver.firstName}</td>
              <td>{driver.lastName}</td>
              <td>{driver.team}</td>
              <td>{driver.country}</td>
              <td>{driver.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableDrivers;
