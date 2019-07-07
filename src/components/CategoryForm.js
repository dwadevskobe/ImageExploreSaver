import React from 'react';


class CategoryForm extends React.Component {

	constructor(){
		super();
		this.handleAddCategory = this.handleAddCategory.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {category:""}
	}

	handleAddCategory(e){
		e.preventDefault();
		if (this.state.category !== ""){
			this.props.handleAddCategory({name:this.state.category});
			this.setState({category:""});
		}
	}

	handleChange(e){
		e.preventDefault();
		const category = e.target.value;
		this.setState({category:category});
	}
 
	render(){

		return(
			<div className="categoryForm">		  
				<form onSubmit={this.handleAddCategory}>
				 	<b>Enter Category: </b> &nbsp;&nbsp;
					<input type="text" 
						   name="category"
						   placeholder="Enter Category" 
						   value={this.state.category}
						   onChange={this.handleChange}>
				    </input> &nbsp;&nbsp;
					<button type="submit"> Submit </button>
				</form>
			</div>	
		)

	}

}

export default CategoryForm;
