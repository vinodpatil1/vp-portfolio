import React, { memo } from 'react';
import {Stack,Text,Heading, Box, HStack} from '@chakra-ui/react';
import {workPageData} from "../Pages/MyData";
import { motion } from "framer-motion";
import { ImArrowUpRight } from "react-icons/im";


const Works = ({id}) => {


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

  return (
   <>
       <Stack id={id} bgColor={'themcolor.300'} py={{base : "14",md : "20"}} px={{base : "3", md : "0"}}>
        <div className="container">
        
            {workPageData.map((worksItems)=>{
                      const {id,subtitle,title1,title2} = worksItems;
                      return(
                         
                         <div className="wrapper d-flex gap-5 flex-column" key={id}>
                         <div className="row">
                          <div className="col-12 col-md-8 m-auto">
                          
                             <motion.div initial="hidden" animate="show" variants={fadeInAnimation}>

                              <Stack gap={2} textAlign={{base : "left", md : "center"}} px={{base : "3", md : "0"}} key={id}>

                              <motion.div variants={fadeInAnimation}>
                                <Text as="span" color={'themcolor.800'} fontSize={'s2'} fontWeight={'weight.Medium'}>{subtitle}</Text>
                             </motion.div>

                              <Stack gap={6}>
                              <motion.div variants={fadeInAnimation}>
                              <Heading as="h1" color={'white'} fontSize={{base : "s12", md : "s7"}} fontWeight={'weight.Medium'} m={0} p={0} pr={{base : "0", md : "5"}}>
                              <Text as="span">{title1} <span style={{color : "#C9F31D"}} >{title2}</span></Text>
                              </Heading>
                              </motion.div>
                               
                            
                              <Box>
                         
                              </Box>

                              
                             </Stack>
                              </Stack>
                              </motion.div>
                           </div>

                          </div>

                             {worksItems.projects.map((proj)=>{
                                const {id,imgUrl,subtitles,protitle,content} = proj;

                                 return (
                                    <div className="row mb-3" key={id}>
                                        <div className="col-12 col-md-4">
                                       <motion.div animate={{scale: [1, 0, 0, 1, 1],borderRadius: ["20%", "20%", "50%", "50%", "20%"],}}>
                                        <img src={imgUrl} alt="app prototype" srcSet="" />
                                        </motion.div>
                                        </div>
                                        <div className="col-12 col-md-8">
                                         <motion.div initial="hidden" animate="show" variants={fadeInAnimation}>
                                           <Stack role="group" gap={6}  _hover={{cursor: "pointer"}} pl={{base : "0", md : "14"}}>
                                             <motion.div variants={fadeInAnimation}>
                                             <Text as={"p"} m={0} pt={{base : "8", md : "0"}} color={'themcolor.100'} fontSize={'s1'} fontWeight={'weight.Medium'}>{subtitles}</Text>
                                             </motion.div>

                                             <motion.div variants={fadeInAnimation}>
                                              <Heading m={0} p={0} color={'themcolor.900'} fontSize={{base : "s12",md : "s8"}} fontWeight={'weight.Medium'}>{protitle}</Heading>
                                              </motion.div>
                                              <motion.div variants={fadeInAnimation}>
                                              <Text as={"p"} m={0} p={0} color={'themcolor.600'} fontSize={'s1'} fontWeight={'weight.Medium'}>{content}</Text>
                                              </motion.div>

                                             <HStack>

                                             <Box>
                                                 <Box display={"flex"} alignItems={"center"} justifyContent={"center"} w={50} h={50} border={"2px"} borderColor={"themcolor.500"} bg={"themcolor.200"} borderRadius={50} _groupHover={{bg : "themcolor.100",cursor: "pointer"}}>
                                                    <Text m={0} p={0} fontSize={"s1"} fontWeight={"weight.Medium"} color={"themcolor.600"} _groupHover={{color : "themcolor.400"}}>
                                                     <ImArrowUpRight/>
                                                    </Text>
                                                 </Box>
                                             </Box>
 
                                             </HStack>
                                           </Stack>
                                           </motion.div>
                                        </div>
                                    </div>
                                 )
                             })}

                         </div>
                            
                   )
              })}

         </div>
        
       </Stack>

   </>
  )
}

export default memo(Works);