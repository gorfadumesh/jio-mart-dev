import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./crausel.css";

import { Autoplay, Pagination, Navigation } from "swiper";
import { Box } from '@chakra-ui/react'
 export default function Autocrausel2() {
  return (
    <Box mt={"10px"}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,  
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide >
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1717780638_GheeBanner_West.jpg?im=Resize=(632,804)"></img>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1718041397_Best_Of_Mens_Footwear_1.jpg?im=Resize=(632,804)"></img>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1718255169_Best_Selling_Furniture.jpg?im=Resize=(632,804)"></img> </SwiperSlide>
        <SwiperSlide>
        <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1718041153_iPhone_15.jpg?im=Resize=(632,804)"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1718213472_Top_Selling_Smart_TVs_1.jpg?im=Resize=(632,804)" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1717776350_Breakfast.jpg?im=Resize=(632,804)" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1718041453_Kurtas__Kurta_Sets_and_More.jpg?im=Resize=(632,804)" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1718213438_Prime_Bargains_On_Realme_Smartphones.jpg?im=Resize=(632,804)" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1717776029_Biscuits.jpg?im=Resize=(632,804)" alt="" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
