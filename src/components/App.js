import React, { Component } from "react";
import  axios  from "axios";
import SearchInput from "./SearchInput";
import ImageList from "./ImageList";


class App extends Component{
    state ={
        images : []
    }
   onSearchSubmit = async (entry)=>{
       const respons = await axios.get(`https://pixabay.com/api/?key=22690930-b6c091abe035db8d145805fa2&q=${entry}&image_type=photo
        `)
        this.setState ({
            images : respons.data.hits
        })
        }
render(){

    return(
        <div>

            <SearchInput onSearchSubmit = {this.onSearchSubmit} />

            <div className="image-main">
            <ImageList images={this.state.images} />

            </div>
        </div>
    )
}
}
export default App;