import { Outlet, Link } from "react-router-dom";
import './../style.css';


const Layout = () => {
  return (
    <>
       <nav>
        <ul>
            <li>
            <Link to="/">Loudoun County Cricket Ground</Link>
            </li>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/want">Want</Link>
            </li>
            <li>
                <Link to="/proposal">Proposal</Link>
            </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;