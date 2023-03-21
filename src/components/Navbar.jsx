import { Box,Button,Text, ButtonGroup,Flex, Heading, Icon, Stack , Show, Modal, ModalBody, ModalOverlay,useDisclosure,ModalContent, ModalHeader, ModalCloseButton, Divider} from '@chakra-ui/react'
import React from 'react'
import { BsHandbagFill, BsSearch } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { NavLink, Link } from 'react-router-dom';
import { cartTotalSelector } from "../Redux/selectors";
import { useSelector } from 'react-redux';

export const Navbar = () => {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const mobileTop ={
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: "20px",
        py: "10px"
    }

   const total = useSelector(cartTotalSelector);
    

    const span2={
            fontSize: "12px",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgoundColor: "blue",
            color: "white",
            display: "flex",
            alignItems: "center",
            JustifyContent: "center",
            position: "absolute",
            top: "10",
            right: "10",
            
    }
    const span1={
            fontSize: "12px",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgoundColor: "blue",
            color: "white",
            display: "flex",
            alignItems: "center",
            JustifyContent: "center",
            position: "absolute",
            top: "5",
            right: "2",
            
    }

  return (
      
      <>
      {/* <------------------------------DESKTOP----------------------------------> */}
    <Flex  bg="white.500" align="center" justify="space-between" px="20px" py="20px">
            <Show above="md"> 
        <Link to="/">
       <Stack direction='row'>
        
           <Heading fontFamily="Poppins">BEN</Heading>
            <Heading color="blue.500" fontFamily="Poppins">STORE</Heading>

         </Stack>
        </Link>
         <Flex align="center" justify="space-between" gap="4rem">


         <Flex gap="2rem" fontWeight="light" fontFamily="Poppins" >
             <NavLink to="/" fontWeight="light" fontFamily="Poppins">
                <Text _hover={{ color: 'tomato' }}>HOME</Text>
                </NavLink>
             <NavLink to="/shop" fontWeight="light" fontFamily="Poppins">
                <Text _hover={{ color: 'tomato' }}>SHOP</Text>
                </NavLink>    
             <Link fontWeight="light" fontFamily="Poppins">
                <Text _hover={{ color: 'tomato' }}>CONTACT</Text>
                </Link>    
         </Flex>

         <Flex gap="1rem" align="center">
             
             <Box cursor="pointer">
                <Link to="/cart">
                
                <Icon as={BsHandbagFill} boxSize={5}/>
                <Box sx={span1} bg="blue.500">
                    <Text pl="1.5">{total}</Text>
                    </Box> 
                </Link>
             </Box>
         </Flex>
                       
         </Flex>
         </Show>
    </Flex>
         {/* <Divider /> */}
         <Show above="md">
            <Box boxShadow='xl' p='6' rounded='md' bg='white'></Box>
         
         </Show>
  
    {/* <----------------------------------------------------------------> */}
        {/* MOBILE */}
        <Box sx={mobileTop}>
                <Show below="md">
                        <Box w="11rem">
                            <Link to="/">
                                <Stack direction='row'>
                                 <Heading size="sm" fontFamily="Poppins">BEN</Heading>
                                 <Heading size="sm" color="blue.500" fontFamily="Poppins">STORE</Heading>
                                 </Stack>
                            </Link>
                        </Box>
                        <Box>
                            <Box sx={{display: "flex", gap: "15px", alignItems: "center"}}>
                                    
                                    <Link to="/cart" sx={{display: "flex", flexDirection: "row", alignItems: "center", JustifyContent: "center"}}>
                                        <Box>
                                            <Icon as={BsHandbagFill} />
                                        </Box>
                 
                                        <Box sx={span2} bg="blue.500">
                                            <Text pl="1.5">{total}</Text>
                                        </Box>
                                    </Link>
                                    <Box >

                                    <Box onClick={onOpen}>
                                             <Icon as={AiOutlineMenu} cursor="pointer"/>
                                    </Box>
                                    <Modal
                                         isRIght
                                     onClose={onClose}
                                         isOpen={isOpen}
                                     motionPreset='slideInBottom'
                                     >
                                        <ModalOverlay />
                                         <ModalContent>
                                         <ModalHeader></ModalHeader>
                                         <ModalCloseButton />
                                         <ModalBody >
                                            <Box spacing="6" direction='col'>
                                                <Link to="/shop" onClick={onClose}>
                                                
                                                    <Box >Shop</Box>
                                                </Link>
                                            <Divider />
                                            <Box >Sign in</Box>
                                            <Divider />
                                            <Box >Sign up</Box>
                                            </Box>
                                         </ModalBody>
          
                                        </ModalContent>
                                        </Modal>

                                    </Box>
                            </Box>
                            
                        </Box>
                </Show>
        </Box>
    </>
  )
}
