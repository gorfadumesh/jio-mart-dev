import { Box, Text, SimpleGrid } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import axios from 'axios';
import Autocrausel2 from '../Pages/Autocrausal2';
import ProductCard from '../Pages/ProductCard';
import Navlist from './Navlist';
import Footer from './FooterPuneet';

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    fetchProductList();
  }, []);

  const fetchProductList = () => {
    axios.post(`${BASE_URL}product/list`)
      .then((response) => {
        const productList = response?.data?.data.data;
        if (Array.isArray(productList)) {
          setProducts(productList);
        } else {
          console.error('Fetched data is not an array:', productList);
        }
      })
      .catch((error) => console.error(error));
  };

  const onClickDetail = (id) => {
    navigate(`/productdetail/${id}`);
  };

  return (
    <Box>
      <Box>
        <Navlist />
      </Box>
      <Autocrausel2 />
      <Box>
        <Text textAlign={"left"} m={"20px 20px 10px 20px"} fontSize={"22px"} fontWeight={'600'}>Daily Deals</Text>
        <Box p={4}>
          <SimpleGrid background={""} columns={{ base: 2, md: 4 }} spacing={2}>
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.name}
                price={product.sellingPrice}
                location={product.location}
                imageUrl={product.image1}
                badgeText={product.badgeText}
                onClick={() => onClickDetail(product._id)}
              />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default Home;
