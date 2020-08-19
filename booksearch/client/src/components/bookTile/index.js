import React from 'react';
import './style.css';

function BookTile(props) {
    return (
        <div className="card my-2 p-1">
            <div className="card-body">
                <div className="row no-gutters">
                    <div className="col-md-6">

                        <h3 className="card-title">{props.title}</h3>
                        <h4 className="card-subtitle">{props.author}</h4>
                    </div>

                    <div className="col-md-6 text-right">

                        <a href={props.link} className="btn btn-info" role="button">View</a>
                        {props.status === "search" &&
                            <button className="btn btn-warning text-white mx-2" name="index" value={props.index} onClick={props.handleBookSave}>Save</button>
                        }
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <img className="card-img mx-1" src={props.image} alt={props.title} />
                </div>
                <div className="col-md-9">
                    <p className="card-text mx-1">{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default BookTile