import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { cartTotalSelector } from "../Redux/selectors";
import { cartTotalPriceSelector } from "../Redux/selectors";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Flex,
  Box,
  SimpleGrid,
  Button,
  Text,
  Stack,
} from '@chakra-ui/react'

const Checkout = () => {
    const [change, setChange] = useState(false);
    const [input, setInput] = useState('')

  const handleInputChange = (e) => setInput(e.target.value)

  const isError = input === ''

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
    <Flex direction={['column','column','row']} alignItems="center" justifyContent={"center"} gap="6" px="5">

    <Box>

    <Text display={"flex"} alignItems="center" justifyContent={"center"} fontSize={{base: "12px", sm: "20px", md: '36px', lg: '56px'}} mb="5">CHECKOUT</Text>

    <SimpleGrid columns={[2,3,3,4]} spacing='40px' m="auto">
        <Box>
        <FormControl isRequired>
      <FormLabel>First name</FormLabel>
     <Input placeholder='First name' />
        </FormControl>
        <FormControl isRequired>
      <FormLabel>Last name</FormLabel>
     <Input placeholder='Last name' />
        </FormControl>
        </Box>
        <Box>


        <FormControl isInvalid={isError} isRequired>
      <FormLabel>Email</FormLabel>
      <Input type='email' value={input} onChange={handleInputChange} />
      {!isError ? (
        <FormHelperText>
          Enter the email you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
    </FormControl>
    <FormControl isRequired>
      <FormLabel>Phone Number</FormLabel>
     <Input placeholder='Your number' />
    </FormControl>
        </Box>
        <Box>


        <FormControl isRequired>
      <FormLabel>Address</FormLabel>
     <Input placeholder='Address' />
        </FormControl>
        <FormControl isRequired>
      <FormLabel>Country</FormLabel>
     <Input placeholder='First name' />
        </FormControl>
        <FormControl isRequired>
      <FormLabel>City</FormLabel>
     <Input placeholder='City' />
        </FormControl>

        </Box>
  </SimpleGrid>
  </Box>
        <Stack>
            <Text fontSize={{base: "12px", sm: "20px", md: '36px', lg: '40px'}}>Summary</Text>
            <Text fontSize={{base: "12px", sm: "16px", md: '20px'}} color="red.500" fontWeight="bold">Total: ${totalPrice}</Text>
            <Button bg="blue.300" color="white">Pay Now</Button>
        </Stack>
  </Flex>
  )
}

export default Checkout