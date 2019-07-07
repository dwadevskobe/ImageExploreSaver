import React from 'react';
import './style.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainPage from './MainPage';
import CategoryBox from './CategoryBox';
import CategoryItemList from './CategoryItemList';

function Header() {

  const linkStyle = {
  	 color: 'white',
  	 margin: '20px',
  	 fontSize: '19px',
  	 textDecoration: 'none',
  	 display:'inline-block',
  	 lineHeight:'1px'
  }

  const titleStyle = {
  	color: 'cyan',
  	marginRight: '38px',
  	fontSize: '20px',
  	display:'inline-block',
  	lineHeight:'1px'
  }

  const loginStyle = {
   	 color: 'white',
  	 fontSize: '20px',
  	 display:'inline-block',
  	 marginRight:'38px',
  	 lineHeight:'1px'
  }

  return (
    <header>
        <Router>
        	<div>
		    	<ul className='navbar'>
			    	 <li><h3 style={titleStyle}>Unsplash Image Explorer</h3></li>
					 <li><Link style={linkStyle} to="/">Explore</Link></li>                                                                      
					 <li><Link style={linkStyle} to="/Saved">Saved</Link></li>    
					 <li style={{float:'right'}}><h3 style={loginStyle}>Login</h3></li>    
				</ul>
				<Route exact path="/" strict component={MainPage}/ >
		        <Route exact strict path="/Saved" render={()=>{ 
              		return <CategoryBox url="http://localhost:3001/categories"/> } } />
        		<Route exact strict path="/Saved/:categoryName" render={(routerProps)=>{ 
               		return <CategoryItemList routerProps={routerProps} url="http://localhost:3001/categoryItems"/> } } />
		    </div>
		</Router>
    </header>
  );
}

export default Header;
