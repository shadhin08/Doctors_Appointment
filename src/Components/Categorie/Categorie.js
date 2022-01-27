import React, { useEffect, useState } from 'react';
import "./Categorie.css";
import { useLocation } from "react-router-dom";
import DoctorList from '../DoctorList/DoctorList';
import doctors from '../../Data/DoctorDetail';

const Categorie = () => {
    const location = useLocation();
    const categorie=location.pathname.slice(11);
    
    const [doctorList, setDoctorList]=useState([]);
    useEffect(()=>
    {
        const doctorsInCategorie=doctors.filter(dt=>dt.categorie===categorie);
        // console.log(doctorsInCategorie);
        setDoctorList(doctorsInCategorie);
    }, [])
    return (
        <div className='root'>
            <div className="p-3 mb-2 bg-secondary text-white">
                <h3 className="text-center ">{categorie}</h3>
            </div>
            <div className="d-flex flex-row flex-wrap">
            {
                doctorList.map(doctor=><DoctorList doctorDetail={doctor} key={doctor.id}></DoctorList>)
            }
            </div>
        </div>
    );
};

export default Categorie;