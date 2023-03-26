import React from "react";
import { GetStaticProps } from "next";

import { Productd } from "./product/type";
import apid from "./product/api";
import { Button, Flex, Grid, Image, Stack, Text } from "@chakra-ui/react";

import { motion, AnimatePresence, } from 'framer-motion';



interface Props{
  ropad: Productd[];
}

const Ropadama: React.FC<Props> = ({ropad}) => {
  const [selectedImage, setselectedImage] = React.useState <string> (null);
  const handleComprar = (product: Productd) => {
    const message = `¡Hola! Me interesa comprar el producto ${product.ROPAD}, con un precio de ${product.PRECIOD}.`;
    const url = `https://wa.me/3875057208/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
  return (
  
    <Stack>
      
      
    
    <Stack p={10}>
      <Grid gridGap={12} templateColumns="repeat(auto-fill, minmax(240px, 1fr))">
    {ropad.map(productd =>
       <Stack 
       backgroundColor={'red.400'}
       padding={4}
       spacing={3}
       >
      
         <Stack spacing={1}>
         <Image
         as={motion.img}
         cursor={"pointer"}
         layoutId={productd.LINKD}
         onClick={()=> setselectedImage(productd.LINKD)}
         src={productd.LINKD} maxHeight={170} objectFit='cover' alt=""/>
      <Text color={'black.500'}>{productd.ROPAD}</Text>
      <Text>{productd.DETALLED}</Text>
      <Text>{productd.PRECIOD}</Text>
      </Stack>
      <Button onClick={() => handleComprar(productd)} >comprar</Button>
      
      </Stack>)}
    </Grid>
    </Stack>
    <AnimatePresence>
    {selectedImage && (
      <Stack  >
        <Flex
      justifyContent={'center'}
      left={'0'}
      top='0'
      layoutId={selectedImage}
      position={'fixed'}
      width={'100%'}
      height={'100%'}
      backgroundColor="rgba(0,0,0,0.5)"
      as={motion.div}
      alignItems={'center'}
      key={'backdrop'}
      onClick={()=> setselectedImage (null)}
      >
        
          <Image height={'100%'}  key={'image'} src={selectedImage}/>
        
      
      </Flex>
      </Stack>
      
    )  }
    </AnimatePresence>
   
        </Stack>
        
         
 
  )
};

export const getStaticProps: GetStaticProps = async () =>{
  const products = await apid.List();
  return{
    props: {
      products,
    },
    revalidate: 2, 
  }
}

export default Ropadama;