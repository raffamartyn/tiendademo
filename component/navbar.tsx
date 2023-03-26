import { useColorMode, Switch, Flex, Button, IconButton, Spacer, } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {useEffect, useState} from 'react';
import Link from "next/link";


const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode ()
  const isDark = colorMode === 'dark'
  const [display, changuedisplay] = useState('none')
  return(
    <Flex
   
    border={'2px'} borderColor={'gray.500'} 
    px={'4'}
    >
      <Flex
      align={'center'}
      >
        <Link href={'./'}>
          <h1>LOGO</h1>
        </Link>
        
      </Flex>
      <Spacer/>
      <Flex
        
         
         top={'1rem'}
         right={'1rem'}
         align={'center'}
      >
        <Flex
        display={['none', 'none', 'flex', 'flex']}
        mx={'3'}
        > 
        <Link href={'/'}>
            <Button
            border={'2px'} borderColor={'gray.300'}
            px={'10'}
            my={5}
            width={'100%'}
            
            >
              Home
            </Button>
          
          </Link>
          <Link href={'/productos'}>
            <Button
            border={'2px'} borderColor={'gray.300'}
            px={'10'}
            my={5}
            width={'100%'}
            
            >
              Productos
            </Button>
          
          </Link>
         

          <Link href={'/nosotros'}>
            <Button
            border={'2px'} borderColor={'gray.300'}
            px={'10'}
            my={5}
            width={'100%'}
            
            >
              nostros
            </Button>
          
          </Link>
        </Flex>

          <IconButton
          aria-label="Open Menu"
          size={'lg'}
          mr={'2'}
          icon={<HamburgerIcon/>}
          display={['flex', 'flex', 'none', 'none']}
          onClick={() => changuedisplay('flex')}
          
          />
           <Switch
 
              color={'green'}
              isChecked={isDark}
              onChange={toggleColorMode}
            />

      </Flex>

      <Flex
      
      bgColor={'blue.100'}
      zIndex={20}
      w={'100%'}
      h={'100vh'}
      position={'fixed'}
      top={'0'}
      left={'0'}
      overflow={'auto'}
      flexDir={'column'}
      display={display}
      >
        <Flex justify={'flex-end'}>
          <IconButton
          mt={'2'}
          mr={'2'}
          aria-label={'Close Menu'}
          size={'lg'}
              icon={<CloseIcon/>}
              onClick={() => changuedisplay('none')}
          />
          
        </Flex>

      <Flex
      flexDir={'column'}
      alignItems={'center'}
      w={'100%'}
      my={'10'}
      
      
      >
         <Link href={'/productos'}>
            <Button
            border={'2px'} borderColor={'gray.300'}
            px={'10'}
            my={5}
            width={'100%'}
            
            >
              Productos
            </Button>
          
          </Link>
      
          <Link href={'/contacto'}>
            <Button
            my={5}
            width={'100%'}
            
            >
              contactos
            </Button>
          
          </Link>

          <Link href={'/nosotros'}>
            <Button
            my={5}
            width={'100%'}
            
            >
              nostros
            </Button>
          
          </Link>

          
        </Flex>
      </Flex>


    </Flex>
    

  )
}

export default Navbar;