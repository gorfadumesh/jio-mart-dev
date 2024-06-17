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
        <Box >
          <Box>

            <Text color={"#000000a6"} fontWeight={700} fontSize={"16px"} >
            SmartBazaar Basket 
            (1)
            </Text>
            <Text m={"10px 0"} color={"#000000a6"} fontSize={"16px"} fontWeight={700}>
            ₹232.00
            </Text>
            </Box>
            <Box borderRadius={"10px"} >
          <Image height={"80px"} margin={"5px"} src="https://www.jiomart.com/images/product/original/490998044/nivea-soft-light-moisturiser-cream-for-face-hands-body-300-ml-product-images-o490998044-p490998044-0-202305301942.jpg?im=Resize=(240,240)" alt="" /> 
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
