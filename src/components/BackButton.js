import React from 'react';
import {Link} from "react-router-dom";

const BackButton = () => {
    return(
        <React.Fragment>
            &nbsp;
            <Link to={`/`} className='btn btn-primary col-sm-offset-3'>Back</Link>
        </React.Fragment>
    )
}

export default BackButton;