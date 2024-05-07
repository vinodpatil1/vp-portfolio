import { Text , Stack, Heading, VStack, Box } from '@chakra-ui/react';
import React, { memo} from 'react'
import Button from '../ReuseableComponent/Button';
import { IoIosArrowForward } from "react-icons/io";
import vinodImage from "../../public/images/vinodpatil.png";
import {motion} from "framer-motion";
import {heropageData} from "../Pages/MyData";




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

const Hero = ({type,text,variant,icons,id}) => {


  return (
        <>
          <Stack id={id} bgColor={'themcolor.300'} minH='80vh' py='16'>
            <div className="container">
             

             {heropageData.map((hero)=>{
                const {id,subtitle,name,design,content} = hero;

               return (

                <div className="row" key={id}>
                    <div className="col-12 col-md-4 col-lg-4 d-flex align-items-center justify-content-center">

                        <Stack gap={0} px={{base : "3", md : "0"}}>
                         <motion.div initial="hidden" animate="show" variants={fadeInAnimation}>

                        <motion.div variants={fadeInAnimation}>
                            <Text as="span" color={'themcolor.500'} fontSize={'s5'} fontWeight={'weight.Medium'}>{subtitle}</Text>
                        </motion.div>
                        
                    <Stack gap={6}>
                        <Heading as="h1" color={'white'} fontSize={{base : "s12", md : "s8"}} fontWeight={'weight.Medium'} m={0} p={0}>
                         <motion.div variants={fadeInAnimation}>
                           <Text as="span" color={'themcolor.100'}>{name}</Text>
                          </motion.div>
                        
                        <motion.div variants={fadeInAnimation}>
                           <Text m={0} p={0}>{design}</Text>
                         </motion.div>
                        </Heading>

                       <motion.div variants={fadeInAnimation}>
                        <Text as="p" m={0} p={0} color={'themcolor.600'} fontSize={{base : "s2", md : "s1"}} fontWeight={'weight.Regular'}>{content}</Text>
                        </motion.div>

                       <motion.div variants={fadeInAnimation}>
                       <VStack flexDir={'row'}>
                            <Stack flexDir={{base : "column", md : "row"}} gap={8} alignItems={{base : "start", md : "center"}}>
                            <Button text="Hire Me" types={'btn'} icons={<IoIosArrowForward />}  variant='primary' />

                                <a className='resumelink'  href="resume/ResumeOfficial.pdf" download = "ResumeOfficial.pdf">
                                Download Resume
                                </a>
                    
                            </Stack>
                       </VStack>
                       </motion.div>
                    </Stack>
                   </motion.div>

                        </Stack>
                     </div>
                    <div className="col-12 col-md-5 col-lg-5">
                       <img src={vinodImage} alt="vinod patil portfolio" srcSet="" />
                    </div>
                    <div className="col-12 col-md-3 col-lg-3 d-flex align-items-center justify-content-center">
                        <Box w={"100%"} m={0} borderRadius={31} p={{base : "5", md : "12"}} bg={'themcolor.400'}>
                            <VStack>
                                <Stack gap={8} >
                                   {hero.experience.map(({id,exptitle,exptext})=>(
                                      
                                        <Stack key={id} gap={3}> 
                                                <Heading as="h2" m={0} p={0} fontSize={"s8"} color={"themcolor.100"} fontWeight={'weight.SemiBold'}>{exptitle}</Heading>
                                                <Text as="h6" m={0} p={0} fontSize={"s1"} fontWeight={'weight.Medium'} color={"themcolor.700"}>{exptext}</Text>
                                           </Stack>
                                        ))}
                              
                                </Stack>
                            </VStack>    
                        </Box>
                    </div>
                </div>


               )

             })}

            </div>

  
          </Stack>
        </>
  )
}

export default memo(Hero);