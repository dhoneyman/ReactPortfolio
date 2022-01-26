import React from 'react';


export default function Portfolio() {
    return (


        <div className="uk-child-width-expand@s uk-text-center uk-grid">
            <div className='uk-padding uk-width-1-2'>
                <div className="uk-inline-clip uk-transition-toggle uk-light" tabindex="0">
                    <a href='https://climb-base.herokuapp.com/'><img className='thumbnail' src={process.env.PUBLIC_URL + "/CBSStest2.png"} alt="" /></a>
                    <a href='https://climb-base.herokuapp.com/'><div className="uk-position-bottom ">
                        <a href='https://github.com/dhoneyman/Climb-Base'><span className="uk-transition-fade light-gh-icon uk-padding" uk-icon="icon: github; ratio: 2"></span></a>
                    </div></a>
                </div>
                    <h3>Climb Base</h3>
                    <p>A RESTful API where users can submit their favorite rock climbs, leave reviews and ratings, and engage with their community.</p>
            </div>
            <div className='uk-padding uk-width-1-2'>
                <div className="uk-inline-clip uk-transition-toggle uk-light" tabindex="0">
                    <a href='https://dhoneyman.github.io/MyDashboard/'><img className='thumbnail' src={process.env.PUBLIC_URL + "/MYSS.png"} alt="" /></a>
                    <div className="uk-position-bottom uk-padding">
                        <span className="uk-transition-fade" uk-icon="icon: github; ratio: 2"></span>
                    </div>
                </div>
                    <h3>MyDashboard</h3>
                    <p>A browserbased dashboard where users can customize the look and feel and find their favorite stocks and news articles.</p>
            </div>
            <div className='uk-padding uk-width-1-2'>
                <div className="uk-inline-clip uk-transition-toggle uk-light" tabindex="0">
                    <a href='https://dhoneyman.github.io/WeatherApp/'><img className='thumbnail' src={process.env.PUBLIC_URL + "/wdSS.png"} alt="" /></a>
                    <div className="uk-position-bottom uk-padding">
                        <span className="uk-transition-fade light-gh-icon" uk-icon="icon: github; ratio: 2"></span>
                    </div>
                </div>
                    <h3>Weather App</h3>
                    <p>A weather app that displays current weather and a five day forecast. Searched cities saved for easy access.</p>
            </div>
            <div className='uk-padding uk-width-1-2'>
                <div className="uk-inline-clip uk-transition-toggle uk-light" tabindex="0">
                    <a href='https://github.com/dhoneyman/EmployeeDatabaseManager/'><img className='thumbnail' src={process.env.PUBLIC_URL + "/edbSS.png"} alt="" /></a>
                    <div className="uk-position-bottom uk-padding">
                        <span className="uk-transition-fade" uk-icon="icon: github; ratio: 2"></span>
                    </div>
                </div>
                    <h3>Employee Manager</h3>
                    <p>A command line database manager for employees. Add departments, roles or employees. Manage pay and update employee info.</p>
            </div>
            
        </div>

    );
}
