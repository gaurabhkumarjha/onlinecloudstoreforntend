import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './home.css';
import AddIcon from '@mui/icons-material/Add';
import { useAuth0 } from "@auth0/auth0-react";
import Message from '../components/Message';
import { toast } from 'react-toastify';

function goregpage() {
    const x= prompt("Enter Passcode");

    if (x === '9911718908')
    window.location.href = "/Registration";

    else{
        toast.error("Wrong Passcode !");
    }
}

const Home = () => {
    const { isAuthenticated} = useAuth0();
    
    return (
        <>
            <Navbar />
            {!isAuthenticated ?  <Message/>:
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10 col-12 mx-auto">
                            <div>
                                <div class="card" style={{ "width": "auto" }}>
                                    <div class="card-body">
                                       

                                        <div class="card" style={{ "width": "auto" }}>
                                            <div class="card-body">
                                                

                                                <div class="card" style={{ "width": "auto" }}>
                                                    <div class="card-body">
                                                       
                                                        <div class="card" style={{ "width": "auto" }}>
                                                            <div class="card-body">
                                                                <button class="button-85" type="button" onClick={goregpage} id="add"> <AddIcon /> Add New User</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <Footer />
        </>
    )
}

export default Home;