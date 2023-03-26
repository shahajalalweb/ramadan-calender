
import './App.css';
import Items from "./data.json";

function App() {


  return (
    <div className="App">
      <div className="background-container">
        <div className="animated-bg">
            <div className="table-container">
                <h2 className='ramadan-calender'>Ramadan Calendar</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Day</th>
                      <th>Sehri</th>
                      <th>Iftar</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Items.map(item => (
                          <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.sehri}</td>
                            <td>{item.iftar}</td>
                            <td>{item.date}</td>
                          </tr>
                    ))}
                      </tbody>
                </table>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
