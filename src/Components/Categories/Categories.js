import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import doctors from '../../Data/DoctorDetail';

const Categories = (props) => {
    // console.log(props);
    const [doctorList, setDoctorList]=useState([]);
    useEffect(()=>
    {
        const doctorsInCategorie=doctors.filter(dt=>dt.categorie===props.ctName)
        setDoctorList(doctorsInCategorie);
    }, [])
    return (
        <div>
            <Link to={"/categorie/"+props.ctName} style={{ textDecoration: 'none' }}>
                <ol>
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 fw-bold">{props.ctName}</div>
                    <span className="badge bg-primary rounded-pill">{doctorList.length}</span>
                    </li>
                </ol>
            </Link>
        </div>
    );
};

export default Categories;