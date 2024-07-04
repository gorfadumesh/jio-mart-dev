import React, { useState, useEffect } from "react";
import axios from "axios";
import { useToast, Spinner, Box, Image, Text, Icon, Spacer } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import "../Cart/PymentPage.css";
import { useDispatch, useSelector } from "react-redux";
import { ResetCart } from "../../redux/Cart/action";
import { PaymentDetils } from "../../Component/Cart/PaymentDetils";
import { FaChevronRight, FaPercent } from "react-icons/fa";

const getProductDetails = (id) => {
  return axios.get(`${process.env.REACT_APP_BASE_URL}product/${id}`);
};

export const MakePaymentPage = () => {
  const [checked, setChecked] = useState(false);
  const [itemData, setItemData] = useState(null);
  const toast = useToast();
  const coupon = useSelector((store) => store.CartReducer.coupon);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams(); // Get ID from URL parameters

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProductDetails(id);
        setItemData(response.data.data);
      } catch (error) {
        toast({
          title: "Error fetching data",
          description: "There was an error fetching the item data.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    };

    fetchData();
  }, [id, toast]);

  if (!itemData) {
    return <Spinner />;
  }

  return (
    <>
      <div className="container">
        <Box 
          padding={5} 
          bg="white" 
          boxShadow="md" 
          borderRadius="md" 
          display="flex" 
          alignItems="center"
          margin={"10px"}
        >
          <Icon as={FaPercent} w={5} h={5} color="green.500" />
          <Text ml={4} fontWeight="medium">Apply Coupon</Text>
          <Spacer />
          <Icon as={FaChevronRight} w={4} h={4} color="blue.500" />
        </Box>
        <div className="" style={{ padding: "10px", margin: "10px" }}>
          <Box display={"flex"} alignItems={"center"}>
            <Text color={"#000000a6"} fontWeight={700} mr={"5px"} fontSize={"16px"}>
              SmartBazaar Basket
            </Text>
            (1)
          </Box>
          <Box display={"flex"} m={"10px 0"}>
            <Box>
              <Image borderRadius={"10px"} height={"60px"} minWidth={"60px"} margin={"5px"} src={itemData.image1} alt="" />
              <Box ml={"10px"} fontWeight={400} color="rgb(139, 139, 163)" fontSize="14px">
                Qty. 1
              </Box>
            </Box>
            <Box ml={"20px"} display={"flex"} flexDir={"column"}>
              <Box
                fontWeight={400}
                mb={"10px"}
                as="h4"
                lineHeight="tight"
                isTruncated
                fontSize={{ base: "16px", md: "md" }}
                color={"black"}
                maxW="200px"
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
              >
                {itemData.name}
              </Box>
              <Text color={"#000000a6"} fontSize={"16px"} fontWeight={700}>
                ₹{itemData.sellingPrice}
              </Text>
              <Box display={"flex"} mt={"10px"} alignItems={"baseline"}>
                <Box fontSize={{ base: "14px", md: "md" }} color={"#069e06"}>
                ₹{itemData.mrp - itemData.sellingPrice} off
                </Box>
                {/* <Box ml={"10px"} fontWeight={400} color="rgb(139, 139, 163)" fontSize="14px">
                  ₹{itemData.mrp}
                </Box> */}
              </Box>
            </Box>
          </Box>
        </div>
        <PaymentDetils cartPrice={300} itemData={itemData} />
        <div className="PaymentButtonContainer">
          <button
            className="PaymentBtn"
            onClick={() => {
              navigate(`/selectpayment/${id}`);
            }}
          >
            Make Payment
          </button>
        </div>
      </div>
    </>
  );
};
