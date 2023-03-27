import React from "react";
import { GetStaticProps } from "next";
import Layout from "component/Layout";

import { Product } from "./product/type";
import api from "./product/api";
import { Button, Center, Flex, Grid, Heading, Image, Stack, Text } from "@chakra-ui/react";
import Heder from "component/header";
import { motion, AnimatePresence, } from 'framer-motion';



interface Props{
  products: Product[];
}

const IndexRoute : React.FC<Props> = ({products}) => {
  const [selectedImage, setselectedImage] = React.useState <string | null> (null);
  return (
  
    <Layout>
      
      <Heder/>
    
    <Stack p={10}>
      <Center><Heading size={"2xl"}>OFERTA DE LA SEMANA</Heading></Center>
      <Grid gridGap={12} templateColumns="repeat(auto-fill, minmax(240px, 1fr))">
    {products.map(product =>
       <Stack 
       backgroundColor={'red.400'}
       padding={4}
       spacing={3}
       >
      
         <Stack spacing={1}>
         <Image
         as={motion.img}
         cursor={"pointer"}
         layoutId={product.LINK}
         onClick={()=> setselectedImage(product.LINK)}
         src={product.LINK} maxHeight={170} objectFit='cover' alt=""/>
      <Text color={'black.500'}>{product.ROPAN}</Text>
      <Text>{product.DETALLEN}</Text>
      <Text>{product.PRECION}</Text>
      </Stack>
      <Button>comprar</Button>
      
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
   
        </Layout>
        
         
 
  )
};

export const getStaticProps: GetStaticProps = async () =>{
  const products = await api.List();
  return{
    props: {
      products,
    },
    revalidate: 2, 
  }
}

export default IndexRoute;