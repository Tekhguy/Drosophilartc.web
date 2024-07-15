import logo from "./clone 01.png"



function Navbar() {

    return (
        <div className="navbar">
            <div>
                 <img className="logo" src={logo} alt="" />
               
            </div>
            <div className="list">
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>WHAT WE DO</li>
                <li>EVENTS</li>
                <li>GALLERY</li>
                <li>CONTACTS</li>
            </div>
        </div>


    );
}





export default Navbar;

