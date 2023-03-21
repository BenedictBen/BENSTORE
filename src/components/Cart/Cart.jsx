import { Box, Button, Flex, Heading, Image, SimpleGrid, Text, Icon } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";
import { Link } from 'react-router-dom';
// import { shopList } from '../../assets/shop';
import { useSelector, useDispatch } from 'react-redux';
import { cartTotalSelector } from "../../Redux/selectors";
import { cartTotalPriceSelector } from "../../Redux/selectors";
import { increament, decrement, removeItem,clear } from "../../Redux/cartSlice";




const Cart = () => {
    const [change, setChange] = useState(false);
     const [disabled, setDisabled] = useState(false)


    const total = useSelector(cartTotalSelector);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  
  const totalPrice = useSelector(cartTotalPriceSelector);
  
    useEffect(() => {
    if (total !== 0) {
      setChange(true);

      setTimeout(() => {
        setChange(false);
      }, 1000);
    }
  }, [total]);

  return (
    <>
        <SimpleGrid columns={[2,3,3,4]} spacing='40px' mt="6">
                {cart.map((list) => (
                    <Box key={ list.id } borderWidth='1px' borderRadius='lg' overflow='hidden'>
                            <Box display="flex" alignItems="center" flexDirection="column">
                                <Box position={"relative"}>

                                 <Image src={ list.image } alt={ list.category } h='200px'  
                                    objectFit='contain' />
                                    <Button position={"absolute"} top={"2"} left={["30","36","40","48"]} size={['10','16','20','32']} onClick={() => {
                                     dispatch(removeItem(list.id));
                  }}>
                                    <Icon as={AiOutlineClose} color="red.500" />
                                </Button>
                                </Box>

                            <Text>{list.name}</Text>
                            <Text fontWeight={"bold"}>${list.quantity * Math.round(list.price)}</Text>
                            <Box mb={"2"} display="flex" gap={"3"}>
                                <button disabled={list.quantity === 1} onClick={() => {
                                     dispatch(decrement(list.id));
                                 }}>
                                    <Icon as={AiOutlineMinus}/>
                                </button>
                                <button>{list.quantity}</button>
                                <button onClick={() => {
                                   dispatch(increament(list.id));
                                 }}>
                                    <Icon as={AiOutlinePlus}/>
                                </button>
                            </Box>
                            </Box>
                            <Button m="auto" colorScheme="blue" display="flex" boxSize='base' px="3" py="3">Add to Card</Button>
                            <Box></Box>
                    </Box>
                ))} 
                {total > 0 ? (
                    <>
                    <Box m="auto">
                        <Button onClick={() => {
                    dispatch(clear());
                  }}    >Clear </Button>
                    </Box>
                    <Box>
                        <Button>
                            <Link to="/checkout">
                                <Box>Proceed to Checkout</Box>
                            </Link>
                            <Text ml="2" fontSize={{base: "12px", sm: "16px", md: '20px'}} color="red.500">${totalPrice}</Text>
                        </Button>
                    </Box>
                    </>
                ): (
                    // <Box w="100%">

                    //     <Heading fontSize={{base: "20px", sm: "30px", md: '50px'}}  >Your Shopping Cart is empty</Heading>
                    // </Box>
                    <Text fontSize={{base: "20px", sm: "30px", md: '50px'}} pl="10"  >Your Shopping Cart is empty</Text>
                )}
        </SimpleGrid>
    </>
  )
}

export default Cart