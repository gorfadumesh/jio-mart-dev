import React from 'react';
import {
  Box,
  Button,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  VStack,
  Radio,
  RadioGroup,
  Stack,
  Divider,
  AbsoluteCenter,Image
} from '@chakra-ui/react';
import PhonePay from "../../Resources/PhonePay.png"
import GooglePay from "../../Resources/GooglePay.png"
import Paytm from "../../Resources/Paytm.png"

const PaymentScreen = () => {
  return (
    <Box p={2} maxW="500px" mx="auto" borderWidth="1px" >
      <Heading size="md" mb={4}>
        Select Payment Method
      </Heading>
      <Text color="#027baf" mb={4} background={"#027baf40"} padding={"7px"} >
        Pay online & get EXTRA ₹25 off
      </Text>
      <Box position="relative" py={5}>
        <Divider />
        <AbsoluteCenter bg="white" px="4" textTransform={"uppercase"} fontSize={"14px"} >
          Pay Online
        </AbsoluteCenter>
      </Box>
      <Accordion allowToggle defaultIndex={[0]}>
        <AccordionItem borderTop={"none"} padding={"10px 0"}>
          <AccordionButton>
            <Box flex="1" textAlign="left" fontSize={"12px"}>
              UPI (GPay/PhonePe/Paytm)
            </Box>
            <Text fontSize="10px" color="green.500" mr={4}>
              Offers Available
            </Text>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} _active={true} >
            <RadioGroup defaultValue="googlePay">
              <Stack direction="column">
              <Box>
            <RadioGroup value="1" >

              <Box display={"flex"} alignItems={"center"} padding={"10px"} >
                <Radio value='1' />
                <Image ml={"10px"} height={"30px"} src={PhonePay} alt="phonepay" />
                <Text ml={"10px"} fontSize={"16px"} fontWeight={600} >
                  PhonePe
                </Text>
              </Box>
              <Box display={"flex"} alignItems={"center"} padding={"10px"} >
                <Radio disabled value='2 ' />
                <Image ml={"10px"} height={"30px"} src={GooglePay} alt="phonepay" />
                <Text ml={"10px"} fontSize={"16px"} fontWeight={600} >
                  Google Pay
                </Text>
              </Box>
              <Box display={"flex"} alignItems={"center"} padding={"10px"} >
                <Radio disabled value='3' />
                <Image ml={"10px"} height={"30px"} src={Paytm} alt="phonepay" />
                <Text ml={"10px"} fontSize={"16px"} fontWeight={600} >
                  Paytm
                </Text>
              </Box>
            </RadioGroup>
          </Box>
              </Stack>
            </RadioGroup>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem isDisabled padding={"10px 0"}>
          <AccordionButton>
            <Box flex="1" textAlign="left" fontSize={"12px"}>
              Debit/Credit Cards (Not Available)
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </AccordionItem>
      
      <Box position="relative" py={5}>
        <Divider />
        <AbsoluteCenter  bg="white" px="4" textTransform={"uppercase"}>
          Pay In Case
        </AbsoluteCenter>
      </Box>
      <AccordionItem isDisabled borderTop={"none"} padding={"10px 0"}>
          <AccordionButton>
            <Box flex="1" textAlign="left" fontSize={"12px"}>
              Cash on Delivery (Not Available)
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </AccordionItem>
      </Accordion>
      <Box mt={5} textAlign="center" display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
        <Text mb={2}>Reselling the Order?</Text>
        <Box display={"flex"} alignItems={"center"}>
        <Button colorScheme="pink" mr={2} borderRadius={"20px"} fontSize={"14px"} >
          No
        </Button>
        <Button colorScheme="pink" variant="outline" borderRadius={"20px"} fontSize={"14px"}>
          Yes
        </Button>
          </Box>
      </Box>
    </Box>
  );
};

export default PaymentScreen;
