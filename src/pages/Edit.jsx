import Navbar from '../components/Navbar';
import './edit.css';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';

const Edit = () => {

    const [inputdata, setvalue] = useState({

        legalname: "",
        mobilenumber: "",
        userid: "",
        password: "",
        opt: "",
        remarks: ""


    });

    const setinputvalue = (e) => {

        const { name, value } = e.target;
        setvalue({ ...inputdata, [name]: value })
    }
    const { id } = useParams();

    const submitdetails = async (e) => {

        e.preventDefault();
        const { legalname, mobilenumber, userid, password, opt, remarks } = inputdata;

        const res = await fetch("https://onlinecloudstorebackend.onrender.com/user/edit/" + id, {

            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                legalname, mobilenumber, userid, password, opt, remarks
            })
        });


        const result = await res.json();
        // console.log(result);
        toast.success("Successfully Data Edited ! " + result.legalname);
    }


    useEffect(() => {


        const userGetDetails = async () => {
            const res = await fetch("https://onlinecloudstorebackend.onrender.com/details/" + id, {

                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });


            const result = await res.json();
            setvalue(result);
            //console.log(result);
        }
        userGetDetails();
    }, [id])
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 col-12 mx-auto">
                        <div class="card cont" style={{ "width": "20rem" }}>
                            <div class="card-body">
                                <form className='commonregclass'>

                                    <div class="form-floating mb-3 name" >
                                        <input type="text" class="form-control" id="floatingInput" placeholder="Name" autoComplete='off' name='legalname' value={inputdata.legalname} onChange={setinputvalue} />
                                        <label for="floatingInput">Enter Legal Name</label>
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
                                        <input type="text" class="form-control" id="floatingPassword" placeholder="User Password" autoComplete='off' name='password' value={inputdata.password} onChange={setinputvalue} />
                                        <label for="floatingPassword">Enter Password</label>
                                    </div>
                                    <div class="form-floating mb-3 pass">
                                        <select class="form-select" id="floatingSelect" aria-label="Floating label select example" name='opt' value={inputdata.opt} onChange={setinputvalue}>
                                            <option selected>Open this select menu</option>
                                            <option value="January">January</option>
                                            <option value="Feburary">Feburary</option>
                                            <option value="March">March</option>
                                            <option value="April">April</option>
                                            <option value="May">May</option>
                                            <option value="June">June</option>
                                            <option value="July">July</option>
                                            <option value="August">August</option>
                                            <option value="September">September</option>
                                            <option value="October">October</option>
                                            <option value="November">November</option>
                                            <option value="December">December</option>
                                        </select>
                                        <label for="floatingSelect">Works with Months</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ "height": "100px" }} name='remarks' value={inputdata.remarks} onChange={setinputvalue}></textarea>
                                        <label for="floatingTextarea2">Remarks</label>
                                    </div>
                                    <button class="button-57" type='submit' onClick={submitdetails} ><span class="text">Edit</span><span>Are You Sure Want To Edit !</span></button>
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
export default Edit;
