import F1Drivers from '../data/F1Drivers'; 

function ListDrivers() {
  return (
    <div className='main-content'>
      
      <ul>
        { F1Drivers.map((driver, index) => (
          <li key={index}>
            <b>{index + 1} {driver.firstName} {driver.lastName}</b> - {driver.team}, {driver.country}, {driver.age} years old
          </li>
        )) }
      </ul>
    </div>
  );
}

export default ListDrivers;