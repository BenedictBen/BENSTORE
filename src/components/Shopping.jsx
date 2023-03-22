import { Box, SimpleGrid,Flex, Text, Button, Grid, GridItem, Image, Icon, Divider, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React, { useState } from 'react'
import { shopList } from '../assets/shop'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Redux/cartSlice';
import { BsSearch } from "react-icons/bs";



const Shopping = () => {
    const all = shopList
    const [data, setData] = useState(all);
    const [searchTerm, setSearchTerm] = useState("");

    const allproduct = useSelector((state) => state.allproduct);
    const dispatch = useDispatch();

   

    const filterResult = (cartItem) => {
        const result = all.filter((cart) => {
            return cart.category === cartItem;
        })
        setData(result);
    }
  return (
    
    <Box >
        <Box pl="7">
            <InputGroup >
                    <Input placeholder='Search Product' variant='outline' w={['xs','sm','md']} size={['xs','sm','md']} onChange={(event) => {
            setSearchTerm(event.target.value);
          }}/>
                    <InputLeftElement pr={["2rem","2rem","5"]} pb={["4","3","1"]}
                              pointerEvents='none'
                         children={<Icon as={BsSearch} boxSize={['3','3','4']}/>}
                        />
            
            </InputGroup>
        </Box>
        <Box  minWidth="400">
             <Text pl="7" textDecoration="underline">Product Category</Text>
            <Box pt="12" display="flex" alignItems="center" cursor="pointer" flexDirection="row" gap={['1','4','6','10']} justifyContent="center">
                    <Text fontSize={{base: "12px", sm: "16px", md: '20px'}} onClick={() => setData(all)} _hover={{textDecoration:"underline", textDecorationColor:"orange.200"}}>Shop All</Text>
                    <Text fontSize={{base: "12px", sm: "16px", md: '20px'}} onClick={() => filterResult('electronic')} _hover={{textDecoration:"underline", textDecorationColor:"orange.200"}}>Electronic</Text>
                   <Text fontSize={{base: "12px", sm: "16px", md: '20px'}} onClick={() => filterResult('fashion')} _hover={{textDecoration:"underline", textDecorationColor:"orange.200"}}>Fashion</Text>
                    <Text fontSize={{base: "12px", sm: "16px", md: '20px'}} onClick={() => filterResult('health')} _hover={{textDecoration:"underline", textDecorationColor:"orange.200"}}>Health & Beauty</Text>
            </Box>
            <Box color="green" h="2" w="2"></Box>
        </Box>
        <SimpleGrid columns={[2,3,3,4]} spacing='40px' mt="6">
            {
            data 
              .filter((item) => {
                return searchTerm.toLowerCase() === '' ? item : item.name.toLowerCase().includes(searchTerm);
              })
                .map((item) => (
                    <Box key={ item.id } borderWidth='1px' borderRadius='lg' overflow='hidden'>
                            <Box display="flex" alignItems="center" flexDirection="column">
                         <Image src={ item.image } alt={ item.category } h='200px'  
                            objectFit='contain' />

                            <Text>{item.name}</Text>
                            <Text fontWeight={"bold"}>${item.price}</Text>
                            </Box>
                            <Button m="auto" colorScheme="blue" display="flex" boxSize='base' px="3" py="3" onClick={() => dispatch(addToCart(item))}>Add to Card</Button>
                    </Box>
                ))
            }
        </SimpleGrid>
    </Box>
  )
}

export default Shopping