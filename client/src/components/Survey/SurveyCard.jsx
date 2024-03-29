import React from 'react'

// import './style.css'

import { 
    Text,
    Stack,
    Box,
    Heading,
    Button,
    Image,
    Flex,
    Spacer
} from '@chakra-ui/react'

// import { NavLink } from "react-router-dom";
import sampleCard from '../../images/sample-card.png'

const SurveyCard = () => {
    return (

        <Box maxW='sm' width={'auto'} borderRadius={15} borderColor={'#fff'}>
            <Box
                position="relative"
                height="150px"
                overflow="hidden"
                borderRadius='lg'
            >
                <Image
                src={sampleCard}
                alt='Green double couch with wooden legs'
                />
            </Box>  

            <Stack mt='6' spacing='1' pr='0.5' pl='0.5'>
                <Heading size='sm'>Modern Art in Society</Heading>
                <Text fontSize='xs'>
                    by MMCA Sri Sri Lanka
                </Text>
            </Stack>
            
            <Flex
                pr='0.5'
                pl='0.5'
                pt='4'
            >
                <Text color='blue.600' fontSize='2xl'>
                    $450
                </Text>
                <Spacer />
                <Button 
                    variant='solid' 
                    colorScheme='blue' 
                    borderRadius={'full'} 
                    fontSize={12} 
                    fontWeight={'light'} 
                    bg='#11047A'
                >
                    Go to Survey
                </Button>
            </Flex>
        </Box>

    )
}

export default SurveyCard