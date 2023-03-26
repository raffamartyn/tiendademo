import { Stack,Image,Text  } from "@chakra-ui/react";


const Heder = () =>{
    return(
        <Stack pb={['0','20']} height={['100%','90vh']} width={'100%'}>
           
            <Image
    src='./tu tienda online.gif'
    height={['50%','110%']}
    alt='Dan Abramov'
  /> <Text display={'flex'} pt={['190px','470px']} position={'absolute'}>hola soy el texto </Text>

        </Stack>
    )
}
 export default Heder;