import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">

      <div className="header">
    <div className="row" >
        <div className="col-md-4 d-flex align-items-center justify-content-start" style={{borderRight:"1px solid black"}}>LOREM IPSUM</div>
        <div className="col-md-8 col-md-4 d-flex align-items-center justify-content-end" style={{textAlign:"right"}}>LINK 1</div>
        </div>
    </div>

    <div className="middle">
    <div className="row">
        <div className="col-md-6 d-flex align-items-center justify-content-center" style={{borderRight:"1px solid black"}}>THIS IS SOME CONETENT ALIGNED IN THE CENTER VERTICALY AND HORIZONTALLY</div>
        <div className="col-md-6"></div>
    </div>
    </div>

    <div className="footer">
    <div className="row">
        <div className="col-md-12 d-flex align-items-center justify-content-start" >THIS IS THE FOOTER CONTENT WHICH IS ALIGNED LEFT</div>
        
    </div>
    </div>
</div>
    </div>
  );
}

export default App;
