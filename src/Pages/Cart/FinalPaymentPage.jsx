import React, { useState } from "react";
import { useToast, Spinner, Box, Radio, Image, Text, RadioGroup } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import "../Cart/PymentPage.css";
import { useDispatch, useSelector } from "react-redux";
import { ResetCart } from "../../redux/Cart/action";
import PhonePay from "../../Resources/PhonePay.png"
import GooglePay from "../../Resources/GooglePay.png"
import PaymentScreen from "./PaymentScreen";

export const FinalPaymentPage = () => {
  let [checked, setChecked] = useState(false);
  const toast = useToast();
  const coupon = useSelector((store) => store.CartReducer.coupon)
  let navigate = useNavigate();
  const dispatch = useDispatch()
  const onClickOnPay = () => {
    alert("Open Phone Pay")
  }
  return (
    <>
      <div className="container">
        {/* <div className="container-div1" style={{margin:"10px", height:"400px"}}>
          <Text fontSize={"18px"} margin={"10px"} fontWeight={600} >
            Payment Options
          </Text>
          <Box>
            <RadioGroup value="1" >

              <Box display={"flex"} alignItems={"center"} padding={"10px"} >
                <Radio value='1' />
                <Image ml={"10px"} height={"30px"} src={PhonePay} alt="phonepay" />
                <Text ml={"10px"} fontSize={"16px"} fontWeight={600} >
                  PhonePay
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
                <Image ml={"10px"} height={"30px"} src={PhonePay} alt="phonepay" />
                <Text ml={"50px"} fontSize={"16px"} fontWeight={600} >
                  Cash On Delivery
                </Text>
              </Box>
            </RadioGroup>
          </Box>
          <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          padding={"30px 10px"}
          >

          <button
            className='PaymentBtn'
            onClick={() => {
          onClickOnPay()
            }}
          >
            Pay 
          </button>
          </Box>

        </div> */}
        <div>
          <PaymentScreen />
        </div>
      </div>
      <div className='BuyButtonContainer'>
        <Text>
          <Box ml={"10px"} textAlign={"left"} >

            <Box fontWeight={700} fontSize="14px">
              ₹3999
            </Box>
            <Box
              fontSize={{ base: "14px", md: "md" }}
              color={"green"}
              fontWeight={600}
            >
              You will save ₹833
            </Box>
          </Box>
        </Text>
        <button
          className='buynowbtn'
          onClick={() => onClickOnPay()}
        >
          Pay Now
        </button>
      </div>
    </>
  );
};
