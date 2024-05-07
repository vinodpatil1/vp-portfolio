import { 
    Stack, Text,Heading,List,
    ListItem,
    ListIcon,
    Box,
    Icon,} from '@chakra-ui/react';

import { IoCheckmark } from "react-icons/io5";
import { IoMailSharp } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import React, { memo } from 'react';
// import aboutData from "../Pages/AboutData";
import { motion } from "framer-motion";

import {aboutPageData} from './MyData';

const fadeInAnimation = {
    hidden: {
        opacity: 0, 
        y: 100 
    },
    show : {
        opacity: 1, 
        y: 0,
        transition : {
            staggerChildren : 0.5,
            duration: 2,  
        }
    }
}


const About = ({id}) => {
  return (
    <>

<div id={id}>
   {aboutPageData.map((val)=> {
     const {id,subtitle,professional,problem,digital,content,imgUrl,emailTag,phoneTag,email,phone,experience} = val;

    return(
       <Stack bgColor={'themcolor.400'} py={{base : "14",md : "20"}}  key={id}>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-8 col-lg-8">

                <motion.div initial="hidden" animate="show" variants={fadeInAnimation}>
                   <Stack gap={2} px={{base : "3", md : "0"}}>

                   <motion.div variants={fadeInAnimation}>
                   <Text as="span" color={'themcolor.800'} fontSize={'s2'} fontWeight={'weight.Medium'}>{subtitle}</Text>
                   </motion.div>

                   <Stack gap={6}>
                        <motion.div variants={fadeInAnimation}>
                        <Heading as="h1" color={'white'} fontSize={{base : "s8", md : "s7"}} fontWeight={'weight.Medium'} m={0} p={0}>
                         <Text as="span">{professional} <span style={{color : "#C9F31D"}}>{problem}</span></Text>
                          <Text m={0} p={0}>{digital}</Text>
                        </Heading>
                        </motion.div>
                          
                          <motion.div variants={fadeInAnimation}>
                          <Text as="p" m={0} p={0} color={'themcolor.600'} fontSize={{base : "s2", md : "s1"}} fontWeight={'weight.Regular'}>
                          {content}
                          </Text>
                          </motion.div>
                   
                      <Stack>
                            <List spacing={3} m={0} p={0}>
                              <div className='row'>
                              {val.language.map((langItem,ind)=> (
                                <div className="col-12 col-md-6 col-lg-6" key={ind}>
                                <Stack py={2}>
                                    <ListItem>
                                    <ListIcon as={IoCheckmark } fontSize={"s2"} color='themcolor.100' />
                                    <Text as="span" fontSize={"s1"} fontWeight={"weight.Medium"} color='themcolor.900'>{langItem}</Text>
                                    </ListItem>
                                </Stack>
                                </div>
                              ))}
                              </div> 
                            </List>
                      </Stack>


                       <Stack>
                         <Box w={{base : "100%", md : "95%"}} borderRadius={18} border={"2px"} borderColor={"themcolor.border_100"}  bgColor={"themcolor.200"} p={7}>
                           <div className="row">
                              <div className="col-12 col-md-6 col-lg-6 d-flex gap-3">
                              <Box  w={50} h={50} borderRadius={50} display={"flex"} alignItems={"center"} bgColor={"themcolor.100"} justifyContent={"center"} mb={{base: "8", md : "0"}}>
                                 <Icon as={IoMailSharp} fontSize={"s3"} color={"themcolor.400"}></Icon>
                              </Box>
                              <Box w={100} display={"flex"} flexDir={"column"} alignItems={"baseline"}>
                                 <Text as="span" color={"themcolor.600"}>{emailTag}</Text>
                                 <Text w={{base : "200px", md : "100"}} as="h6" m={0} p={0} color={"themcolor.900"} fontSize={"s2"}>{email}</Text>
                              </Box>
                              </div>
                              <div className="col-12 col-md-6 col-lg-6 d-flex gap-3 pale">
                              <Box w={50} h={50} borderRadius={50} display={"flex"} alignItems={"center"} bgColor={"themcolor.100"} justifyContent={"center"}>
                                 <Icon as={FaPhoneVolume} fontSize={"s3"} color={"themcolor.400"}></Icon>
                              </Box>
                              <Box display={"flex"} flexDir={"column"} alignItems={"baseline"}>
                                 <Text as="span" color={"themcolor.600"}>{phoneTag}</Text>
                                 <Text as="h6" m={0} p={0} color={"themcolor.900"} fontSize={"s2"}>{phone}</Text>
                              </Box>
                              </div>
                           </div>
                           
                         </Box>
                       </Stack>



                      </Stack>
                    </Stack>
                </motion.div>
                </div>

                <div className="col-12 col-md-4 col-lg-4">
                   <img src={imgUrl} alt="Vinod patil" title='vinod patil' srcSet="" />
                     <Box w={{base : "100%", md : "70%"}} m={'auto'} borderRadius={50} p={[1,2]} display={"flex"} alignItems={"center"} justifyContent={"center"} bgColor={"themcolor.900"}>
                          <Text m={0} p={0} fontSize={'s1'} fontWeight={"weight.Regular"}>{experience}</Text>
                       </Box>
               </div>
            </div>
        </div>
       </Stack>
    
     )

   })}

</div>
    </>
  )
}

export default memo(About);