import React, { memo } from 'react';
import {Stack, Card, Box,Heading,Text, VStack, HStack, Divider} from '@chakra-ui/react';
import { CgClose } from "react-icons/cg";
import { motion } from "framer-motion"
import { skillPageData } from './MyData';




const SkillsModel = ({setState}) => {


    const fadeInAnimation = {
        hidden: {
            opacity: 0, 
            y: -100,
           
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
       <Stack className="skillsmodel">
            <div className='container'>
                <div className="row">
                    <div className="col-12 col-md-8 m-auto">
                    <motion.div initial="hidden" animate="show" variants={fadeInAnimation}>
                      <Card p={8} bg={"themcolor.400"}>
                        <Box onClick={()=>  setState(false)} position={'absolute'} left={"auto"} right={5} top={5}  cursor={'pointer'} bg={"transparent"} _hover={"transparent"} p={3} >

                         <motion.div animate={{
                                scale: [1, 2, 2, 1, 1],
                                rotate: [0, 0, 270, 270, 0],
                                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                             }}>
                             
                            <CgClose  color='white' fontSize="30"/>
                         </motion.div>
                        
                        </Box>
                    
              
                          <Heading fontSize={"s5"} color={"themcolor.900"} fontWeight={"weight.Medium"} m={0} p={0}>My Skills</Heading>
                             <Divider/>

                                   {skillPageData.map((val,id)=>(
                                      
                                     <div className='row chileresns' key={id}>
                                     {val.skillcard.map((slimodel)=>{
                                        const {id,imgUrl,title} = slimodel;

                                        return(
                                            <div className="col-12 col-md-4 col-lg-4 mt-4" key={id}>
                                            <Stack px={{base : "3", md : "0"}}>
                                            <Card display="flex" alignItems={"center"} justifyContent={"center"} gap={3} bg={"themcolor.200"} textAlign={'center'} p={5} borderRadius={15} border={"1px"} borderColor={"themcolor.border_100"}>
                                            <img src={imgUrl} className='logoIcon' title='language logo' alt="language logo" srcSet="" />
                                            <Text as="h6" m={0} p={0} fontSize={"s1"} fontWeight={"weight.Medium"} color={"white"}>{title}</Text>
                                            </Card>
                                            </Stack>
                                            </div>
                                    )
                                    })}
                                     </div>

                                   ))}
                                
                            
                     

                      </Card>
                      </motion.div>
                   </div>
                </div>
            </div>
        </Stack>
   </>
  )
}

export default memo(SkillsModel);