import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Message = () => {

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 col-12 mx-auto">
                        <div class="card" style={{ "width": "auto", "align-items": "center"}}>
                            <div class="card-body">

                                <h1><LockOutlinedIcon/> All services are locked !</h1>

                                <h3>If You Are New So, Login & Generate a Passcode First !</h3>

                                <h5>
                                    <h4>How To Generate A Passcode !</h4>

                                    <ul>
                                        <li>First You Click  Generate A Passcode Button</li>
                                        <li>Second Fill The Form For Generate A Passcode</li>
                                        <li>Third Within 24HR, Your Request Approved</li>
                                    </ul> Thank You For Given A Your Valueable Time !
                                </h5>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
};

export default Message;