import {Box,  useMediaQuery  } from "@mui/material";
import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const data = [
  {
   
    id: 1,
    name: "Google Africa Developer Training Program",
    color: "green.300",
    logo: "/gads.png",
    author: "Andela Certificate",
    url: "https://adscerts.com/scholar/CF2BF01D90989F6"
  },
  {
    id: 2,
    name: "Visual Elements of User Interface Design",
    color: "teal.300",
    logo: "/calarts.png",
    author: "Maxmillian Afanga",
    url: 'https://www.coursera.org/account/accomplishments/verify/GQZSFFEB6X2C?utm_source=ln&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'
  },
  {
    id: 3,
    name: "AWS Solutions Architect Associate SAA-C03 ",
    color: "teal.300",
    logo: "/aws_solution_architect.png",
    author: "Maxmillian Afanga",
    url: ' https://www.udemy.com/certificate/UC-6d072266-abbe-4750-a4ae-7e3fda154cc9/'
  },
  // {
  //   id: 4,
  //   name: "php ",
  //   color: "teal.300",
  //   logo: "/sololearn.png",
  //   author: "Maxmillian Afanga",
  //   url: ''
  // },
];

const CertificateCard = () => {
  const [isLessThan600] = useMediaQuery("(max-width: 600px)");

  const handleCardClick = (string) => {
    window.open(url, "_blank");
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
    >
      {data.map((data) => (
        <Box
          key={data.id}
          justifyContent="center"
          border="1px solid #d9dbdf"
          boxShadow="5px 5px 5px #d9dbdf"
          borderRadius="5px"
          mx={25}
          my={25}
          width={isLessThan600 ? "90%" : "25%"}
          onClick={() => handleCardClick(data.url)}
          style={{ cursor: "pointer" }}
        >
          <Box
            display="flex"
            bg={data.color}
            width="100%"
            height={250}
            alignItems="center"
            justifyContent="center"
            className={styles.cardHover}
          >
            <Image
              src={data.logo}
              alt={data.name}
              width={isLessThan600 ? 200 : 200}
              height={isLessThan600 ? 200 : 200}
            />
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            {data.name}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default CertificateCard;