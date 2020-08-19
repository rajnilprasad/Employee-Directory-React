import React from 'react';

function CardContainer(props) {
    return (
        <div className="card m-2 bg-light">
            <div className="card-header">
                {props.title}
            </div>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    )
}

export default CardContainer;