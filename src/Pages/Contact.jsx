import React, { memo,useRef } from 'react';
import {Stack,Text,Heading, Box,List,ListItem,ListIcon,HStack,FormControl,
FormLabel,Input,
Textarea} from '@chakra-ui/react';
import {contactPageData} from "../Pages/MyData";
import { motion } from "framer-motion";
 import Button from '../ReuseableComponent/Button';
import { FaCheck } from "react-icons/fa6";

import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = ({type,text,variant,icons,id}) => {


  {/*Email js*/}



  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6o2r1nj', 'template_ih4nat6', form.current, {
        publicKey: '6IGNvlTBej96-iTDQ',
      })
      .then(
        () => {
          toast.success("Message Sent Successfully");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

    }


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
     <ToastContainer />
      <Stack id={id} bgColor={'themcolor.400'} py={{base : "14",md : "20"}} px={{base : "3", md : "0"}}>
        <div className="container">
        
            {contactPageData.map((contdata)=>{
                      const {id,subtitle,professional,content} = contdata;
                      return(
                          <div className="row" key={id}>
                          <div className="col-12 col-md-5 col-lg-5">

                            <motion.div initial="hidden" animate="show" variants={fadeInAnimation}>

                              <Stack gap={2} px={{base : "0", md : "0"}} key={id}>

                              <motion.div variants={fadeInAnimation}>
                                <Text as="span" color={'themcolor.800'} fontSize={'s2'} fontWeight={'weight.Medium'}>{subtitle}</Text>
                             </motion.div>

                              <Stack gap={6}>
                              <motion.div variants={fadeInAnimation}>
                              <Heading as="h1" color={'white'} fontSize={{base : "s12", md : "s7"}} fontWeight={'weight.Medium'} m={0} p={0} pr={{base : "0", md : "5"}}>
                              <Text as="span">{professional}</Text>
                              </Heading>
                              </motion.div>
                               
                              <motion.div variants={fadeInAnimation}> 
                              <Text as="p" m={0} p={0} pr={{base : "0", md : "5"}} color={'themcolor.600'} fontSize={{base : "s2", md : "s1"}} fontWeight={'weight.Regular'}>
                              {content}
                              </Text>
                              </motion.div>
                              <Box my={{base : "8", md : "0"}}>
                            

                              {contdata.listItems.map((list,index)=>{

                               return(
                                    <List spacing={3}  mt={{base : "0", md : "5"}} p={0} key={index}>
                                    <motion.div variants={fadeInAnimation}>
                                    <ListItem>
                                    <HStack gap={5}>
                                    <Box w={10} h={10} textAlign={"center"} display={"flex"} alignItems={"center"} justifyContent={"center"} bg={"themcolor.100"} borderRadius={50}>
                                    <ListIcon as={FaCheck} color='themcolor.400' m={0} p={0} /></Box>
                                    <Box w={300}>
                                    <Text as="h6" m={0} p={0} fontSize={"s1"} fontWeight={"weight.Medium"} color={"themcolor.700"}>{list}</Text>
                                    </Box>
                                    </HStack>
                                    </ListItem>
                                    </motion.div>
                                    </List>
                                )
                                       
                            })}

                              </Box>
                             </Stack>
                              </Stack>
                              </motion.div>
                           </div>

                            <div className="col-12 col-md-7 col-lg-7">

                            <form ref={form} onSubmit={sendEmail}>
                            <div className="row">

                              <div className="col-12 col-md-6 mb-4">
                                <FormLabel color={"themcolor.600"} fontSize={"s1"}>User  Name</FormLabel>
                                <Input color={"themcolor.600"} bg={"themcolor.1000"} p={5} borderColor={"themcolor.800"} type='text' name="user_name" />
                              </div>
                              <div className="col-12 col-md-6 mb-4">
                                <FormLabel color={"themcolor.600"} fontSize={"s1"}>Email Address</FormLabel>
                                <Input color={"themcolor.600"} bg={"themcolor.1000"} p={5} borderColor={"themcolor.800"} type="email" name="user_email" />
                              </div>

                              <div className="col-12 col-md-12 mb-4">
                                <FormLabel color={"themcolor.600"} fontSize={"s1"}>Message</FormLabel>
                                <Textarea color={"themcolor.600"} rows="7" bg={"themcolor.1000"} p={5} borderColor={"themcolor.800"} type='text' name="message" />
                              </div>

                                  <motion.div variants={fadeInAnimation}> 
                                    <Button type="submit" types="btn" variant="primary" text="Send Message"/>
                                  </motion.div>
             
                            </div>
                            </form>
                            </div>

                          </div>
                        
                      )
              })}

         </div>
        
            </Stack>
   </>
  )
}

export default memo(Contact);