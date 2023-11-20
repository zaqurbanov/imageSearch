import React, { Component } from "react";


class SearchInput extends Component {

  
 state ={
    entry : ""
 }
    onFormSubmit = (e)=>{
        
        e.preventDefault()
        this.props.onSearchSubmit(this.state.entry)

    }

        render(){



            
            return(

<div>
<form action="" onSubmit={this.onFormSubmit}> 
    <div className="form-search">
             <input 
             type="text" placeholder="Search..."
              onChange={(e)=>this.setState({entry : e.target.value})}
              value={this.state.entry}
              /> 
             <span className="material-symbols-outlined">
search
</span>
    </div>
</form>
                   
</div>


            )



        }


}

export default SearchInput 