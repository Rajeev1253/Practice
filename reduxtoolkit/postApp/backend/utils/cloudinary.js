import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs'

const uploadonCloudinary = async(localFilePath)=>{
  try{
    if(!localFilePath) return null
    const response = await cloudinary.uploader.upload(localFilePath,{
      resource_type:"auto"
    }  )
    console.log("file is uploaded successfully",response.url)
    return response

  }
  catch(error){
    


  }

}
cloudinary.config({ 
  cloud_name:process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
});