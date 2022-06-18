import React, { useState } from 'react';
import cat from '../../Data/Categorie';
import doctors from '../../Data/DoctorDetail';
import AllDoctorList from '../AllDoctorList/AllDoctorList';
import Categories from '../Categories/Categories';
import './Home.css'

const Home = () => {
    const categories=cat;
    const [allDoctors, setAllDoctors]=useState([]);
    if(allDoctors.length===0)
    {
        setAllDoctors(doctors);
    }

    // console.log(allDoctors);
    
    return (
        <div className='main'> 
            <div className='categorie'>
                <h2 className='text-center'>Doctor's Categorie</h2>
                {
                    categories.map(ct=> <Categories ctName={ct} key={ct}></Categories>)
                }
            </div>
            <div className='allDoctors'>
            <h2 className='text-center'>Doctors</h2>
            <div className='doctors'>
            {
                allDoctors.map(dt=> <AllDoctorList doctor={dt} key= {dt.id}></AllDoctorList>)
            }
            </div>
            </div>
        </div>
    );
};

export default Home;