import React from "react";
import { Flex, Image } from "@chakra-ui/core";
import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"      
      {...props}
    >
      <Flex align="center" mr={5}>
        <Link to="/"><Image src="https://assets.projectcongress.com/logo.png" w="150px" /></Link>
      </Flex>
    </Flex>
  );
};

export default Header;