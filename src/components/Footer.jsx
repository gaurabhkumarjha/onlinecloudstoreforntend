import './Footer.css';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import { toast } from 'react-toastify';
import Offcanva from './Offcanvas.jsx';
import FeedbackIcon from '@mui/icons-material/Feedback';

const Footer = () => {

    const exporttocsv = async () => {


        const x = prompt("Enter Passcode");

        if (x === '9911718908') {



            const res = await fetch("https://onlinecloudstorebackend.onrender.com/userexport", {

                method: "GET",

                headers: {
                    "Content-Type": "application/json"
                },

            });

            console.log(res);
            if (res.status === 200) {
                const x = 'https://onlinecloudstorebackend.onrender.com/files/export/users.csv';
                window.open(x, "blank")
            } else {
                toast.error("error !");
            }
        }

        else {
            toast.error("Wrong Passcode !");
        }
    }


    return (
        <>

            <footer class="site-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p class="text-justify">This website is based on Cloud it helps to store a data any time any types and any where And access the data any time and any where.
                                They are also provide to offline mode to access the data in Excel Format. Without any cost.</p>
                        </div>
                        <div class="col-xs-6 col-md-3">
                            <h6>Our Other(s) Website</h6>
                            <ul class="footer-links">
                                <li><a href="https://sunilkumarjha.netlify.app/" target="-blank">CA Service</a></li>
                                <li><a href="https://gaurabhkumarjha.github.io/gsttaxcalculater.io/" target="-blank">G.T.C.</a></li>
                            </ul>
                        </div>
                        <div class="col-xs-6 col-md-3">
                            <h6>Subscribe</h6>
                            <ul class="footer-links">
                                <form className="cont" action="https://formspree.io/f/meqdyvjn" method="POST">
                                    <div class="form-floating mb-3">
                                        <input type="email" class="form-control footeremail" id="floatingInput" placeholder="name@example.com" name="UserEmail" required autoComplete="off" />
                                        <label for="floatingInput">name@example.com</label>
                                    </div>

                                    <button type="submit" class="btn btn-success mb-1"><ForwardToInboxIcon /> Send</button>

                                    <Offcanva></Offcanva>
                                    <button class="btn btn-light mr" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                                        <FeedbackIcon /> Feedback
                                    </button>
                                </form>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-sm-6 col-xs-12">
                            <p class="copyright-text">Copyright &copy; 2023 All Rights Reserved by
                                <a href="/"> ClOuD.STOrE.app</a>
                                <button class="btn btn-primary" onClick={exporttocsv}><CloudDownloadIcon /> Export</button>
                                <p className='mycompany'>~Devloped by Rhombus</p>
                            </p>
                        </div>
                    </div>
                </div>

            </footer>
        </>

    )
}

export default Footer;