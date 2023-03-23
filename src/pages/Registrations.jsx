import { useState } from 'react';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import Navbar from '../components/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import { registerfunc } from '../services/ApiCall';
import './regis.css';
const Registrations = () => {
    const [inputdata, setvalue] = useState({

        legalname: "",
        mobilenumber: "",
        userid: "",
        password: "",
        remarks: ""

    });
    //console.log(inputdata);
    const setinputvalue = (e) => {

        const { name, value } = e.target;
        setvalue({ ...inputdata, [name]: value })
    }

    const submitdetails = async (e) => {

        e.preventDefault();
        const { legalname, mobilenumber, userid, password, remarks } = inputdata;
        if (legalname === "" && mobilenumber === "" && userid === "" && password === "" && remarks === "") {
            toast.error("Please Fill Any Of Them !")
        }
        else {

            const res = await fetch("/registration", {

                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    legalname, mobilenumber, userid, password, remarks
                })
            });


            const result = await res.json();
            if (result.index === 0) {
                toast.warning("Form Submited but all fields are same !");
            }
            else if (!result._id) {
                toast.error("Form Not Submited (LEGAL NAME ARE REQUIRED || MOBILE NO. LENGTH 10) !");
            }
            else {

                toast.success("Form Submited !");

                setvalue({
                    ...inputdata,

                    legalname: "",
                    mobilenumber: "",
                    userid: "",
                    password: "",
                    remarks: ""
                })
            }
        }
    }
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 col-12 mx-auto">
                        <div class="alert alert-warning" role="alert">
                            <LightbulbIcon /> ONLY LEGAL NAME ARE REQUIRED.
                        </div>
                        <div class="card cont" style={{ "width": "20rem" }}>
                            <div class="card-body">
                                <form className='commonregclass' method='POST'>


                                    <div class="form-floating mb-3 name" >
                                        <input type="text" class="form-control" id="floatingInput" placeholder="Name" autoComplete='off' name='legalname' value={inputdata.legalname} onChange={setinputvalue} />
                                        <label for="floatingInput">Enter Legal Name*</label>
                                    </div>
                                    <div class="form-floating mb-3 number" >
                                        <input type="number" class="form-control" id="floatingInput" placeholder="Mobile No" autoComplete='off' name='mobilenumber' value={inputdata.mobilenumber} onChange={setinputvalue} />
                                        <label for="floatingInput">Mobile Number</label>
                                    </div>
                                    <div class="form-floating mb-3 userid">
                                        <input type="text" class="form-control" id="floatingPassword" placeholder="UserID" autoComplete='off' name='userid' value={inputdata.userid} onChange={setinputvalue} />
                                        <label for="floatingPassword">Enter UserID</label>
                                    </div>
                                    <div class="form-floating mb-3 pass">
                                        <input type="password" class="form-control" id="floatingPassword" placeholder="User Password" autoComplete='off' name='password' value={inputdata.password} onChange={setinputvalue} />
                                        <label for="floatingPassword">Enter Password</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ "height": "100px" }} name='remarks' value={inputdata.remarks} onChange={setinputvalue}></textarea>
                                        <label for="floatingTextarea2">Remarks</label>
                                    </div>
                                    <button class="button-57" type='submit' onClick={submitdetails} ><span class="text">Submit</span><span>Are You Sure Want To Submit !</span></button>
                                </form>
                            </div>
                        </div>
                        <ToastContainer
                            position="top-center"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registrations;