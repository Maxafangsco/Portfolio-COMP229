import {Box, Button, Image, Text, useBoolean, useMediaQuery  } from "@mui/material";
import { Link } from "react-router-dom";

import React from "react";

const DegreeCard = (logoProps) => {

  const [isLessThan600] = useMediaQuery("(max-width: 600px)");

  return (
    <>
      <Box display="flex" justifyContent="center" my={25}>
        <Box display="flex" w="75%" flexDirection={isLessThan600 ? 'column' : 'row'}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            m={5}
          >
            <Box
              borderRadius="50%"
              boxShadow="5px 5px 5px #d9dbdf"
              border="1px solid #d9dbdf"
              height={200}
              width={200}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                borderRadius="full"
                boxSize="150px"
                src={ub.url}
                alt="UB Logo"
              />
           
            </Box>
          </Box>
          <Box
            flex={3}
            borderX="1px solid #d9dbdf"
            boxShadow="5px 5px 5px #d9dbdf"
            borderRadius="7px"
            p="12px"
            // backgroundColor="rgba(5, 80, 130, 0.467)"
          >
            <Box
              display="flex"
              backgroundColor="rgba(14, 107, 168, 0.467)"
              width="100%"
            >
              <Box>
                <Box>
                  <Text
                    fontSize={isLessThan600 ? 18: 32}
                    fontWeight={600}
                    textAlign="center"
                    backgroundColor="rgba(14, 107, 168, 0.467)"
                  >
                    {ub.school}
                  </Text>
                  <Text
                    fontSize={isLessThan600 ? 18: 25}
                    fontWeight={400}
                    backgroundColor="rgba(14, 107, 168, 0.467)"
                  >
                    {ub.degree}
               
                  </Text>
                </Box>
              </Box>
              <Box display="flex" justifyContent="flex-end">
                <Box
                  backgroundColor="rgba(14, 107, 168, 0.467)"
                  p={5}
                  fontSize={18}
                >
                  {ub.date}
                </Box>
              </Box>
            </Box>
            <Text fontSize={18} my={2}>
             {ub.content}
            </Text>
            <Box display="flex" justifyContent="flex-end" p={2}>
            <Link href={ub.link} passHref={true} target="_blank">
              <Button colorScheme="teal" variant="solid">
                view
              </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DegreeCard;