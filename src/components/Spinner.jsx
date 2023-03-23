

const Spinner = () => {
    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 col-12 mx-auto">

                        <div class="d-flex justify-content-center">
                        Loading...
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Spinner;