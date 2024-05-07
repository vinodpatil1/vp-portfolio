import React, { memo } from 'react';
import {Stack,Text,Box, Flex} from '@chakra-ui/react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";


const Footer = () => {

  const year = new Date().getFullYear();




  return (
   <>
  <Stack bgColor={'themcolor.300'} py={{base : "10",md : "8"}} px={{base : "3", md : "0"}}>
        <div className="container">
           <div className="row d-flex align-items-center">
             <div className="col-12 col-md-6 col-lg-6">
                <Text as="p" m={0} pb={{base : "4", md : "0"}} fontSize={"s1"} fontWeight={"weight.Regular"} color={"themcolor.600"}>Copyright @{year}, Vinod Patil. All Rights Reserved</Text>
             </div>
             <div className="col-12 col-md-6 col-lg-6">
               <Flex gap={5} justifyContent={{base : "flex-start", md : "flex-end"}}>
                 <Box bg={"themcolor.700"} _hover={{bg : "themcolor.100", cursor : "pointer"}} borderRadius={50} p={1} fontSize={"s3"}>
                    <FaFacebookF/>
                  </Box>
                  <Box bg={"themcolor.700"} _hover={{bg : "themcolor.100", cursor : "pointer"}} borderRadius={50} p={1} fontSize={"s3"}>
                  <FaTwitter/>
                  </Box>
                  <Box bg={"themcolor.700"} _hover={{bg : "themcolor.100", cursor : "pointer"}} borderRadius={50} p={1} fontSize={"s3"}>
                 
                  <a href='https://www.linkedin.com/home' target='_blank'><FaLinkedinIn/></a>
                 
                  </Box>
                  <Box bg={"themcolor.700"} _hover={{bg : "themcolor.100", cursor : "pointer"}} borderRadius={50} p={1} fontSize={"s3"}>
                  <FiGithub/>
                  </Box>
               </Flex>
             </div>
           </div>
         </div>
        
     </Stack>
   </>
  )
}

export default Footer