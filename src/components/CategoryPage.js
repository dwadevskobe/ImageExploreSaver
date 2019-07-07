import React from 'react';
import CategoryBox from './CategoryBox';
import CategoryItemList from './CategoryItemList';
import {BrowserRouter,Switch,Route} from "react-router-dom";


class CategoryPage extends React.Component{

 constructor(){
    super();
  }

  // componentDidUpdate() {

  // 	window.onload = (e) => {
  //     console.log("Category Page Loading")
  // 	}

 	//   window.onpopstate = (e) => {
  //     console.log("Category Page Popping")
  // 	}
  // }

  render(){

   console.log("Rendering category page")

   return( <BrowserRouter>
      <Switch>
        <Route exact strict path="/Saved" render={()=>{ 
              return <CategoryBox url="http://localhost:3001/api/categories"/> } }  />
        <Route exact strict path="/Saved/:categoryName" render={(routerProps)=>{ 
               return <CategoryItemList routerProps={routerProps} url="http://localhost:3001/api/categoryItems"/> } }  />
      </Switch>
    </BrowserRouter>);
  }
}

export default CategoryPage;


