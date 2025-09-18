import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero' className='mb-5'/>
                <h1 className='mb-4'>Invest in everything</h1>
                <p className='mb-5 fs-4'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='p-3 btn btn-primary fs-5 mb-5' style={{width: "25%", margin: "auto"}}>Sign up for free</button>
            </div>
        </div>
     );
}

export default Hero;