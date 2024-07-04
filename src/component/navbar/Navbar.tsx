import "./navbar.scss";
import Navbar_1 from "./navbar_1/Navbar_1";
import Navbar_2 from "./navbar_2/Navbar_2";
import Navbar_3 from "./navbar_3/Navbar_3";

const Navbar = () => {
    return (
        <>

            <div className="navbar py-4">
                <div className="container">
                    <Navbar_1 />
                    <Navbar_2 />
                    <Navbar_3 />
                </div>
            </div>
            
        </>
    );
};

export default Navbar;
