import React from 'react';

const Panel = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="panel">
                        <label className="switch">
                            <input type="checkbox" checked={props.dateOn} onChange={props.toggleDate} />
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
            </div>



        </div>
    
    )
}


export default Panel;
