import React from "react";

import { Stack,Image, Text } from "@chakra-ui/react";

const Headerproduct = () => {
    return(
        <Stack pb={['0','20']} height={['100%','90vh']} width={'100%'}>
           
            <Image
    src='./hederpro.gif'
    height={['50%','110%']}
    alt='Dan Abramov'
  /> <Text display={'flex'} pt={['190px','470px']} position={'absolute'}>hola soy el texto </Text>

        </Stack>
    )
}
export default Headerproduct;