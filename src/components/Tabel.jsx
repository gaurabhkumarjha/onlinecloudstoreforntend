import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Navbar from './Navbar';
import Spinner from './Spinner';
import './tabel.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Pagination from './Pagination';


const Tabel = () => {

    const [showuserdata, setuserdata] = useState([]);
    const [showspinner, setshowspinner] = useState(true);
    const [shearchuserdata, setsearchuserdata] = useState("");
    const [page, setpage] = useState(1);
    const [pagecount, setpagecount] = useState(0);

    const userGetDetails = async () => {
        const res = await fetch(`/getmydetails?shearchuserdata=${shearchuserdata}&page=${page}`, {

            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });


        const result = await res.json();
        setuserdata(result);
        setuserdata(result.userdata);
        setpagecount(result.pagination.pagecnt);
    }

    const deleteuser = async (id) => {


        const res = await fetch("/user/delete/" + id, {

            method: "DELETE",
        });

        const result = await res.json();
        if (result._id === id) {
            userGetDetails();
            toast.success("User Deleted ! " + result.legalname);
        }

        else {
            toast.error("Something Went Wrong !");
        }
    }

    // handel prevstate
    const gotoprevpage = () => {

        setpage(() => {

            if (page === 1) return page;

            return page - 1;
        })
    }

    // handel nextpage
    const gotonextpage = () => {

        setpage(() => {

            if (page === pagecount) return page;

            return page + 1;
        })
    }

    useEffect(() => {
        const userGetDetails = async () => {
            const res = await fetch(`/getmydetails?shearchuserdata=${shearchuserdata}&page=${page}`, {

                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });


            const result = await res.json();
            setuserdata(result.userdata);
            setpagecount(result.pagination.pagecnt);
        }
        userGetDetails();
        setTimeout(() => {
            setshowspinner(false);
        }, 1200)
    }, [shearchuserdata, page])

    return (
        <>
            <Navbar />
            {showspinner ? <Spinner /> :

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10 col-12 mx-auto">
                            <form class="d-flex" role="search">
                                <input class="form-control me-2 search" type="search" placeholder="Search(With Name)..." aria-label="Search" onChange={(e) => setsearchuserdata(e.target.value)} />

                            </form>
                            <div class="card cont" style={{ "width": "70rem" }}>
                                <div class="card-body">
                                    <table class="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">S.NO</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Mob. Number</th>
                                                <th scope="col">User ID</th>
                                                <th scope="col">password</th>
                                                <th scope="col">Month</th>
                                                <th scope="col">Remarks</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                showuserdata.length > 0 ? showuserdata.map((element, index) => {
                                                    return (
                                                        <>
                                                            <tr>
                                                                <th scope="row">{index + 1 + (page-1)*2}</th>
                                                                <td>{element.legalname}</td>
                                                                <td>{element.mobilenumber}</td>
                                                                <td>{element.userid}</td>
                                                                <td>{element.password}</td>
                                                                <td>{element.opt}</td>
                                                                <td>{element.remarks}</td>
                                                                <td>
                                                                    <li class="nav-item actioncss">
                                                                        <a class="nav-link success" href={`/getdetails/${element._id}`}> <VisibilityIcon /> View</a>
                                                                    </li>
                                                                    <li class="nav-item actioncss">
                                                                        <a class="nav-link warning" href={`/Edit/${element._id}`}> <EditIcon /> Edit</a>
                                                                    </li>
                                                                    <li class="nav-item danger actioncss" onClick={() => deleteuser(element._id)}>
                                                                        <DeleteIcon />   Delete
                                                                    </li>
                                                                </td>
                                                            </tr>
                                                        </>
                                                    )
                                                }) : <h2>No Data Found !</h2>
                                            }
                                        </tbody>
                                    </table>
                                    <Pagination

                                        gotoprevpage={gotoprevpage}
                                        gotonextpage={gotonextpage}
                                        page={page}
                                        pagecount={pagecount}
                                        setpage={setpage}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            }
        </>
    )
}

export default Tabel;