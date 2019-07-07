import React, { Component } from 'react';
import Category from './Category';
import './style.css';

class CategoryList extends Component {
  render() {
    let categoryNodes = this.props.data.map(category => {
      return (
        <Category name={category.name} key={category._id} uniqueId={category._id} handleDeleteCategory={this.props.handleDeleteCategory}  handleSelectCategory={this.props.handleSelectCategory}/> 
      )
    })
    return (
      <main className="categoryList">
        {categoryNodes} 
      </main>
    )
  }
}

export default CategoryList;