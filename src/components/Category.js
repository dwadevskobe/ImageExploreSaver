import React from 'react';
import './style.css';
import {Link} from "react-router-dom";


class Category extends React.Component {

  constructor(){
    super();
    this.handleDeleteCategory = this.handleDeleteCategory.bind(this);
  }

  handleDeleteCategory(e){
    e.preventDefault();
    this.props.handleDeleteCategory(this.props.uniqueId);
  }


  render(){

    return (
      <Link to={`/Saved/${this.props.name}`}  key={this.props.uniqueId} className="category">
         {this.props.name}
         <button className="deleteBtn" onClick={this.handleDeleteCategory}>x</button>
      </Link>
    );
  }
}

export default Category;
