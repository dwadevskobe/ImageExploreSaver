import React, { Component } from 'react';
import axios from 'axios';
import CategoryList from './CategoryList';
import CategoryForm from './CategoryForm';
import './style.css';

class CategoryBox extends Component {
  constructor(props) {
    super(props);
    this.state = { listOfCategories: [] };
    this.loadCategorysFromServer = this.loadCategorysFromServer.bind(this);
    this.handleAddCategory = this.handleAddCategory.bind(this);
    this.handleDeleteCategory = this.handleDeleteCategory.bind(this);
  }
  loadCategorysFromServer() {
    axios.get(this.props.url)
      .then(res => {
        this.setState({ listOfCategories: res.data });
      })
  }

  handleAddCategory(category){
    let categories = this.state.listOfCategories;
    category._id = Date.now();

    let categoryExists =  categories.find(cat =>
      cat.name === category.name
    );


    if (categoryExists != null){
      alert(category.name + " already exists");
      return;
    }

    let newComments = categories.concat([category]);
    this.setState({listOfCategories:newComments});

     axios.post(this.props.url,category)
      .catch(err => {
        console.error(err);
        this.setState({ listOfCategories: categories });
      });
  }

  handleDeleteCategory(id){

    let categories = this.state.listOfCategories;

    let newCategories =  categories.filter(categoryEntry =>
      categoryEntry._id !== id
    );

    this.setState({ listOfCategories: newCategories });


     axios.delete(`${this.props.url}/${id}`)
      .then(res => {
      })
      .catch(err => {
        this.setState({ listOfCategories: categories });
        console.error(err);
      });
  }
 
  componentDidMount() {
    this.loadCategorysFromServer();
  }

  render(){

	return (
	  <div className="categoryBox">
	    <CategoryForm handleAddCategory={this.handleAddCategory}/>
	    <CategoryList data={this.state.listOfCategories} handleDeleteCategory={this.handleDeleteCategory}/>
	  </div>
	);
  }
}

export default CategoryBox;