import './getdetails.css';
import Navbar from '../components/Navbar';
import BadgeIcon from '@mui/icons-material/Badge';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';

const Getdetails = () => {

    const [showuserdata, setuserdata] = useState([]);
    const [showspinner, setshowspinner] = useState(true);

    const { id } = useParams();
     console.log(id);
    useEffect(() => {
        

        const userGetDetails = async () => {
            const res = await fetch("/details/" + id, {
    
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });
    
    
            const result = await res.json();
            setuserdata(result);
            console.log(result);
        }
        userGetDetails();
        setTimeout(() => {
            setshowspinner(false);
        }, 1200)
    }, [id])
    function gotohome() {
        window.location.href = "/";
    }
    return (

        <>
            <Navbar />
            {showspinner ? <Spinner /> :
                <div className="container-fluid sp">
                    <div className="row">
                        <div className="col-md-10 col-12 mx-auto">

                            <div class="card cont" style={{ "width": "30rem" }}>
                                <div class="card-body datashow">
                                <h5 class="card-title">Your Details</h5>
                                    <div class="card " style={{ "width": "18rem" }}>

                                        <div class="card-body datashow">
                                           
                                            <p class="card-text"><BadgeIcon /> Name: {showuserdata.legalname}</p>
                                            <p class="card-text"><ContactPhoneIcon /> Mobile Number: {showuserdata.mobilenumber}</p>
                                            <p class="card-text"><VerifiedUserIcon /> User ID: {showuserdata.userid}</p>
                                            <p class="card-text"><VisibilityIcon /> Password: {showuserdata.password}</p>
                                            <p class="card-text"><CalendarMonthIcon /> Selected Month: {showuserdata.opt}</p>
                                            <p class="card-text"><BookmarksIcon /> Remarks: {showuserdata.remarks}</p>

                                            <button class="button-89" type="button" onClick={gotohome}>Go To Home</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Getdetails;