import React from 'react';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';

function Header(){

    const [showMenu,setShowMenu] = React.useState(false)
  
    let mask;
  
    if(showMenu){
      mask = <Backdrop menuCloser={()=>setShowMenu(false)}/>
    }
  
    return(
        <div>
            <Toolbar menuShower={()=>setShowMenu(true)} />
            <SideDrawer show={showMenu} menuCloser={()=>setShowMenu(false)} />
            {mask}
        </div>
    )
}

export default Header;