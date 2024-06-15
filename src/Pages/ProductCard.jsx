import React from 'react';
import { Box, Image, Badge, Text, Button, Stack, useColorModeValue, HStack } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const ProductCard = ({ title, price, location, imageUrl, badgeText, onClick }) => {
    return (
        <Box
            cursor={"pointer"}
            maxW="sm"
            borderWidth="1px"
            // borderRadius="lg"
            overflow="hidden"
            bg={useColorModeValue('white', 'gray.800')}
            // boxShadow="lg"
            //   _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}
            display="flex"
            flexDirection="column" // Align items vertically
            justifyContent="space-between" // Space between items
            padding={2}
            onClick={onClick}

        >
            <Image src={imageUrl} alt="Product Image" objectFit="cover" w="100%" h="150px" />

            <Box p="2">


                <Box
                    mt="1"
                    fontWeight={400}
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                    fontSize={{ base: "sm", md: "md" }}
                    color={"black"}
                     maxW="200px"
                     whiteSpace="nowrap"
                     overflow="hidden"
                     textOverflow="ellipsis"
                >
                    {title}
                </Box>

                <Box display={"flex"} mt={"10px"} alignItems={"baseline"}>
                    <Box
                        fontSize={{ base: "14px", md: "md" }}
                        fontWeight={700}
                    >
                        ₹{price}
                    </Box>
                    <Box ml={"5px"} fontWeight={400} color="rgb(139, 139, 163)" fontSize="14px">
                        onwards
                    </Box>
                </Box>

                <HStack spacing={2} mt={2} alignItems="center">
                <Badge ml={0} background={"rgb(248, 248, 255)"} color={"rgb(97, 97, 115)"} display={"flex"} fontSize={"8px"} alignItems={"center"} borderRadius="full" px="2" py="1" textTransform={false} fontWeight={500} >
                    Free Delivery
                </Badge>
                </HStack>
            </Box>
            <Box display="flex" marginBottom={"10px"} alignItems={"center"}>
                <Badge ml={"5px"} background={"rgb(35, 187, 117)"} color={"white"} display={"flex"} alignItems={"center"} borderRadius="full" px="2" py="1" >
                    3.7 <StarIcon fontSize={"10px"} ml={"4px"} />
                </Badge>
                <Text ml={2} fontSize={{ base: "xs", md: "sm" }} color={"rgb(139, 139, 163)"}>
                   234 Reviews
                </Text>
            </Box>

            {/* <Stack padding={4} mt="4" direction="row" spacing={4} justifyContent={"center"}>
                <Button
                    flex={1}
                    fontSize={{ base: "xs", md: "sm" }} 
                    rounded="full"
                    bg="teal.400"
                    color="white"
                    boxShadow="0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                    _hover={{ bg: 'teal.500' }}
                    _focus={{ bg: 'teal.500' }}
                    maxWidth="100px"
                >
                    Buy Now
                </Button>
            </Stack> */}
        </Box>
    );
};

export default ProductCard;
