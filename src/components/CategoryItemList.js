import React from 'react';
import axios from 'axios';
import CategoryItem from './CategoryItem';


class CategoryItemList extends React.Component{

	constructor(){
	    super();
	    this.loadCategoryItemsFromServer = this.loadCategoryItemsFromServer.bind(this);
	    this.handleDeleteItem = this.handleDeleteItem.bind(this);
	    this.state = {listOfCategoryItems: []};
    }

    loadCategoryItemsFromServer(categoryName) {
	    axios.get(`${this.props.url}/${categoryName}`)
	      .then(res => {
	        this.setState({ listOfCategoryItems: res.data });
	     })
    }

    handleDeleteItem(id){
    	let categoryItems = this.state.listOfCategoryItems;

	    let newListOfCategoryItems =  categoryItems.filter(categoryItemEntry =>
	      categoryItemEntry._id !== id
	    );

	    this.setState({ listOfCategoryItems: newListOfCategoryItems });

	    axios.delete(`${this.props.url}/${id}`)
	      .then(res => {
	        console.log(`${this.props.url}/${id}`);
	      })
	      .catch(err => {
	        this.setState({ listOfCategoryItems: categoryItems });
	        console.error(err);
	     });
	}

    componentDidMount() {
      this.loadCategoryItemsFromServer(this.props.routerProps.match.params.categoryName);
    }

    render(){

   	  let categoryItems = this.state.listOfCategoryItems.map(categoryItem => {
	      return (
	        <CategoryItem imageUrl={categoryItem.imageUrl}
	        			  key={categoryItem._id} 
	        			  uniqueId={categoryItem._id}
	        			  handleDeleteItem={this.handleDeleteItem}/> 
	      )
      })

	   return(
	   	     <main>
	   	     	 <h3 style={{textAlign:'center'}}>{this.props.routerProps.match.params.categoryName}</h3>
		   		 <div className="categoryItemList">
		   			{categoryItems}
		    	 </div>
	    	 </main>
	    	 );
    }
}

export default CategoryItemList;


