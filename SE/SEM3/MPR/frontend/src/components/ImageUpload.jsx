import React, { useState } from 'react';
import { Box, Button, Center, Input, Text, Image } from '@chakra-ui/react';
import axios from "axios"

export default function ImageUpload() {
  const [image, setImage] = useState('');

  function convertToBase64(e) {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log('error:', error);
    };
  }

  function uploadImage() {
    fetch('http://localhost:5000/api/images/uploadimage', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        base64: image,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  const submitImage=async(e)=>{
    e.preventDefault();
    const formData =new FormData();
    formData.append("image",image)

    const result = await axios.post(
      "http://localhost:5000/api/images/uploadimage",
      formData,
      {
        headers:{"Content-Type":"multipart/form-data"}
      }
    )
  }

  const onInputChange=(e)=>{
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  }

  return (
    <>
    <Box p={4}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Upload Image
      </Text>
      <Center>
        <Input p={2} m={2} type="file" accept="image/*" onChange={convertToBase64} />
      </Center>
      <Box mt={4}>
        {image !== '' && (
          <Center>
            <Image boxSize="100px" src={image} alt="Uploaded" />
          </Center>
        )}
      </Box>
      <Center mt={4}>
        <Button colorScheme="blue" onClick={uploadImage}>
          Upload
        </Button>
      </Center>
    </Box>
<Box>
  <form onSubmit={submitImage}>
  <Input p={2} m={2} type="file" accept="image/*" onChange={onInputChange} />
  <button type='submit'>Submit</button>
  </form>
</Box>
    </>
  );
}

// const ImageUpload = () => {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
    
//     if (!selectedFile) {
//       alert('Please select a file.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('image', selectedFile);

//     try {
//       const response = await fetch('http://localhost:5000/api/upload', {
//         method: 'POST',
//         body: formData,
//       });

//       if (response.status === 201) {
//         alert('Image uploaded successfully.');
//       } else {
//         alert('Image upload failed.');
//       }
//     } catch (error) {
//       console.error(error);
//       alert('An error occurred while uploading the image.');
//     }
//   };

//   return (
//     <div>
//       <h2>Image Upload</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="file" onChange={handleFileChange} />
//         <button type="submit">Upload</button>
//       </form>
//     </div>
//   );
// };

// export default ImageUpload;
