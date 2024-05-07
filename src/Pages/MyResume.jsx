import React, { memo } from 'react';
import {Box, Stack,Text,Heading,Icon, HStack} from '@chakra-ui/react';
import { ImArrowUpRight } from "react-icons/im";
import ResumeData, {resumeContent} from "./MyData";

const MyResume = ({id}) => {
  return (
    <>
     <Stack id={id} bgColor={'themcolor.300'} py={{base : "14",md : "20"}} px={{base : "3", md : "0"}}>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-2 col-lg-2">
                  <Box display={"flex"} alignItems={"center"} justifyContent={"center"} w={100} h={100} bg={"themcolor.200"} borderRadius={50}>
                    <Text as="h6" m={0} p={0} fontSize={"s10"} fontWeight={"weight.Medium"} color={"themcolor.100"}>Vp</Text>
                  </Box>
                </div>
           
                <div className="col-12 col-md-10 col-lg-10">
               
                   {resumeContent.map((val)=>{
                    const {id, subtitle, title1, title2,title3} = val;
                     return(
                        <Stack gap={2} px={{base : "3", md : "0"}} key={id}>

                        <Text as="span" color={'themcolor.800'} pt={{base:"4", md : "0"}} fontSize={'s2'} fontWeight={'weight.Medium'}>{subtitle}</Text>


                        <Stack gap={6}>

                        <Heading as="h1" color={'white'} fontSize={{base : "s12", md : "s7"}} fontWeight={'weight.Medium'} mb={4} p={0}>
                        <Text as="span">{title1} <span style={{color : "#C9F31D"}}>{title2}</span></Text>
                        <Text m={0} p={0}>{title3}</Text>
                        </Heading>

                        <Stack>
                        <Box borderRadius={18} bgColor={"themcolor.200"} p={{base : "3", md : "10"}}>
                        <div className="row position-relative">
                            <div className="dividers"></div>
                        {/* Start column*/}
                         {ResumeData.map((items)=>{
                            const {id,year,design,companyname} = items;
                            return(
                               
                                <div className="col-12 col-md-6 col-lg-6 pblast" key={id}>
                                <div className="row">
                                <div className="col-12">
                                <HStack gap={5} _hover={{bgColor : "themcolor.100",}} p={3}>
                                <Box w={50} h={50} borderRadius={50} display={"flex"} alignItems={"center"} bgColor={"themcolor.400"} justifyContent={"center"} mb={{base: "4", md : "0"}}>
                                <Icon as={ImArrowUpRight} fontSize={"s3"} color={"themcolor.500"}></Icon>
                                </Box>
                                <Box display={"flex"} gap={2} flexDir={"column"} alignItems={"baseline"}>
                                <Text as="span" fontSize={"s1"} fontWeight={"weight.Medium"} color={"themcolor.600"}>{year}</Text>
                                <Text as="h6" m={0} p={0} fontWeight={"weight.Medium"} color={"themcolor.900"} fontSize={"s3"}>{design}</Text>
                                <Text as="h6" m={0} p={0} fontWeight={"weight.Medium"} color={"themcolor.900"} fontSize={"s0"}>{companyname}</Text>
                                </Box>
                                </HStack>
                                </div>
                                </div>
                                </div>
                            )
                         })}



                         </div>
                        </Box>
                        </Stack>

                        </Stack>
                        </Stack>
                     )
                   })}


              
                </div>
            </div>
        </div>
       </Stack>
    </>
  )
}

export default memo(MyResume);