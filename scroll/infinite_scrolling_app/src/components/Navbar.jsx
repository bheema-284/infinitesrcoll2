import { Link } from "react-router-dom";


export const Navbar =()=>{
    return (
      <div id="navbar">
        <Link id="link" to="/">
          InfininiteScrolling
        </Link>
        <Link id="link" to="limit-perpage">
          Perpage-limit
        </Link>
      </div>
    );
}