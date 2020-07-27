import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { ThemeProvider, CSSReset, theme, Text, Stack, Box, Flex, List, ListItem } from "@chakra-ui/core";

function TOS() {
  return (
    <Box p={10}>
      <Flex justify="center">
        <Box w={['100%', null, '50%']}>
          <Stack spacing={5} textAlign="left">
          <Text fontSize="xl" fontWeight="bold" textAlign="center">Barrick Apps LLC Terms of Service</Text>
          <Text fontWeight="medium">1. Terms</Text>
          <Text>By accessing the website, or any subdomain of, <a style={{textDecoration:"underline"}} href="http://projectcongress.com">http://projectcongress.com</a>, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.</Text>
          <Text fontWeight="medium">2. Use License</Text>
          <List as="ol" styleType="lower-latin">
            <ListItem>Permission is granted to temporarily download one copy of the materials (information or software) on Barrick Apps LLC's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              <List ml={10} as="ol" styleType="lower-roman">
                <ListItem>modify or copy the materials;</ListItem>
                <ListItem>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</ListItem>
                <ListItem>attempt to decompile or reverse engineer any software contained on Barrick Apps LLC's website;</ListItem>
                <ListItem>remove any copyright or other proprietary notations from the materials; or</ListItem>
                <ListItem>transfer the materials to another person or "mirror" the materials on any other server.</ListItem>
              </List>
            </ListItem>
            <ListItem>This license shall automatically terminate if you violate any of these restrictions and may be terminated by Barrick Apps LLC at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</ListItem>
          </List>
          <Text fontWeight="medium">3. Disclaimer</Text>
          <List as="ol" type="a">
            <ListItem>The materials on Barrick Apps LLC's website are provided on an 'as is' basis. Barrick Apps LLC makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</ListItem>
            <ListItem>Further, Barrick Apps LLC does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</ListItem>
          </List>
          <Text fontWeight="medium">4. Limitations</Text>
          <Text>In no event shall Barrick Apps LLC or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Barrick Apps LLC's website, even if Barrick Apps LLC or a Barrick Apps LLC authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</Text>
          <Text fontWeight="medium">5. Accuracy of materials</Text>
          <Text>The materials appearing on Barrick Apps LLC's website could include technical, typographical, or photographic errors. Barrick Apps LLC does not warrant that any of the materials on its website are accurate, complete or current. Barrick Apps LLC may make changes to the materials contained on its website at any time without notice. However Barrick Apps LLC does not make any commitment to update the materials.</Text>
          <Text fontWeight="medium">6. Links</Text>
          <Text>Barrick Apps LLC has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Barrick Apps LLC of the site. Use of any such linked website is at the user's own risk.</Text>
          <Text fontWeight="medium">7. Modifications</Text>
          <Text>Barrick Apps LLC may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</Text>
          <Text fontWeight="medium">8. Governing Law</Text>
          <Text>These terms and conditions are governed by and construed in accordance with the laws of Delaware and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</Text>
          </Stack>
        </Box>
      </Flex>
    </Box>      
  );
}

export default TOS;
