import Navbar from '../components/Navbar';
import LeftSec from '../components/LeftSec'
import Menu from '../components/Menu';
import "../components/styles/body.css"
import "../components/styles/main.css"
import { Outlet} from 'react-router-dom';



function Main() {


  return (
<>
<Navbar />
<Menu/>
<div className='body'>
        <LeftSec />
        <Outlet/>
    </div>
</>
  );
}

export default Main;