import { Outlet } from "react-router-dom";
import UpperNavbar from "./../components/UpperNavbar/UpperNavbar";
import Navbar from "../components/Navbar/Navbar";
import Footer from "./../components/Footer/Footer";

function Layout() {
  return (
    <div>
      <header>
        <UpperNavbar></UpperNavbar>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet /> {/* This is where child routes will be rendered */}
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default Layout;
