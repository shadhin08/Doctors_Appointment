import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import doctors from '../../Data/DoctorDetail';
import './DoctorInfo.css';

const DoctorInfo = () => {
    const pathname=useLocation().pathname;
    let sliceIndex;
    for(let i=1;i<pathname.length;i++)
    {
        if(pathname[i]==='/')
        {
            sliceIndex=i;
            break;
        }
    }
    const username=pathname.slice(sliceIndex+1);
    const categorie=pathname.slice(1, sliceIndex);
    // console.log(username);
    // console.log(categorie);



    const catDoctors=doctors.filter(dt=>dt.categorie===categorie);
    const doctorInformation=catDoctors.find(dt=>dt.username===username);
    // console.log(doctorInformation);
    return (
        <div className='root '>
            <div className="container">
            <div className="main-body">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                    <div className="card">
                        <div className="card-body">
                        <div className="d-flex flex-column align-items-center text-center">
                            <img src={doctorInformation.photo} alt="Admin" className="rounded-circle" width="150"/>
                            <div className="mt-3">
                            <h4>{doctorInformation.name}</h4>
                            <p className="text-secondary mb-1">{doctorInformation.categorie}</p>
                            <p className="text-muted font-size-sm">{doctorInformation.address.street}, {doctorInformation.address.city}</p>
                            <button className="btn btn-primary but">Follow</button>
                            <button className="btn btn-outline-primary but">Message</button>
                            </div>
                            <Link to={"/"+ doctorInformation.categorie +"/"+ doctorInformation.username+"/appointment" }>
                                <button className="btn btn-success but butBook">Book an Appointment</button>
                            </Link>
                        </div>
                        </div>
                    </div>
                    <div className="card mt-3">
                        <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
                            <span className="text-secondary">{doctorInformation.website}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github mr-2 icon-inline"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline></svg>Email</h6>
                            <span className="text-secondary">{doctorInformation.email}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 className="mb-0">Phone</h6>
                            <span className="text-secondary">{doctorInformation.phone}</span>
                        </li>
                        
                        </ul>
                    </div>
                    </div>
                        <div className="col-md-6 mb-3">
                        <div className="card h-100">
                            <div className="card-body">
                            <div className="panel">
                    <div className="panel-heading">
                        <h3 className="panel-title">Leave a comment about {doctorInformation.name}</h3>
                    </div>
                    <div className="panel-content panel-activity text-center">
                        <p>Your Name</p>
                        <input type='text' className="form-control" placeholder='Name'></input>
                        <p>Your Phone</p>
                        <input type='number' className="form-control" placeholder='Phone'></input>
                        <p>Comment</p>
                        <form action="#" className="panel-activity__status">
                            <textarea name="user_activity" placeholder="Share what you've been up to..." className="form-control"></textarea>
                            <div className="actions">
                                <button type="submit" className="btn btn-sm btn-rounded btn-info">
                                    Post
                                </button>
                            </div>
                        </form>
                        </div>
                        </div>
                            </div>
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </div>
    );
};

export default DoctorInfo;