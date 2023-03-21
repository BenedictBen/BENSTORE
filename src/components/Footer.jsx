import { Box, Link , Icon, Stack, Flex} from '@chakra-ui/react';
import React from 'react'
import { BsFacebook,BsTwitter,BsInstagram, BsPinterest} from "react-icons/bs";


const Footer = () => {
    const icons = [
        {icon: BsFacebook},
        {icon: BsTwitter},
        {icon: BsInstagram},
        {icon: BsPinterest},
    ]
  return (
    <Stack mt="12" mb="2" sx={{display:"flex", alignItems:"center", justifyContent:"center", gap:"6"}}>
        <Flex gap="6">

            <Link>Blog</Link>
            <Link>FAQs</Link>
            <Link>Contact us</Link>
        </Flex>
        <Flex gap="6" >
            {icons.map((show, k) => (
                <Icon as={show.icon} boxSize={5}/>
                
            ))}
        </Flex>
    </Stack>
  )
}

export default Footer