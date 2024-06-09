import logo from './logo.svg';
// import './App.css';
import CompanyName from './companyName';
import Employers from './Employers';
import ComTw from './ComTw';
import Emp from './Emp';
function App() {
  return (
    <div style={{width:"100%",display:"flex", justifyContent:"center", alignItems:"center"}}>
    <div>
      <CompanyName/>
      <Employers/>
      <ComTw/>
      <Emp/>
      {/* <Employers/> */}
      <Employers/>
      <Employers/>
    </div>
    </div>
  );
}

export default App;
