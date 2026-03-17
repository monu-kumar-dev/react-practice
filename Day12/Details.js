import { Link, Outlet } from "react-router";

export default function Details() {
  return (
    
    <>

    <nav>
        <Link to="/Details">Details</Link>
        <Link to="Hello">Hello</Link>
        <Link to="Hii">Hii</Link>
    </nav>
      <h1>Welcome to Details Page</h1>
      <Outlet></Outlet>
    </>
  );
}
