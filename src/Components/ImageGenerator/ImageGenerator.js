import React, {  useState } from 'react'
import "./ImageGenerator.css"
import image from "../Assets/image.jpg"

function ImageGenerator() {
    const[imageurl,setimageurl]=useState("/")
    const[prompt,setprompt]=useState('')
    const[load,setload]=useState(true)
    const handleGenerateImage=()=>{
         if(prompt.trim()===""){
            return 
         }
         let response=`https://image.pollinations.ai/prompt/${prompt}`
         
         setload(false)
        
         setimageurl(response)
         setprompt("")
      

    }
    const handledownload = () => {
  if (imageurl === "/") return;
  const link = document.createElement("a");
  link.href = imageurl;
  link.download = "ai-image.jpg"; 
  link.click();
};

  return (
    <div className='ai-image-generator'>
        <div className='header'>
          <p>AI Image <span>Generator</span></p>
                 <button className='download' onClick={handledownload}>Download Image</button>

          <div className='img-loading'>
           <div className='image'>
    <img src={imageurl==="/"?image:imageurl}   alt="AI Generated pic" onLoad={()=>setload(true)} onError={()=>setload(true)}/>
           </div>
           <div className='loader'>
            {!load?
         <div className='load1'>

         </div>:<></>
            }
           </div>
          </div>
        </div>
      <div className='srchbox'>
        <input type="text" placeholder='Enter prompt to generate image' onChange={(e)=>setprompt(e.target.value)} value={prompt}/>
      
         <button onClick={handleGenerateImage} disabled={!load}>
  {!load ? "Loading" : "Generate"}
</button>
      </div>
    </div>
  )
}

export default ImageGenerator
