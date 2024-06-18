import React, { useEffect, useState } from "react";
import "./indivisualPage.css";
import { BsFillBagPlusFill } from "react-icons/bs";
import { CiTwitter } from "react-icons/ci";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { Show, Hide, useToast, Button, Stack, Box, Text } from "@chakra-ui/react";
import { AddToCart } from "../redux/Cart/action";
import { useDispatch } from "react-redux";
import review_image from "../Resources/review_image.jpeg"
import { useNavigate } from "react-router";

const CurrentIndivisualData = (payload) => {


  return axios.put(
    "https://kiwi-discovered-pyjama.glitch.me/indivisualPageData",
    payload
  );
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 564 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 563, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const getData = () => {
  return axios.get(
    "https://kiwi-discovered-pyjama.glitch.me/indivisualPageData"
  );
};

const getCarouselData = () => {
  return axios.get("https://kiwi-discovered-pyjama.glitch.me/carousel_idvPage");
};

const ProductDetails = () => {
  const navigate = useNavigate();
  const [description, setDescription] = useState(false);
  const [data, setData] = useState({});
  const [imgList, setImgList] = useState([]);
  const [mainImage, setMainImage] = useState(""); // State for the main image
  const dispatch = useDispatch();
  const toast = useToast();

  const handleCurrentData = (item) => {
    CurrentIndivisualData(item).then((res) => handleGetdata());
  };



  const handleGetdata = () => {
    getData().then((res) => {
      // Initialize the main image
    });
    const productData = {
      image: "https://www.jiomart.com/images/product/150x150/493177737/realme-c33-32-gb-3-gb-ram-aqua-blue-mobile-phone-digital-o493177737-p594311525-0-202210070516.jpeg",
      name: "Oneplus Nord 2 5G",
      id: 18,
      price: 32499,
      category: "Phone",
      sampleImages: [
        "https://www.jiomart.com/images/product/original/rvwtbpuaox/zikucr3150-m-product-images-rvwtbpuaox-0-202205211805.jpg?im=Resize=(600,750)",
        "https://www.jiomart.com/images/product/original/rvwtbpuaox/zikucr3150-m-product-images-rvwtbpuaox-1-202205211805.jpg?im=Resize=(600,750)",
        "https://www.jiomart.com/images/product/original/rvwtbpuaox/zikucr3150-m-product-images-rvwtbpuaox-2-202205211806.jpg?im=Resize=(600,750)",
        "https://www.jiomart.com/images/product/original/rvwtbpuaox/zikucr3150-m-product-images-rvwtbpuaox-3-202205211806.jpg?im=Resize=(600,750)",
        "https://www.jiomart.com/images/product/original/rvwtbpuaox/zikucr3150-m-product-images-rvwtbpuaox-4-202205211806.jpg?im=Resize=(600,750)",
      ]

    };
    setData(productData);
    setMainImage(productData.sampleImages[0]);
    getCarouselData().then((res) => setImgList(res.data));
  };

  const PostToCart = (item) => {
    dispatch(AddToCart(item));
    toast({
      title: "Verification Reminder",
      description: `"Item Added To Cart Successfully."`,
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
  };

  useEffect(() => {
    handleGetdata();
    window.scrollTo(0, 0);
  }, []);

  const onClickBuy = () => {
    navigate("/order-address")
  }

  return (
    <div className="indivisualPage">
      <div className="topSection">
        <Show className="" below="sm">

          <h3 className="product__name space_top_bottom title_pro">
            {data.title || data.name}
          </h3>
        </Show>
        <div className="left-img">
          <div className="left-carousel">
            {data?.sampleImages?.map((image, index) => (
              <img
                key={index}
                style={{ width: "90%" }}
                src={image}
                alt={`demo${index + 1}`}
                onClick={() => setMainImage(image)} // Set the main image on click
              />
            ))}
          </div>
          <div className="right-main">
            <img
              style={{ width: "90%" }}
              src={mainImage} // Use the state variable for the main image
              alt={data.title || data.name}
            />
          </div>
        </div>

        <div className="right-data">
          <Hide below="sm">
            <h3 className="product__name space_top_bottom ">
              {data.title || data.name}
            </h3>
          </Hide>


          <div style={{ display: "flex", justifyContent: "left", alignItems: "center", width: "100%", marginLeft: "40px" }} >

            <span className="crossedLine space_top_bottom">₹ 1599.00</span>

            <b className="space_Between" style={{ marginLeft: "5px" }}>Price : ₹ {data.price} </b>
          </div>
          <p className="space_top_bottom" style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "left", width: "100%" }}>
            <span style={{ textAlign: "left", marginLeft: "20px" }}>
              You Save: ₹ <b className="green__text space_Between">833.00</b>
            </span>
            <span style={{ textAlign: "left", marginLeft: "20px" }}>Inclusive of all taxes</span>
          </p>
          <p className="space_top_bottom" style={{ display: "flex", justifyContent: "left", alignItems: "center", width: "100%", marginLeft: "40px" }}>
            <b>Sold by</b>{" "}
            <b className="blue_text">O-KARMICA WELLNESS PRIVATE LIMITED</b>
          </p>
          <p className="space_top_bottom" style={{ display: "flex", justifyContent: "left", alignItems: "center", width: "100%", marginLeft: "40px" }}>
            Inaugural Offer <b>Free Shipping</b>
          </p>
          {/* <div>
            <Stack padding={4} mt="4" direction="row" spacing={4} justifyContent={"center"}>
              <Button
                flex={1}
                fontSize={{ base: "xs", md: "sm" }}
                rounded="full"
                bg="#008ecc"
                color="white"
                boxShadow="0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                _hover={{ bg: '#008eaa' }}
                _focus={{ bg: '#008edd' }}
                minWidth="200px"
                onClick={()=>onClickBuy()}
              >
                Buy Now
              </Button>
            </Stack>
          </div> */}
          <div className='BuyButtonContainer'>
            <Text>
            <Box ml={"10px"} textAlign={"left"} >
                  
                    <Box  fontWeight={700}  fontSize="14px">
                    ₹3999
                    </Box>
                    <Box
                        fontSize={{ base: "14px", md: "md" }}
                        color={"green"}
                        fontWeight={600}
                    >
                       You saved ₹833
                    </Box>
                </Box>
            </Text>
            <button
              className='buynowbtn'
              onClick={()=>onClickBuy()}
            >
              Buy Now
            </button>
          </div>
          <div className="social__links space_top_bottom">
            <a href="https://twitter.com/i/flow/login" target="_blank" rel="noopener noreferrer">
              <CiTwitter style={{ width: "40px" }} />
            </a>
            <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
              <BsWhatsapp style={{ width: "40px" }} />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <AiOutlineFacebook style={{ width: "40px" }} />
            </a>
          </div>
        </div>
      </div>
      <div className="mid__section space_top_bottom space_Between">
        <h3 className="space_top_bottom">
          <b>Description</b>{" "}

        </h3>
        <div className="visible">
          <h4>{data.title}</h4>
          <p>
            It has excellent emulsifying properties that give the fabric a
            brighter look. The particular safe bio enzymes based detergent
            formula delivers absolute cleansing for whites and your coloured
            clothes.
          </p>
        </div>
        {description ? <div className="visible">
          <p className="smallSpace">
            It has added fabrics conditioners that soften the fabric and leave
            your clothes with a light fragrance. Its advanced nanotechnology
            helps faster stain removal in machines, and it penetrates clothes
            fibres much faster and removes tough stains in the washing machine
            itself. Removes tough soiling and accumulated yellowish layer on
            the clothes to prevent fast ageing.
          </p>
          <p className="smallSpace">
            <b>Stain Removal: </b>Zimmer Aufraumen power Laundry Liquid
            Detergent’s advanced nanotechnology helps faster stain removal in
            machines; it penetrates clothes fibres much faster and removes
            tough stains in the machine itself.
          </p>
          <p className="smallSpace">
            <b>Colour Care: </b> Although its fast action removes tough stains
            in machines but retains the original colour of the fabric.
          </p>
          <p className="smallSpace">
            <b>Fresh Fragrance: </b>the mild natural fragrance boosters
            ensures that your clothes look not only fresh but also smell fresh
            rather smell of chemical.
          </p>
          <p className="smallSpace">
            <b>The softness of Clothes: </b>added fabric conditioner protects
            the fibre of clothes and ensures softness of the clothes is
            maintained along with cleaning
          </p>
          <p className="smallSpace">
            <b>Saves Water: </b>Our High performing, the low foaming formula
            helps use lesser water per a load of laundry, thereby saving at
            least 50*365 = 18250 litres of water per year.
          </p>
        </div> : null}
        <a
          // className="btn"
          onClick={() => setDescription(!description)}
          style={{ marginRight: "1re3" }}
        >
          {description ? "Show Less" : "Show More"}
        </a>
        <img src={review_image} />
      </div>
      <h3>
        <b>You May Also Like</b>
      </h3>
      {/* <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        className="visible"
        keyBoardControl={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {imgList &&
          imgList.map((item) => (
            <div key={item.id} className="smallSpace idvCarousel">
              <img
                className="smallSpace"
                src={item.imgSrc}
                alt="img"
                onClick={() => handleCurrentData(item)}
              />
              <p className="smallSpace">
                <b>{item.title}</b>
              </p>
              <p className="smallSpace">
                <b>₹ {item.price}</b>
              </p>
              <p className="smallSpace">
                M.R.P :<span className="crossedLine">{item.mrp}</span>
              </p>
              <button className="btn cart-btn" onClick={() => PostToCart(item)}>
                <span>Add To Cart</span>
                <BsFillBagPlusFill />
              </button>
            </div>
          ))}
      </Carousel> */}
    </div>
  );
};

export default ProductDetails;
