import React from "react";

const ImageList =(props) =>{
   const images = props.images.map((image,key)=>{
   return <img src={image.webformatURL
    } alt=""  key={key} className="image"/>

   })
return (
    
    <div className="image-container">
        {images}
    </div>
)


}

export default ImageList;