import React from "react";
import LightbulbIcon from '@mui/icons-material/Lightbulb';


const Offcanva = () => {

  return (
    <>
      <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="staticBackdropLabel">Feedback</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <div>
          <div class="alert alert-warning mb-3" role="alert" style={{"width": "auto"}}>
                            <LightbulbIcon /> All Fields Are Required.
                        </div>
            <form className="cont" action="https://formspree.io/f/meqdyvjn" method="POST">

              <div class="form-floating mb-3">
                <input type="text" class="form-control footeremail" id="floatingInput" placeholder="name@example.com" name="Name" required autoComplete="off" />
                <label for="floatingInput">Enter Name*</label>
              </div>
              <div class="form-floating mb-3">
                <input type="text" class="form-control footeremail" id="floatingInput" placeholder="name@example.com" name="Passcode Number" required autoComplete="off" />
                <label for="floatingInput">Enter Your Passcode Number*</label>
              </div>

              <div class="form-floating mb-3">
                <input type="email" class="form-control footeremail" id="floatingInput" placeholder="name@example.com" name="UserEmail" required autoComplete="off" />
                <label for="floatingInput">Enter Your Email ID*</label>
              </div>
              <div class="form-floating mb-3">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{"height": "100px"}} name="problem" required></textarea>
                <label for="floatingTextarea2">Your Problem(s)*...</label>
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>

    </>
  )
};

export default Offcanva;