import { Link } from "react-router-dom";

const Navbar = () => {
    return (<div className="navbar">
        <h1> Welcome to Car Rental</h1>
        <div>
            <Link to="/"> Home</Link>
            <Link to="/aboutus">About us</Link>
            {/* <Link to="/payment">Payment</Link> */}
            <Link to="/Registration">Registration</Link>
            <Link to="/Cars"> Explore Cars</Link>
            <Link to="/orders"> Checkout</Link>
        </div>
    </div>);
}

export default Navbar