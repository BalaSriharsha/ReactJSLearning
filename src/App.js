import React from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Product from './components/Product/Product';
import Passion from './views/Passion';
import Projects from './views/Projects';
import Contact from './views/Contact';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom';

function App() {

  const [showMenu,setShowMenu] = React.useState(false)

  let mask;

  if(showMenu){
    mask = <Backdrop menuCloser={()=>setShowMenu(false)}/>
  }

  return (
    <div>
      <Toolbar menuShower={()=>setShowMenu(true)} />
      <div style={{marginTop:'75px'}}>
        <h1>This is Content</h1>
        <Product />
      </div>
      <SideDrawer show={showMenu} menuCloser={()=>setShowMenu(false)} />
      {mask}
    </div>
  );
}

export default App;
