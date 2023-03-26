import React from "react";
import { GetStaticProps } from "next";

import { Productc } from "./product/type";
import apic from "./product/api";

import { Button, Flex, Grid, Image, Stack, Text,Link } from "@chakra-ui/react";

import { motion, AnimatePresence, } from 'framer-motion';




interface Props{
  ropac: Productc[];
}

const Ropacaba: React.FC<Props> = ({ropac}) => {
  const [selectedImage, setselectedImage] = React.useState <string> (null);
  const Textw = "hola me interesa este producto ${product.ROPAC} gracias";
  return (
  
    <Stack>
      
      
    
    <Stack p={10}>
      <Grid gridGap={12} templateColumns="repeat(auto-fill, minmax(240px, 1fr))">
    {ropac.map(productc =>
       <Stack 
       backgroundColor={'red.400'}
       padding={4}
       spacing={3}
       >
      
         <Stack spacing={1}>
         <Image
         as={motion.img}
         cursor={"pointer"}
         layoutId={productc.LINKC}
         onClick={()=> setselectedImage(productc.LINKC)}
         src={productc.LINKC} maxHeight={170} objectFit='cover' alt=""/>
      <Text color={'black.500'}>{productc.ROPAC}</Text>
      <Text>{productc.DETALLEC}</Text>
      <Text>{productc.PRECIOC}</Text>
      </Stack>

      <Link href={'http//wa.me/3875057208?text=${Textw}'} isExternal>
       <Button
        >
        comprar
        </Button>
      </Link>
       
      
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
  const Productc = await apic.List();
  return{
    props: {
      Productc,
    },
    revalidate: 2, 
  }
}

export default Ropacaba;