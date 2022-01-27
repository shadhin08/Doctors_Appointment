import React from 'react';
import cat from '../../Data/Categorie';
import Categories from '../Categories/Categories';
import './Home.css'

const Home = () => {
    const categories=cat;
    // console.log(categories);
    
    return (
        <div>
            
            <div className='categorie'>
                <h2 className='text-center'>Doctor's Categorie</h2>
                {
                    categories.map(ct=> <Categories ctName={ct} key={ct}></Categories>)
                }
            </div>
        </div>
    );
};

export default Home;