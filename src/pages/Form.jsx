import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

function goback(){
    window.location.href="/";
}
const Form = () => {

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 col-12 mx-auto">

                    <div class="alert alert-success" role="alert">
                            <LightbulbIcon /> Fill This Form To Generate A Passcode.
                        </div>
                        <div class="alert alert-warning" role="alert">
                            <LightbulbIcon /> All Fields Are Required.
                        </div>
                        <div class="alert alert-danger" role="alert">
                            <LightbulbIcon /> Your Passcode Will Be Active In 24 Hours And Passcode Send It Your Registered Email ID.
                        </div>
                        <div class="card" style={{"width": "18rem"}}>

                            <div class="card-body">
                                <h5 class="card-title">Fill Up Form For Passcode</h5>

                                <form className="cont" action="https://formspree.io/f/meqdyvjn" method="POST">
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="floatingPassword" placeholder="Password" name="Legal Name" required/>
                                        <label for="floatingPassword">Name*</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name="Email add" required/>
                                        <label for="floatingInput">Email address*</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="number" class="form-control" id="floatingPassword" placeholder="Password" name="Ph Number" required/>
                                        <label for="floatingPassword">Mobile Number*</label>
                                    </div>
                                    <button type="submit" class="btn btn-success"> Submit</button>
                                    <button type="button" class="btn btn-info" onClick={goback} style={{"margin-left": "10px"}}><ArrowBackIcon/> Go Back</button>
                                </form>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};

export default Form;