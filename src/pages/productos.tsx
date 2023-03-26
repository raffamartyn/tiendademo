import React from "react";
import Layout from "component/Layout";
import { Tabs,Tab, TabList, TabPanel, TabPanels, Image, Text, SimpleGrid, } from "@chakra-ui/react";
import Headerproduct from "component/headerprod";

import { GetStaticProps } from "next";

import { Product } from "./product/type";
import api from "./product/api";
import Ropaniño from "./ropan";


import Ropadama from "./ropad";
import { Productd } from "./product/type";
import apid from "./product/apid";

import Ropacaba from "./ropac";
import { Productc } from "./product/type";
import apic from "./product/apic";



interface Props{
    products: Product[];
    ropac: Productc[];
    ropad: Productd [];
    
    
  }
  

const listado: React.FC<Props> = ({products,ropad,ropac}) => {
    
  return(
        <Layout>
          <Headerproduct/>

<Tabs variant='unstyled'>
  <TabList  pl={[16,60,80]}>
    <SimpleGrid  gap={[1,10,10]} columns={[2,2,4]}>
        
    <Tab _selected={{ color: 'white', bg: 'blue.500' }} w='200' pb='12'><Image w={100} src={'./ropa.png'} alt={''}/><Text pt='150' position={'absolute'}>NIÑOS</Text></Tab>
    <Tab _selected={{ color: 'white', bg: 'green.400' }} w='200' pb='12'><Image w={100} src={'./vestir.png'} alt={''}/><Text pt='150' position={'absolute'}>DAMA</Text></Tab>
    <Tab _selected={{ color: 'white', bg: 'yellow.400' }} w='200' pb='12'><Image w={100} src={'./sudadera-con-capucha.png'} alt={''}/><Text pt='150' position={'absolute'}>CABALLEROS</Text></Tab>
    <Tab _selected={{ color: 'white', bg: 'red.400' }} w='200' pb='12'><Image w={100} src={'./ropa.png'} alt={''}/><Text pt='150' position={'absolute'}>NIÑAS</Text></Tab>
    </SimpleGrid>
  
  </TabList>
  <TabPanels pl={10} pr={10}>
    <TabPanel backgroundColor={'blue.500'}>
      
    <Ropaniño products={products}/>
  
    </TabPanel>
    <TabPanel backgroundColor={'green.400'}>

      <Ropadama ropad={ropad}/>
      
    </TabPanel>
    <TabPanel backgroundColor={'yellow.400'}>
      
    <Ropacaba ropac={ropac}/>

    </TabPanel>
    <TabPanel backgroundColor={'red.400'}>
      
  

    </TabPanel>
  </TabPanels>
</Tabs>

        </Layout>
        
    )
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await api.List();
  const ropad = await apid.List();
  const ropac = await apic.List();

  return {
    props: {
      products,
      ropad,
      ropac,
    },
  };
};



export default listado;