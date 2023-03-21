import { Box, Flex, Grid, GridItem,Image, SimpleGrid, Text, Icon, Button } from '@chakra-ui/react'
import React, { useState, useEffect, useRef } from 'react'
import health from '../assets/images/health.jpg'
import fashion from '../assets/images/fashion.jpg'
import electronic from '../assets/images/electronic.jpg'
import man from '../assets/images/man.png';
import { BsTruck,BsCash } from "react-icons/bs"
import { AiOutlineUndo,AiOutlineClockCircle } from "react-icons/ai";
import { Link } from 'react-router-dom'


const Categories = () => {
        const [timerDays, setTimerDays] = useState('00');
        const [timerHours, setTimerHours] = useState('00');
        const [timerMinutes, setTimerMinutes] = useState('00');
        const [timerSeconds, setTimerSeconds] = useState('00');

        let interval = useRef();

        const startTimer = () => {
            const countdownDate = new Date('April 01, 2023 00:00:00').getTime();

            interval = setInterval(() => {
                const now = new Date().getTime();
                const distance = countdownDate - now;

                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
                const minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60));
                const seconds = Math.floor((distance & (1000 * 60 )) / 1000);

                if(distance < 0){
                    // stop our timer 
                    clearInterval(interval.current)
                } else{
                    //update timer
                    setTimerDays(days);
                    setTimerHours(hours);
                    setTimerMinutes(minutes)
                    setTimerSeconds(seconds)
                }
            }, 1000)
        }
        useEffect(() => {
            startTimer();
            return () => {
                clearInterval(interval.current)
            }
        })
  return (
    <>
    
    <Flex direction={['column','column','row']} gap="10" sx={{alignItems: "center", justifyContent:"center", mt: "6"}}>
            <Box sx={{position: "relative"}}>
                <Link to="/shop">
                <Image src={electronic} w={['76','72','80']}/>
                <Text sx={{ backgroundColor:"white", color: "black",px:"5",py:"5" }} position={"absolute"} top={["16","20","18","24"]} left={["10","15","20"]} fontSize={{base: "12px", sm: "16px", md: '20px'}}>ELECTRONICS</Text>
                
                </Link>
            </Box>
            <Box sx={{position: "relative"}}>
                <Link to="/shop">
                    <Image src={health} w={['76','72','80']}/>
                    <Text sx={{ backgroundColor:"white", color: "black" ,px:"5",py:"5"}} position={"absolute"} top={["16","20","18","24"]} left={["10","8","20"]} fontSize={{base: "12px", sm: "16px", md: '20px'}}>HEALTH & BEAUTY</Text>
                
                </Link>
            </Box>
            <Box sx={{position: "relative"}}>
                <Link to="/shop">
                    <Image src={fashion} w={['76','72','80']}/>
                    <Text sx={{ backgroundColor:"white", color: "black" ,px:"5",py:"5"}} position={"absolute"} top={["16","20","18","24"]} left={["10","15","20"]} fontSize={{base: "12px", sm: "16px", md: '20px'}}>FASHION</Text>
                
                </Link>
            </Box>
    </Flex>
    
    <Flex direction={['coulumn','column', 'row']} px="3" bg="gray.200" sx={{alignItems:"center", justifyContent:"center", gap:"8",mt:"8"}}>
        <Box sx={{display:"flex", justifyContent:"center",  alignItems:"center", gap:"8"}}>
            <Icon as={BsTruck} boxSize={['4','6','8','10']} color="red.500"/>
            <Box>
                <Text fontSize={{base: "6px", sm: "8px", md: '12px', lg: '16px'}} fontWeight="bold">FREE SHIPPING</Text>
                <Text fontSize={{base: "6px", sm: "8px", md: '12px', lg: '16px'}}>Suffered Alteration in Some Form</Text>
            </Box>
        </Box>
        <Box sx={{display:"flex", alignItems:"center",justifyContent:"center", gap:"8"}}>
            <Icon as={BsCash} boxSize={['4','6','8','10']} color="red.500"/>
            <Box>
                <Text fontSize={{base: "6px", sm: "8px", md: '12px', lg: '16px'}} fontWeight="bold">CASH ON DELIVERY</Text>
                <Text fontSize={{base: "6px", sm: "8px", md: '12px', lg: '16px'}}>The Internet Tend To Repeat</Text>
            </Box>
        </Box>
        <Box sx={{display:"flex", alignItems:"center",justifyContent:"center", gap:"8"}}>
            <Icon as={AiOutlineUndo} boxSize={['4','6','8','10']} color="red.500"/>
            <Box>
                <Text fontSize={{base: "6px", sm: "8px", md: '12px', lg: '16px'}} fontWeight="bold">45 DAYS RETURN</Text>
                <Text fontSize={{base: "6px", sm: "8px", md: '12px', lg: '16px'}}>Making it Look Like Readable</Text>
            </Box>
        </Box>
        <Box sx={{display:"flex", alignItems:"center",justifyContent:"center", gap:"8"}}>
            <Icon as={AiOutlineClockCircle} boxSize={['4','6','8','10']} color="red.500"/>
            <Box>
                <Text fontSize={{base: "6px", sm: "8px", md: '12px', lg: '16px'}} fontWeight="bold">8AM - 9PM</Text>
                <Text fontSize={{base: "6px", sm: "8px", md: '12px', lg: '16px'}}>OPENING ALL WEEK</Text>
            </Box>
        </Box>
    </Flex>

    <Flex mt="12" sx={{alignItems:"center", justifyContent:"center"}} bg="gray.200">
        <Box position="relative">
            <Box position="absolute" sx={{ textAlign:"center"}} left={["20","28","16"]} top={["10","20","20"]}>
            <Text mb={["1","6","12"]} bg="orange.200" fontSize={{base: "16px", sm: "20px", md: '24px', lg: '32px'}}>Deal Of The Week</Text>
             <Flex gap={['1','3',"6"]} mb="3" direction={['column','column','row']}  bg="orange.200">
                                    <Box>
                                        <Text fontSize={{base: "16px", sm: "20px", md: '24px', lg: '32px'}}>{timerDays} :</Text>
                                        <Text fontSize={{base: "16px", sm: "20px", md: '24px', lg: '32px'}}>Days</Text>
                                    </Box>
                                    <Box>
                                        <Text fontSize={{base: "16px", sm: "20px", md: '24px', lg: '32px'}}>{timerHours} :</Text>
                                        <Text fontSize={{base: "16px", sm: "20px", md: '24px', lg: '32px'}}>Hours</Text>
                                    </Box>
                                    <Box>
                                        <Text fontSize={{base: "16px", sm: "20px", md: '24px', lg: '32px'}}>{timerMinutes} :</Text>
                                        <Text fontSize={{base: "16px", sm: "20px", md: '24px', lg: '32px'}}>Minutes</Text>
                                    </Box>
                                    <Box>
                                        <Text fontSize={{base: "16px", sm: "20px", md: '24px', lg: '32px'}}>{timerSeconds} </Text>
                                        <Text fontSize={{base: "16px", sm: "20px", md: '24px', lg: '32px'}}>Seconds</Text>
                                    </Box>
                                </Flex>
            <Link to="/shop">
                <Button bg="black" color="white" size={["base","sm","md"]}>Shop Now</Button>
            </Link>
            </Box>
            <Image src={man}/>
        </Box>
    </Flex>
    
    
    </>
  )
}

export default Categories