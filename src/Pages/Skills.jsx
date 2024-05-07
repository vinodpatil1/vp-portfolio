import React, { memo, useCallback, useState } from 'react';
import {Stack,Text,Heading, Box, Card} from '@chakra-ui/react';
import Button from '../ReuseableComponent/Button';
import {skillPageData} from "../Pages/MyData";
import SkillsModel from './SkillsModel';
import { motion } from "framer-motion";



const Skills = ({type,text,variant,icons,id}) => {

const [state, setState] = useState(false);
const skillsModel = useCallback(()=>(
   setState(!state)
  ),[state])



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
       <Stack id={id} bgColor={'themcolor.400'} py={{base : "14",md : "20"}} px={{base : "3", md : "0"}}>
        <div className="container">
        
            {skillPageData.map((skill)=>{
                      const {id,subtitle,title1,title2,content} = skill;
                      return(
                          <div className="row" key={id}>
                          <div className="col-12 col-md-7 col-lg-7">

                            <motion.div initial="hidden" animate="show" variants={fadeInAnimation}>

                              <Stack gap={2} px={{base : "3", md : "0"}} key={id}>

                              <motion.div variants={fadeInAnimation}>
                                <Text as="span" color={'themcolor.800'} fontSize={'s2'} fontWeight={'weight.Medium'}>{subtitle}</Text>
                             </motion.div>

                              <Stack gap={6}>
                              <motion.div variants={fadeInAnimation}>
                              <Heading as="h1" color={'white'} fontSize={{base : "s12", md : "s7"}} fontWeight={'weight.Medium'} m={0} p={0} pr={{base : "0", md : "5"}}>
                              <Text as="span">{title1}<span style={{color : "#C9F31D"}} >{title2}</span></Text>
                              </Heading>
                              </motion.div>
                               
                              <motion.div variants={fadeInAnimation}> 
                              <Text as="p" m={0} p={0} pr={{base : "0", md : "5"}} color={'themcolor.600'} fontSize={{base : "s2", md : "s1"}} fontWeight={'weight.Regular'} >
                              {content}
                              </Text>
                              </motion.div>
                              <Box>
                              <motion.div variants={fadeInAnimation}> 
                              <Button onclick={skillsModel} types="btn" variant="primary" text="Learn More"/>
                                </motion.div>
                              </Box>

                              
                             </Stack>
                              </Stack>
                              </motion.div>
                           </div>

                            <div className="col col-md-5 col-lg-5">
                            <div className="row parents">
                        
                            {skill.skillcard.map((items)=>{
                              const {id,imgUrl,title} = items;

                              return(
                                <div className="col-12 col-md-4 col-lg-4 mt-4" key={id}>
                                  <Stack px={{base : "3", md : "0"}}>
                                      <motion.div initial="hidden" animate="show" variants={fadeInAnimation}>
                                      <Card display="flex" alignItems={"center"} justifyContent={"center"} gap={3} bg={"themcolor.200"} textAlign={'center'} p={5} borderRadius={15} border={"1px"} borderColor={"themcolor.border_100"}>
                                      <img src={imgUrl} className='logoIcon' title='language logo' alt="language logo" srcSet="" />
                                      <Text as="h6" m={0} p={0} fontSize={"s1"} fontWeight={"weight.Medium"} color={"white"}>{title}</Text>
                                      </Card>
                                      </motion.div>
                                  </Stack>
                                </div>
                              )
                            })}

                            </div>
                            </div>
                           
                          </div>
                        
                      )
              })}

         </div>
        
       </Stack>

       {/*Model custom*/}
       {state?  (<SkillsModel setState={setState}/>) : "" }


    </>
  )
}

export default  memo(Skills);