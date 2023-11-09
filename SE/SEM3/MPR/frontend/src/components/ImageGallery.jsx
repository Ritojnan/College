import React, { useState } from 'react';
import {
  Button,
  Grid,
  GridItem,
  Image,
  Center,
  Text,
  Box,
} from '@chakra-ui/react';
import axios from "axios"
const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getImage() {
    setLoading(true);

    const result =await axios.get("https://gwbd6ngq-5000.inc1.devtunnels.ms/api/images/getimage");
    console.log(result)
    setImages(result.data.data)
    setLoading(false)
    // fetch('https://gwbd6ngq-5000.inc1.devtunnels.ms/api/images/getimage', {
    //   method: 'GET',
    // })
    //   .then((res) => res.json())
    //   .then((imgobj) => {
    //     console.log(imgobj);
    //     setImages(imgobj.data);
    //     setLoading(false);
    //   });
  }

  return (
    <Box p={4}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Image Gallery
      </Text>
      <Center>
        <Button onClick={getImage} isLoading={loading} loadingText="Fetching Images">
          Fetch Images
        </Button>
      </Center>
      <Grid
        templateColumns="repeat(3, 1fr)" // Adjust the number of columns as needed
        gap={4}
        mt={4}
      >
        {
          images.map((image)=>{
            console.log(image)
            return (
              
              <img key={image._id} src={`https://gwbd6ngq-5000.inc1.devtunnels.ms/`+image.image} alt="data" />
              
            )
          })
        }
        {/* {images.map((image) => (
          <GridItem key={image._id} colSpan={1}>
            <Center>
              <Image
                src={image.image}
                alt="Image"
                boxSize="200px"
                objectFit="cover"
              />
            </Center>
          </GridItem>
        ))} */}
      </Grid>
    </Box>
  );
};

export default ImageGallery;
