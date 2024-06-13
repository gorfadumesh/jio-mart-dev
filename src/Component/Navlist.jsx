import { Box, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "./Styles.css"; // Ensure your CSS file supports these styles

const categories = [
  { name: "Groceries", imageUrl: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1712725806_Grocery.jpg?im=Resize=(136,136)", path: "/groceries" },
  { name: "Premium Fruits", imageUrl: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1713543148_Premium_Fruits.jpg?im=Resize=(136,136)", path: "/premium-fruits" },
  { name: "Home & Kitchen", imageUrl: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1718009029_Home_And_Lifestyle.jpg?im=Resize=(136,136)", path: "/home-kitchen" },
  { name: "Fashion", imageUrl: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1717771855_Fashion.jpg?im=Resize=(136,136)", path: "/fashion" },
  { name: "Electronics", imageUrl: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1712726312_TV_And_Electronics.jpg?im=Resize=(136,136)", path: "/electronics" },
  { name: "Beauty", imageUrl: "	https://www.jiomart.com/images/cms/aw_rbslider/slides/1715666398_mxzdgsdg.jpg?im=Resize=(136,136)", path: "/beauty" },
  { name: "Jewellery", imageUrl: "https://www.jiomart.com/images/product/original/rvg0wfup0m/ashish-export-handcrafted-contemporary-beeded-jwellery-24-line-necklace-earring-set-for-women-girls_maroon-product-images-orvg0wfup0m-p601553684-0-202305161757.jpg?im=Resize=(360,360)", path: "/jewellery" },
];

const Navlist = () => {
  const navigate = useNavigate();

  return (
    <Box className="navlist-container">
      {categories.map((category) => (
        <Box
          key={category.name}
          className="category-item"
          onClick={() => navigate(category.path)}
        >
          <Image
            src={category.imageUrl}
            alt={category.name}
            className="category-img"
          />
          <Text fontWeight={600} mt={2}>{category.name}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default Navlist;
  