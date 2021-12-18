
import './App.css';
import Profile from './Profile/Profile';
import img1 from './images/me.jpg'


function App({}) {
const handleName =(profile)=>{
  alert(`Hello ${profile}`)
}

  return (
    <div className="App">
     <Profile fullName="Jihed Belhadj" bio="I will be a fullstack JS developper" profession="DBA SQLServer" fonction={handleName}>
       <img src={img1} style={{padding:"10px", width: "360px", height: "208, 69px", border:"5px solid black"}} alt="ma photo" />

     </Profile>
    </div>
  );
}

export default App;
