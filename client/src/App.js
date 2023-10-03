import logo from './logo.svg';
import './App.css';
import FirstForm from './components/FirstForm';
import Pokemon from './components/Poke';
// import PostData from './components/PostData';
import SCAPostForm from './components/SCAPostForm';

function App() {
  return (
    <div className="App">
      {/* <FirstForm/>
      <Pokemon/> */}
      {/* <PostData/> */}
      <SCAPostForm myProp = "sent prop"/>
    </div>

  );
}

export default App;
