import React from 'react';
import { Box, Image, Badge, Text, Button, Stack, useColorModeValue, HStack } from '@chakra-ui/react';

const ProductCard = ({ title, price, location, imageUrl, badgeText,onClick }) => {
    return (
        <Box
        cursor={"pointer"}
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow="lg"
            //   _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}
            display="flex"
            flexDirection="column" // Align items vertically
            justifyContent="space-between" // Space between items
            onClick={onClick}
            
        >
            <Image src={imageUrl} alt="Product Image" objectFit="cover" w="100%" h="150px" />

            <Box p="2">
                <Box display="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                        {badgeText}
                    </Badge>
                </Box>

                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                    fontSize={{ base: "sm", md: "md" }}
                >
                    {title}
                </Box>

                <Box>
                    ₹{price}
                    <Box as="span" color="gray.600" fontSize="sm">
                        / month
                    </Box>
                </Box>

                <HStack spacing={2} mt={2} alignItems="center">
                    <Text fontSize={{ base: "xs", md: "sm" }} color={useColorModeValue('gray.600', 'gray.400')}>
                        {location}
                    </Text>
                </HStack>
            </Box>

            <Stack padding={4} mt="4" direction="row" spacing={4} justifyContent={"center"}>
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
            </Stack>
        </Box>
    );
};

export default ProductCard;
