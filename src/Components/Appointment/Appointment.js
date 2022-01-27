import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import doctors from '../../Data/DoctorDetail';
import './Appointment.css';

const Appointment = () => {
    const pathname=useLocation().pathname;
    let sliceIndex=0, sliceIndex2=0;
    for(let i=1;i<pathname.length;i++)
    {
        if(pathname[i]==='/')
        {
            if(sliceIndex==0)
            {
                sliceIndex=i;
            }
            else if(sliceIndex2==0)
            {
                sliceIndex2=i;
                break;
            }
        }
    }
    const username=pathname.slice(sliceIndex+1, sliceIndex2);
    const categorie=pathname.slice(1, sliceIndex);
    // console.log(username);
    // console.log(categorie);

    const catDoctors=doctors.filter(dt=>dt.categorie===categorie);
    const doctorInformation=catDoctors.find(dt=>dt.username===username);
    // console.log(doctorInformation);

    return (
        <div className='root'>
            <div className="container d-flex justify-content-center text-center">
                <div className="card px-5 py-5">
                    <h1>Appointment Form</h1> 
                    <p><Link to={"/"+categorie+"/"+ username}> <span>{doctorInformation.name}</span> </Link>, <Link to={"/categorie/"+ categorie }> <span>{doctorInformation.categorie
                    }</span></Link></p>
                    <br></br> 
                    
                    <input type="text" className="form-control" placeholder="name" />
                    <br></br>
                    <input type="text" className="form-control" placeholder="phone" /> 
                    <br></br>
                    <input type="text" className="form-control" placeholder="email" /> 
                    <br></br>
                    <input id="date" type="date" className="form-control" placeholder="When can we call you?" /> 
                    <button className="btn btn-success mt-5">Submit<i className="fa fa-long-arrow-right ml-2 mt-1"></i></button>
                </div>
            </div>
        </div>
    );
};

export default Appointment;