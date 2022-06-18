import React from 'react';
import { Link } from 'react-router-dom';
import './DoctorList.css';
const DoctorList = (props) => {
    // console.log(props.doctorDetail);
    const {name, address, username, photo, categorie}=props.doctorDetail;
    // console.log(categorie, username);
    return (
        <div>
            <div className="card" style={{width: "18rem", margin: "5px"}}>
                <img src={photo} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{address.street}, {address.city}</p>

                    <div className='text-center'>
                    <Link to={"/"+categorie+"/"+username}>
                        <p className="btn btn-outline-info btn-sm dtbtn">See Detail</p>
                    </Link>
                    <Link to={"/"+ categorie +"/"+ username+"/appointment" }>
                        <button className="btn btn-primary float-right">Book an Appointment</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorList;