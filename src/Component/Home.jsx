
import { Box, Center, Flex, Image ,SimpleGrid,Text} from '@chakra-ui/react'
import Autocrausel from '../Pages/Autocrausel'
import Autocrausel2 from '../Pages/Autocrausal2'
import ImageCrausal3 from '../Pages/ImageCrausal3'
import ImageCrausal4 from '../Pages/ImageCrausal4'
import ImageCrausal from '../Pages/ImageCrausel'
import ImageCrausel2 from '../Pages/ImageCrausel2'
import Imagesslider from '../Pages/Imagesslider'
import Imagesslidershop from '../Pages/Imagesslider1'
import Prodcustom from '../Pages/Prodcustom'
import ProdItems from '../Pages/ProdItems'
import Singleslider from '../Pages/Singleslider'
import ProductCard from '../Pages/ProductCard'
import { useNavigate } from "react-router";
import Navlist from './Navlist'



const Home = () => {
  const navigate = useNavigate();

  const products = [
    {
      title: "Apple iPhone 14 Plus (128 GB) - Blue",
      price: "1500",
      location: "New York, NY",
      imageUrl: "https://cdn.shopify.com/s/files/1/0805/0475/0393/products/71f5Eu5lJSL._SL1500.jpg?v=1690578663",
      badgeText: "New"
    },
    {
      title: "Samsung Galaxy S22 Ultra 5G (Green, 12GB, 256GB Storage)",
      price: "1200",
      location: "San Francisco, CA",
      imageUrl: "https://cdn.shopify.com/s/files/1/0805/0475/0393/products/71PvHfU_pwL._SL1500.jpg?v=1690578929",
      badgeText: "Featured"
    },
    {
      title: "Spacious Villa",
      price: "3000",
      location: "Los Angeles, CA",
      imageUrl: "https://images.meesho.com/images/products/19512057/6ycmh_256.webp",
      badgeText: "Best Seller"
    },
    {
      title: "Urban Studio",
      price: "1000",
      location: "Chicago, IL",
      imageUrl: "https://images.meesho.com/images/products/51224074/9ry9d_256.webp",
      badgeText: "New"
    }
  ];

const onClickDetail = () =>{
  navigate("/productdetail")
}


  return (
    <Box >
        <Box>
        <Navlist />
      </Box>
      <Autocrausel2/>
      {/* <Center>
      <Flex direction={"column"} pt={"10px"} w={"99%"}>
       
        <Image src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1667281294_bLOCK_BUSTER_dEALS_1_Desktop.jpg"/>
        <Image src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1671215667_StaticBanner_17th_Dec_WEB.jpg"/>
       
      </Flex>
      </Center> */}
      {/* <Autocrausel/> */}
      {/* <Box mt=
    {"10px"} w={"99%"}>
      <Singleslider/>
      </Box> */}
      {/* <Center>
      <Flex direction={"column"} pt={"10px"} w={"99%"}>
       
        <Image src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1668663411_Sim-Delivery_1240_X_194_px_web.jpg"/>
        <Image src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1671301694_Slim_Banner_18th_Dec_WEB.jpg"/>
       
      </Flex>
      </Center> */}
      {/* <Box>
      <Text textAlign={"left"} ml={"40px"} fontSize={"20px"} fontWeight={600} mt={"9px"} >Trending Brands</Text>
        <Imagesslider />
      </Box> */}
      {/* <Box>
      <Text textAlign={"left"} ml={"40px"} fontSize={"20px"} fontWeight={600} mt={"9px"} >Shop From Top Categories</Text>
        <Imagesslidershop url="https://kiwi-discovered-pyjama.glitch.me/imagesslider1_shop"/>
      </Box> */}
      {/* <Box>
        <ImageCrausal/>
      </Box> */}
      <Box>
      <Text textAlign={"left"} m={"20px 20px 10px 20px"} fontSize={"22px"} fontWeight= {'600'}>Daily Deals</Text>
      <Box p={4}>
      <SimpleGrid background={""} columns={{ base: 2, md: 4 }} spacing={2}>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              price={product.price}
              location={product.location}
              imageUrl={product.imageUrl}
              badgeText={product.badgeText}
              onClick={()=>onClickDetail()}
            />
          ))}
        </SimpleGrid>
      </Box>
        {/* <ProdItems/> */}
      </Box>
      {/* <Box>
      <Text textAlign={"left"} ml={"40px"} fontSize={"25px"} fontWeight= {'bold'}>Top Deals</Text>
        <Prodcustom url="https://kiwi-discovered-pyjama.glitch.me/prod_Phone"/>
      </Box> */}
      {/* <Box>
      <Text textAlign={"left"} ml={"40px"} fontSize={"20px"} fontWeight={500} mt={"5px"}> Shop By Categoires</Text>
        <Imagesslider url="https://kiwi-discovered-pyjama.glitch.me/imagesslider1_shop"/>
      </Box> */}
      {/* <Box>
        <ImageCrausel2/>
      </Box>
      <Box>
      <Text textAlign={"left"} ml={"40px"} fontSize={"25px"} fontWeight= {'bold'}>Top Deals</Text>
        <Prodcustom  url="https://kiwi-discovered-pyjama.glitch.me/prod_Phone"/>
      </Box> */}
      {/* <Box>
      <Text textAlign={"left"} ml={"40px"} fontSize={"20px"} fontWeight={600} mt={"9px"} >Top Living Categories</Text>
      <Imagesslidershop url="https://kiwi-discovered-pyjama.glitch.me/imagesslider3_living"/>
      </Box>
      <Box>
      <Text textAlign={"left"} ml={"40px"} fontSize={"25px"} fontWeight= {'bold'}>Top Deals</Text>
        <Prodcustom url="https://kiwi-discovered-pyjama.glitch.me/prod_Phone"/>
      </Box>
      <Box>
        <ImageCrausal3/>
      </Box>
      <Box>
      <Text textAlign={"left"} ml={"40px"} fontSize={"20px"} fontWeight={600} mt={"9px"} >Top Fashion Categories</Text>
      <Imagesslidershop url="https://kiwi-discovered-pyjama.glitch.me/imagesslider4_fashion"/>
      </Box>
      <Box>
      <Text textAlign={"left"} ml={"40px"} fontSize={"20px"} fontWeight={600} mt={"9px"} >Top Makeup Categories</Text>
      <Imagesslidershop url="https://kiwi-discovered-pyjama.glitch.me/imagesslider5_Makeup"/>
      </Box> */}
      {/* <Box>
      <Text textAlign={"left"} ml={"40px"} fontSize={"25px"} fontWeight= {'bold'}>Top Deals</Text>
        <Prodcustom url="https://kiwi-discovered-pyjama.glitch.me/prod_Phone"/>
      </Box>
      <Box>
        <ImageCrausal4/>
      </Box>
      <Box>
      <Text textAlign={"left"} ml={"40px"} fontSize={"20px"} fontWeight={600} mt={"9px"} >Babies Categories</Text>
      <Imagesslidershop url="https://kiwi-discovered-pyjama.glitch.me/imagesslider6_Baby"/>
      </Box>
      <Box mb={"20px"}>
      <Text textAlign={"left"} ml={"40px"} fontSize={"25px"} fontWeight= {'bold'}>Top Deals</Text>
        <Prodcustom url="https://kiwi-discovered-pyjama.glitch.me/prod_Phone"/>
      </Box> */}
    </Box>
      
  )
}

export default Home