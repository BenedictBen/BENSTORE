import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import slider1 from '../assets/images/img1.jpg'
import slider2 from '../assets/images/img2.jpg'
import slider3 from '../assets/images/img3.jpg'
import { Autoplay, Pagination, Navigation } from "swiper";
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Slide = () => {
  return (
    <Box>
        <Swiper
               spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Box>
                        <Box sx={{position: "relative"}}>
                            <Box sx={{position: "absolute", pl:"20"}} top={["1","3","12"]}>
                                <Text fontSize={{base: "12px", sm: "16px", md: '20px'}}>SPRING / SUMMER COLLECTION 2023</Text>
                                <Text mb="5" fontSize={{base: "12px", sm: "20px", md: '36px', lg: '56px'}}>Get up to 30% Off New Arrivals</Text>
                               <Link to="/shop">
                    
                                    <Button sx={{position: "absolute"}} size={["base","sm","md"]}  variant='solid' colorScheme='red'>SHOP NOW</Button>
                                </Link>
                            </Box>
                            
                        <img
                        className="object-fill w-full h-96"
                        src={slider1}
                        alt="image slide 1"
                    />
                        </Box>


                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box>
                        <Box sx={{position: "relative"}}>
                            <Box sx={{position: "absolute", pl:"20"}} top={["1","3","12"]}>
                                <Text fontSize={{base: "12px", sm: "16px", md: '20px'}}>SPRING / SUMMER COLLECTION 2023</Text>
                                <Text mb="5" fontSize={{base: "12px", sm: "20px", md: '36px', lg: '56px'}}>Get up to 30% Off New Arrivals</Text>
                                <Link to="/shop">
                    
                                    <Button sx={{position: "absolute"}}  variant='solid' colorScheme='red' size={["base","sm","md"]}>SHOP NOW</Button>
                                </Link>
                            </Box>
                            
                        <img
                        className="object-fill w-full h-96"
                        src={slider2}
                        alt="image slide 2"
                    />
                        </Box>


                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box >
                        <Box sx={{position: "relative"}}>
                            <Box sx={{position: "absolute", pl:"20"}} top={["1","3","12"]}>
                                <Text fontSize={{base: "12px", sm: "16px", md: '20px'}}>SPRING / SUMMER COLLECTION 2023</Text>
                                <Text mb="5" fontSize={{base: "12px", sm: "20px", md: '36px', lg: '56px'}}>Get up to 30% Off New Arrivals</Text>
                                <Link to="/shop">
                    
                                    <Button sx={{position: "absolute"}}  variant='solid' colorScheme='red' size={["base","sm","md"]}>SHOP NOW</Button>
                                </Link>
                            </Box>
                            
                    <img
                        className="object-fill w-full h-96"
                        src={slider3}
                        alt="image slide 3"
                    />
                        </Box>


                    </Box>
                </SwiperSlide>
                
            </Swiper>
    </Box>
  )
}

export default Slide