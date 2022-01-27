import React from 'react';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='uk-text-center'>
                <a href='https://github.com/dhoneyman' className='uk-padding'><img className='socialthumb' src={process.env.PUBLIC_URL + "/github.png"} alt="" /></a>
                <a href='https://www.linkedin.com/in/dylan-honeyman-0b78631aa/' className='uk-padding'><img className='socialthumb' src={process.env.PUBLIC_URL + "/linkedin.png"} alt="" /></a>
            </div>
        </footer>
    );

}