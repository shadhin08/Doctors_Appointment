import React from 'react';
import { Link } from 'react-router-dom';
import "./allDoctorList.css"

const AllDoctorList = (props) => {
    // console.log(props);
    const {name, categorie, photo, username}=props.doctor;
    // console.log(categorie, username);
    return (
        <div>
            <Link to={"/"+categorie+"/"+username} style={{ textDecoration: 'none' }}>
                <ol>
                    <li className="list-group-item  d-flex justify-content-between align-items-start ">
                    <div className='image'>
                        <img src={photo}/>
                    </div>
                    <div className='info'>
                        <div className=" fw-bold">{name}</div>
                        <div>
                            <small>{categorie}</small>
                        </div>
                    </div>
                    </li>
                </ol>
            </Link>
        </div>
    );
};

export default AllDoctorList;