import React from 'react';

const Display = (props) => {
        return(
            <div className="container-fluid">
                <div className="d-flex flex-row">
                    <div className="col-md-4 mx-auto">
                        <div className="display">
        <div className="display-time">{props.time.toLocaleTimeString()}</div>
        {props.isDateVisible && <div className="display-date">{props.time.toLocaleDateString()}</div> }
    
        
                        </div>
                    </div>
                </div>
            </div>
        )
}


export default Display;
