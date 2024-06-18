import React, { useState } from "react";
import { useToast, Spinner, Box, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import "../Cart/PymentPage.css";
import { useDispatch, useSelector } from "react-redux";
import { ResetCart } from "../../redux/Cart/action";
import { PaymentDetils } from "../../Component/Cart/PaymentDetils";
export const MakePaymentPage = () => {
  let [checked, setChecked] = useState(false);
  const toast = useToast();
  const coupon = useSelector((store) => store.CartReducer.coupon)
  let navigate = useNavigate();
  const dispatch = useDispatch()
  return (
    <>
      <div className="container">
        <div className="">
          {/* <Box
            margin={"10px 0"}
            onClick={() => {
              navigate("/order-address");
            }}
          >{`< Go Back`}</Box> */}
          {/* <div>
            <div>Total Amount</div>
            <div>₹ {coupon ? Number(localStorage.getItem("price")) * 0.5 : (Number(localStorage.getItem("price")) * 0.8).toFixed(2)}</div>
          </div> */}
         <Box display={"flex"} alignItems={"center"} >
         <Text color={"#000000a6"} fontWeight={700} mr={"5px"} fontSize={"16px"} >
            SmartBazaar Basket
          </Text>
            (1)
         </Box>
          <Box display={"flex"} m={"10px 0"}>
            <Box >
       
              <Image borderRadius={"10px"} height={"60px"} margin={"5px"} src="https://www.jiomart.com/images/product/original/490998044/nivea-soft-light-moisturiser-cream-for-face-hands-body-300-ml-product-images-o490998044-p490998044-0-202305301942.jpg?im=Resize=(240,240)" alt="" />
              <Box ml={"10px"} fontWeight={400} color="rgb(139, 139, 163)" fontSize="14px">
                   Qty. 1
                    </Box>
            </Box>
            <Box ml={"20px"} display={"flex"} flexDir={"column"}  >
              <Box
                fontWeight={400}
                mb={"10px"}
                as="h4"
                lineHeight="tight"
                isTruncated
                fontSize={{ base: "16px", md: "md" }}
                color={"black"}
                maxW="250px"
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
              >
                boAt Aavante Bar 3200D | 5.1 Channel Soundbar
              </Box>
              <Text  color={"#000000a6"} fontSize={"16px"} fontWeight={700}>
                ₹232.00
              </Text>
              <Box display={"flex"} mt={"10px"} alignItems={"baseline"}>
                    <Box
                        fontSize={{ base: "14px", md: "md" }}
                        color={"#069e06"}
                    >
                       99% off
                    </Box>
                    <Box ml={"10px"} fontWeight={400} color="rgb(139, 139, 163)" fontSize="14px">
                    ₹3999
                    </Box>
                </Box>
            </Box>
          </Box>
        </div>

        <PaymentDetils cartPrice={300} />
        <div className='PaymentButtonContainer'>
          <button
            className='PaymentBtn'
            onClick={() => {
              // localStorage.setItem("price", price.toFixed(2));
              // navigate('/makepayment');
            }}
          >
            Make Payment
          </button>
        </div>
      </div>
    </>
  );
};
