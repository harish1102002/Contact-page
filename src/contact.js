import './contact.css';
import con from "./cont.jpg";
import cont from "./contact.jpg";
import im1 from "./im1.jpg";
import wp from "./wp.png";
import gm from "./gm.png";
import ins from "./insta.jpg";


function App() {
  return (
    <div className="App">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous" />
    <div className="hold">
    <br />
    <div className="card" style={{borderWidth: 5, borderColor: "#FF6700"}}>
    <div className="card-body ">
    <center><h5 className="card-title"><img src={cont}/></h5></center>
    <h6 className="card-subtitle mb-2 text-muted">Shout Out</h6>
    <p className="card-text"><br /><br />Feel free to reach us.<br /><br />
    <img className="gmail" src={gm} /><br /><br />
    <img className="insta" src={ins} /><br /><br /></p>
    </div>
    </div>
    <div className="card" style={{borderWidth: 5, borderColor: "blue"}}>
    <div className="card-body ">
    <center><h1 className="card-title">Queries</h1></center>
    <h6 className="card-subtitle mb-2 text-muted">Contact</h6>
    <br /><br />
    <img className="whatsapp" src={wp} />8825970673
    <br /><br />
    <img className="whatsapp" src={wp} />9487431671
    <br /><br />
    <img className="whatsapp" src={wp} />9361924485
    </div>
    </div>
    <div className="card" style={{borderWidth: 5, borderColor: "tomato", borderRadius: "100px"}}>
    <div className="card-body ">
    <h1 className="card-title">Get In Touch</h1>
    <h6 className="card-subtitle mb-2 text-muted">Enter Your Credentials</h6>
    <br /><img className="gmail" src={gm} /> : <input /><br />
    <br /><img className="whatsapp" src={wp} /> : <input className="ph"/>
    <br /><br />FeedBack / Query : 
    <br />
    <textArea className="ta"/>
    <br /><center><button className="btn btn-success">submit</button></center>

    </div>
    </div>
    </div>
    </div>
  );
}

export default App;