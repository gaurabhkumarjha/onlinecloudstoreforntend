import React from "react";

const pagination = ({ gotoprevpage, gotonextpage, page, pagecount, setpage }) => {



    return (
        <>

            {
                pagecount > 0 ?

                    <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-end">
                            <li class="page-item" style={{"cursor": "pointer"}}>
                                <li class="page-link" onClick={() => gotoprevpage()}>Prev</li>
                            </li>

                            {
                                Array(pagecount).fill(null).map((element, index) => {
                                    return (
                                        <>
                                            <li class="page-item" style={{"cursor": "pointer"}}> <li class="page-link" onClick={() => setpage(index+1)}>{index + 1}</li>
                                            </li>
                                        </>
                                    )
                                })
                            }
                            <li class="page-item" style={{"cursor": "pointer"}}>
                                <li class="page-link" onClick={() => gotonextpage()}>Next</li>
                            </li>
                        </ul>
                    </nav>
                    : ".."
            }
        </>
    )
}

export default pagination;