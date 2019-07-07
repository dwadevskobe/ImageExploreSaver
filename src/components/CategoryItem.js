import React from 'react';



class CategoryItem extends React.Component{

	constructor(){
	    super();
	    this.state = {};
	        this.handleDeleteItem = this.handleDeleteItem.bind(this);

    }

    handleDeleteItem(e){
	    e.preventDefault();
	    this.props.handleDeleteItem(this.props.uniqueId);
	}

   render(){
	   return(  
	   		    <div className="categoryItem">
	   		    	<a href={this.props.imageUrl}>
	   					<img alt="" src={this.props.imageUrl} className="imageBox" key={this.props.uniqueId}/>
	   				</a>
	   				<button onClick={this.handleDeleteItem} className="deleteBtn">x</button>
	   			</div>
	    	 );
    }
}

export default CategoryItem;


