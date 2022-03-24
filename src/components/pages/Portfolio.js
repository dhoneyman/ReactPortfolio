import React from 'react';

const styles = {
    // images: {
    //     maxWidth: '475px'
    // }
}


export default function Portfolio() {
    return (


        <div className="uk-child-width-expand@s uk-text-center uk-grid">
            <div className='uk-padding uk-width-1-2'>
                <div className="uk-inline-clip uk-transition-toggle uk-light" tabindex="0">
                    <a href='https://paddle-auction.herokuapp.com/' target="blank"><img style={styles.images} className='thumbnail' src={process.env.PUBLIC_URL + "/pass.png"} alt="" /></a>
                    <a href='https://paddle-auction.herokuapp.com/' target="blank"><div className="uk-position-bottom ">
                        <a href='https://github.com/dhoneyman/project-3' target="blank"><span className="uk-transition-fade light-gh-icon uk-padding" uk-icon="icon: github; ratio: 2"></span></a>
                    </div></a>
                </div>
                    <h3>Paddle App</h3>
                    <p>An online auction app that allows users to list and sell their items as well as bid on other users items. Built with the MERN stack and GraphQL to provide a lightning fast responce for the user with a flexible database.</p>
            </div>
            <div className='uk-padding uk-width-1-2'>
                <div className="uk-inline-clip uk-transition-toggle uk-light" tabindex="0">
                    <a href='https://climb-base.herokuapp.com/' target="blank"><img style={styles.images} className='thumbnail' src={process.env.PUBLIC_URL + "/cbss3.png"} alt="" /></a>
                    <a href='https://climb-base.herokuapp.com/' target="blank"><div className="uk-position-bottom ">
                        <a href='https://github.com/dhoneyman/Climb-Base' target="blank"><span className="uk-transition-fade light-gh-icon uk-padding" uk-icon="icon: github; ratio: 2"></span></a>
                    </div></a>
                </div>
                    <h3>Climb Base</h3>
                    <p>A RESTful API where users can submit their favorite rock climbs, leave reviews and ratings, and engage with their community. Built utilizing Handlebars, MySQL2, Sequelize, Materialize and Express.</p>
            </div>
            <div className='uk-padding uk-width-1-2'>
                <div className="uk-inline-clip uk-transition-toggle uk-light" tabindex="0">
                    <a href='https://my-spotify-data-visualizer.herokuapp.com/' target="blank"><img style={styles.images} className='thumbnail' src={process.env.PUBLIC_URL + "/ssspot1.png"} alt="" /></a>
                    <a href='https://my-spotify-data-visualizer.herokuapp.com/' target="blank"><div className="uk-position-bottom ">
                        <a href='https://github.com/dhoneyman/SpotifyDataVisualization' target="blank"><span className="uk-transition-fade light-gh-icon uk-padding" uk-icon="icon: github; ratio: 2"></span></a>
                    </div></a>
                </div>
                    <h3>My Spotify Data Visualizer</h3>
                    <p>Utilizing Spotify's OAuth API, this web app distplays a user's listening history in a clean modifiable view. </p>
            </div>
            <div className='uk-padding uk-width-1-2'>
                <div className="uk-inline-clip uk-transition-toggle uk-light" tabindex="0">
                    <a href='https://dhoneyman.github.io/MyDashboard/' target="blank"><img style={styles.images} className='thumbnail' src={process.env.PUBLIC_URL + "/myss1.png"} alt="" /></a>
                    <a href='https://dhoneyman.github.io/MyDashboard/' target="blank"><div className="uk-position-bottom uk-padding">
                    <a href='https://github.com/dhoneyman/MyDashboard' target="blank"><span className="uk-transition-fade" uk-icon="icon: github; ratio: 2"></span></a>
                    </div></a>
                </div>
                    <h3>MyDashboard</h3>
                    <p>A browserbased dashboard where users can customize the look and feel and find their favorite stocks and news articles. Built with good old fashioned HTML, CSS and jQuery.</p>
            </div>
            <div className='uk-padding uk-width-1-2'>
                <div className="uk-inline-clip uk-transition-toggle uk-light" tabindex="0">
                    <a href='https://dhoneyman.github.io/WeatherApp/' target="blank"><img style={styles.images} className='thumbnail' src={process.env.PUBLIC_URL + "/wbss1.png"} alt="" /></a>
                    <a href='https://dhoneyman.github.io/WeatherApp/' target="blank"><div className="uk-position-bottom uk-padding">
                        <a href='https://github.com/dhoneyman/WeatherApp' target="blank"><span className="uk-transition-fade light-gh-icon" uk-icon="icon: github; ratio: 2"></span></a>
                    </div></a>
                </div>
                    <h3>Weather App</h3>
                    <p>A weather app that displays current weather and a five day forecast. Searched cities saved for easy access. Built with jQuery and Bootstrap.</p>
            </div>
            <div className='uk-padding uk-width-1-2'>
                <div className="uk-inline-clip uk-transition-toggle uk-light" tabindex="0">
                    <a href='https://arcane-caverns-20037.herokuapp.com/' target="blank"><img style={styles.images} className='thumbnail' src={process.env.PUBLIC_URL + "/jatess.png"} alt="" /></a>
                    <a href='https://arcane-caverns-20037.herokuapp.com/' target="blank"><div className="uk-position-bottom uk-padding">
                    <a href='https://github.com/dhoneyman/TextEditor' target="blank"><span className="uk-transition-fade" uk-icon="icon: github; ratio: 2"></span></a>
                    </div></a>
                </div>
                    <h3>JATE</h3>
                    <p>JATE is Just Another Text Editor, except this one is a progressive web app. With a single click this text editor can be installed onto a users computer.</p>
            </div>
            <div className='uk-padding uk-width-1-2'>
                <div className="uk-inline-clip uk-transition-toggle uk-light" tabindex="0">
                    <a href='https://github.com/dhoneyman/TeamProfileGenerator' target="blank"><img style={styles.images} className='thumbnail' src={process.env.PUBLIC_URL + "/cgss.png"} alt="" /></a>
                    <a href='https://github.com/dhoneyman/TeamProfileGenerator' target="blank"><div className="uk-position-bottom uk-padding">
                    <a href='https://github.com/dhoneyman/TeamProfileGenerator' target="blank"><span className="uk-transition-fade" uk-icon="icon: github; ratio: 2"></span></a>
                    </div></a>
                </div>
                    <h3>Employee Card Generator</h3>
                    <p>A command line command line program that dynamically generates a webpage with your employees information. Utilizing NodeJS and Inquirer, this application makes it easy to create an html webpage with employee info.</p>
            </div>
            <div className='uk-padding uk-width-1-2'>
                <div className="uk-inline-clip uk-transition-toggle uk-light" tabindex="0">
                    <a href='https://github.com/dhoneyman/EmployeeDatabaseManager/' target="blank"><img style={styles.images} className='thumbnail' src={process.env.PUBLIC_URL + "/edbss1.png"} alt="" /></a>
                    <a href='https://github.com/dhoneyman/EmployeeDatabaseManager/' target="blank"><div className="uk-position-bottom uk-padding">
                    <a href='https://github.com/dhoneyman/EmployeeDatabaseManager/' target="blank"><span className="uk-transition-fade" uk-icon="icon: github; ratio: 2"></span></a>
                    </div></a>
                </div>
                    <h3>Employee Manager</h3>
                    <p>A command line database manager for employees. Add departments, roles or employees. Manage pay and update employee info utilizing Inquirer.</p>
            </div>
            
        </div>

    );
}
