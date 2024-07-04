import React, { useEffect, useState } from 'react';
import { AddressItem } from '../../Component/Cart/AddressItem';
import { PaymentDetils } from '../../Component/Cart/PaymentDetils';
import "../Cart/Address.css";
import { useNavigate, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { Grid, Input, Text } from '@chakra-ui/react';

export const AddressOrder = () => {
  let navigate = useNavigate();
  const { id } = useParams(); 

  let [price, setPrice] = useState(0);
  let cart = useSelector((store) => store.CartReducer.cart);

  useEffect(() => {
    let x = 0;
    for (let i = 0; i < cart.length; i++) {
      x = x + cart[i].price * cart[i].qty;
    }
    setPrice(x);
    window.scrollTo(0, 0);
  }, [cart]);

  return (
    <div className='Address'>
      <div style={{ margin: "20px 0", padding: "20px", background: "white" }}>
        <Text margin={"10px 0"} fontSize={"16px"} fontWeight={700}>Address Details</Text>
        <div>
          <div className=''>
            <div>
              <div>
                <Grid templateColumns='repeat(1, 1fr)' gap={2}>
                  <Input mt={"5px"} placeholder='Pincode' />
                </Grid>
                <Grid templateColumns='repeat(2, 1fr)' gap={2}>
                  <Input mt={"5px"} placeholder='House No.' />
                  <Input mt={"5px"} placeholder='Floor No.' />
                </Grid>
                <Grid templateColumns='repeat(1, 1fr)' gap={2}>
                  <Input mt={"5px"} placeholder='Tower No.' />
                </Grid>
                <Grid templateColumns='repeat(1, 1fr)' gap={2}>
                  <Input mt={"5px"} placeholder='Building / Apartment Name' />
                </Grid>
                <Grid templateColumns='repeat(1, 1fr)' gap={2}>
                  <Input mt={"5px"} placeholder='Address' />
                </Grid>
                <Grid templateColumns='repeat(1, 1fr)' gap={2}>
                  <Input mt={"5px"} placeholder='Landmark / Area' />
                </Grid>
                <Grid templateColumns='repeat(1, 1fr)' gap={2}>
                  <Input mt={"5px"} placeholder='City, State' />
                </Grid>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div></div>
      </div>
      <div style={{ padding: "20px", background: "white" }}>
        <Text margin={"20px 0"} fontSize={"16px"} fontWeight={700}>Delivery Contact Details</Text>
        <Text margin={"10px 0"}>The mobile number will receive updates of the order</Text>
        <Grid templateColumns='repeat(1, 1fr)' gap={2}>
          <Input mt={"5px"} placeholder='Receiver Name' />
        </Grid>
        <Grid templateColumns='repeat(1, 1fr)' gap={2}>
          <Input mt={"5px"} placeholder='Receiver Number' />
        </Grid>
      </div>
      <div className='PaymentButtonContainer'>
        <button
          className='PaymentBtn'
          onClick={() => {
            localStorage.setItem("price", price.toFixed(2));
            navigate(`/makepayment/${id}`);
          }}
        >
          Save & Proceed
        </button>
      </div>
    </div>
  );
};
