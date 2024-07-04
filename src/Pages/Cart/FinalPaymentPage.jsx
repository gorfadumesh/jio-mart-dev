import React, { useState, useEffect } from "react";
import { useToast, Spinner, Box, Text } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import "../Cart/PymentPage.css";
import { useDispatch, useSelector } from "react-redux";
import PaymentScreen from "./PaymentScreen";

const fetchProductDetails = async (id, baseUrl) => {
  try {
    const response = await axios.get(`${baseUrl}product/${id}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching product details:', error);
    return null;
  }
};

export const FinalPaymentPage = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const toast = useToast();
  const coupon = useSelector((store) => store.CartReducer.coupon);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  
  useEffect(() => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const fetchDetails = async () => {
      const details = await fetchProductDetails(id, baseUrl);
      setProductDetails(details);
      setIsLoading(false);
    };

    fetchDetails();
  }, [id]);

  const onClickOnPay = () => {
    alert("Open Phone Pay");
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="container">
        <div>
          <PaymentScreen />
        </div>
      </div>
      <div className='BuyButtonContainer'>
        <Text>
          <Box ml={"10px"} textAlign={"left"} >
            <Box fontWeight={700} fontSize="14px">
              ₹{productDetails ? productDetails.sellingPrice : 0}
            </Box>
            <Box
              fontSize={{ base: "14px", md: "md" }}
              color={"green"}
              fontWeight={600}
            >
              You will save ₹{productDetails ? productDetails.mrp - productDetails.sellingPrice : 0}
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
