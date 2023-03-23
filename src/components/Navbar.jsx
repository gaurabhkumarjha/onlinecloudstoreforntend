import './navbar.css';
import { ToastContainer, toast } from 'react-toastify';
import { useAuth0 } from "@auth0/auth0-react";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
function gotomydetails() {

    let x = prompt("Enter Passcode");

    if (x === "9911718908") {
        window.location.href = "/mydetails";
    }
    else {
        toast.error("Wrong Passcode !");
    }
}
function gotoreg() {

    let x = prompt("Enter Passcode");

    if (x === "9911718908") {
        window.location.href = "/Registration";
    }
    else {
        toast.error("Wrong Passcode !");
    }
}


const Navbar = () => {
    const { loginWithRedirect, } = useAuth0();
    const { isAuthenticated } = useAuth0();
    const { logout } = useAuth0();
    //const { user } = useAuth0();
    function getpromptactive() {

        window.location.href = "/formsignup";
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 col-12 mx-auto">

                        <nav class="navbar navbar-expand-lg bg-light">
                            <div class="container-fluid">
                                <a class="navbar-brand" href="/">ClOuD.STOrE.app</a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 fright">
                                        <li class="nav-item loginout">
                                            {!isAuthenticated ? <button type="button" class="btn btn-outline-success" onClick={() => loginWithRedirect()}>Log In</button>
                                                :
                                                <button type="button" class="btn btn-outline-warning" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
                                            }
                                            <button type="button" class="btn btn-primary passcode" onClick={getpromptactive}><VpnKeyIcon /> Generate A Passcode</button>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/">Home</a>
                                        </li>
                                        <li class="nav-item" style={{ "cursor": "pointer" }}>
                                            <div class="nav-link" onClick={gotoreg}>
                                                New Registration
                                            </div>
                                        </li>
                                        <li class="nav-item" style={{ "cursor": "pointer" }}>
                                            <div class="nav-link" onClick={gotomydetails}>
                                                My Data
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <ToastContainer
                            position="top-center"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;