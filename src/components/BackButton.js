import React from 'react';
import {Link} from "react-router-dom";

const BackButton = (props) => {
    console.log('909090909090')
    return(
        <React.Fragment>
            &nbsp;
            <Link to={`/`} className='btn btn-primary col-sm-offset-3'>Back</Link>
        </React.Fragment>
    )
}

export default BackButton;