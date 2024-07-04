import React, { useState } from 'react'
import "../Cart/PaymentDetails.css"
import {ApplyCouponFn} from '../../redux/Cart/action'
import { useSelector } from 'react-redux'
import { Text } from '@chakra-ui/react'
export const PaymentDetils = ({cartPrice,itemData}) => {
    const coupon = useSelector((store)=> store.CartReducer.coupon)
    return (
        <div className='Payment'>
            <div>
                Price Details
            </div>
            <div className='payee'>
                <div>Price (1 item)</div>
                <div>₹{itemData.mrp}</div>
            </div>
            <div className='payee'>
                <div> Discount</div>
                <Text color={"#069e06"} >-₹{itemData.mrp - itemData.sellingPrice}</Text  >
            </div>
            <div className='payee'>
                <div>Delivery Charges</div>
                <Text color={"#069e06"}>FREE Delivery</Text>
            </div>
            <hr />
            <div className='payee '>
                <div>Total Amount</div>
                <div>₹{itemData.sellingPrice}</div>
            </div>
            <hr />
            <div className='green' style={{textAlign:"left", color:"#069e06", fontSize:"16px", fontWeight:"600" }} >
                You will save ₹{itemData.mrp - itemData.sellingPrice} on this order
            </div>
        </div>
    )
}
