import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  const tabs = ['Portfolio', 'About', 'Blog', 'Contact'];

  return (

<nav id='nav' className="uk-navbar-container uk-navbar">
      <div className="uk-navbar-right">
        <ul className="uk-navbar-nav">
          {/* <a className="navbar-brand" href="#">
    <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""/>
  </a> */}
  {tabs.map(tab => (
    <li className="uk-active">
            <a
              href={"#"+ tab.toLowerCase()}
              onClick={() => handlePageChange(tab)}
              // This is a conditional (ternary) operator that checks to see if the current page is "Portfolio"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={currentPage === tab ? 'nav-link active' : 'nav-link'}
              >
              {tab}
            </a>
          </li>
      ))}
    
          
        </ul>
      </div>
    </nav>







  //   <nav className="uk-navbar-container uk-navbar">
  //     <div className="uk-navbar-left">
  //       <ul className="uk-navbar-nav">
  //         {/* <a className="navbar-brand" href="#">
  //   <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""/>
  // </a> */}
  //         <li className="uk-active">
  //           <a
  //             href="#portfolio"
  //             onClick={() => handlePageChange('Portfolio')}
  //             // This is a conditional (ternary) operator that checks to see if the current page is "Portfolio"
  //             // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
  //             className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
  //           >
  //             Portfolio
  //           </a>
  //         </li>
  //         <li className="uk-active">
  //           <a
  //             href="#about"
  //             onClick={() => handlePageChange('About')}
  //             // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
  //             className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
  //           >
  //             About
  //           </a>
  //         </li>
  //         <li className="uk-active">
  //           <a
  //             href="#blog"
  //             onClick={() => handlePageChange('Blog')}
  //             // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
  //             className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
  //           >
  //             Blog
  //           </a>
  //         </li>
  //         <li className="uk-active">
  //           <a
  //             href="#contact"
  //             onClick={() => handlePageChange('Contact')}
  //             // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
  //             className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
  //           >
  //             Contact
  //           </a>
  //         </li>
  //       </ul>
  //     </div>
  //   </nav>



  );
}

export default NavTabs;
