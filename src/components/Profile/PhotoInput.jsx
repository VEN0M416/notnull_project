import React, { Component} from 'react';
import defaultProfile from '../Img/profile.png' 
// const PhotoInputForm = () => {
//   const [photo, setPhoto] = useState(null);

//   return (
//     <div>
//       <p>Upload</p>

//       {photo &&(
//         <div>
//           <img
//             alt="not found"
//             width={"250px"}
//             src={URL.createObjectURL(photo)}
//           />
//           <br/>
//           <button onClick={()=> setPhoto(null)}/>
//         </div>
//       )}

//       <br/>
//       <br/>
//       <input
//         type='file'
//         name="myImage"
//         onChange={(e)=>{
//           console.log(e.target.files[0]);
//           setPhoto(e.target.files[0])
//         }}
//       />
//     </div>
//   );
// };

class PhotoInputForm extends Component{
  constructor(props){
    super(props);
    this.state ={
      photoPreview: defaultProfile,
    }
  this.photoInputRef = React.createRef();
  }

  handlePhotoChange = (e)=>{
    const reader = new FileReader();
    reader.onload = (e)=>{
      this.setState({photoPreview: e.target.result});
    }
    reader.readAsDataURL(e.target.files[0]);
    console.log(e.target.files[0]);
  }

  handlephotoClick =() =>{
    this.photoInputRef.current.click();
  }

  render(){
    const {photoPreview} = this.state;
    return(
        <div className="relative group">
        <span
          className="block z-10 w-40 h-40 rounded-full m-auto shadow transition-opacity duration-300 ease-in-out"
          style={{
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundImage: `url(${photoPreview})`,
          }}
          onClick={this.handlephotoClick}
        />
        <input
          ref={this.photoInputRef}
          type="file"
          className="hidden z-10"
          onChange={this.handlePhotoChange}
        />
        <div style={{ zIndex: -1 }} className="absolute rounded-full top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out"></div>
      </div>
      

    )
  }
}
export default PhotoInputForm;
