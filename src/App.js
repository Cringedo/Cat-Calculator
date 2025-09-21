import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  HStack,
  theme,
  Heading,
  Input,
  Button,
  FormControl,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import InfoInput from './Input';


function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  function CatCalculator(age) {
    const numericAge = parseFloat(age);

    if (isNaN(numericAge) || numericAge <= 0 || numericAge > 30) {
      setAge(null);
      setClassage('Invalid age input');
      return;
    }

    let ageInCat;

    if (numericAge <= 1) {
      ageInCat = numericAge * 15;
    } else if (numericAge <= 2) {
      ageInCat = 15 + (numericAge - 1) * 9;
    } else {
      ageInCat = 24 + (numericAge - 2) * 4;
    }

    let ageInClass;
    if (numericAge < 0.5) {
      ageInClass = 'Kitten';
    } else if (numericAge <= 2) {
      ageInClass = 'Junior';
    } else if (numericAge <= 7) {
      ageInClass = 'Adult';
    } else if (numericAge <= 10) {
      ageInClass = 'Mature';
    } else {
      ageInClass = 'Senior';
    }

    setAge(Math.round(ageInCat * 10) / 10);
    setClassage(ageInClass);
  }

  const [data, setData] = useState();
  const [isShow, setShow] = useState(Boolean);
  const [age, setAge] = useState();
  const [classage, setClassage] = useState();
  const [isManja, setIsManja] = useState(Boolean);

  const ManjaDetector = (props) => {

    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
          <ModalOverlay bg='rgba(240, 248, 255, 0.8)' backdropFilter='blur(4px)' />
          <ModalContent
            bgGradient='linear(to-br, #FFF8DC, #F5DEB3, #FFE4E1)'
            borderRadius='30px'
            border='3px solid #FFF'
            boxShadow='0 15px 35px rgba(0, 0, 0, 0.1)'
          >
            <ModalHeader
              textAlign='center'
              fontSize='2xl'
              fontFamily='Comic Sans MS, cursive'
              color='orange.700'
              textShadow='1px 1px 0px #FFF'
            >
              💕 Special Message 💕
            </ModalHeader>
            <ModalCloseButton color='orange.600' _hover={{ bg: 'orange.200' }} />
            <ModalBody textAlign='center' p={6}>
              <Text
                fontSize='xl'
                color='orange.600'
                fontFamily='Comic Sans MS, cursive'
                fontWeight='bold'
                textShadow='1px 1px 0px rgba(255,255,255,0.8)'
              >
                Ni lah apa yang saya buat selama ini, hehehehehe love u sayang aye comel sungguh muah muah muah 💕✨
              </Text>
            </ModalBody>

            <ModalFooter textAlign='center' flexDirection='column' gap={3}>
              <Text
                fontSize='lg'
                color='orange.600'
                fontFamily='Comic Sans MS, cursive'
                textShadow='1px 1px 0px rgba(255,255,255,0.8)'
              >
                Sorry for being not epic before this, i think this week mungkin aye gunting rambut?! LETSGOOOO! 🎉
              </Text>
              <Button
                onClick={() => setIsManja(false)}
                bg='orange.50'
                color='orange.600'
                borderRadius='25px'
                fontFamily='Comic Sans MS, cursive'
                fontWeight='bold'
                _hover={{ bg: 'orange.100', transform: 'scale(1.05)' }}
                _active={{ transform: 'scale(0.95)' }}
                px={6}
              >
                💖 Love you juga sayang saya Nabilku 💖
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  const NormalPopUp = (props) => {

    if (isManja) {
      return <ManjaDetector />
    }
    else {
      return (
        <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
          <ModalOverlay bg='rgba(240, 255, 240, 0.8)' backdropFilter='blur(4px)' />
          <ModalContent
            bgGradient='linear(to-br, #F0FFF0, #E6F3E6, #F0F8FF)'
            borderRadius='35px'
            border='3px solid #FFF'
            boxShadow='0 15px 35px rgba(0, 0, 0, 0.1)'
          >
            <ModalHeader
              textAlign='center'
              fontSize='3xl'
              fontFamily='Comic Sans MS, cursive'
              color='green.600'
              textShadow='2px 2px 0px #FFF'
              fontWeight='900'
            >
              🎉 Your Cat's Age Results! 🎉
            </ModalHeader>
            <ModalCloseButton color='green.500' _hover={{ bg: 'green.200' }} />
            <ModalBody textAlign='center' p={8}>
              <VStack spacing={4}>
                <Text fontSize='7xl' animation='bounce 1s infinite'>🐱</Text>
                <Box
                  bg='white'
                  borderRadius='25px'
                  p={6}
                  border='3px solid #98FB98'
                  boxShadow='inset 0 0 15px rgba(152, 251, 152, 0.2)'
                >
                  <Text
                    fontSize='6xl'
                    color='green.600'
                    fontWeight='900'
                    fontFamily='Comic Sans MS, cursive'
                    textShadow='1px 1px 0px #FFF'
                  >
                    {age || 'N/A'}
                  </Text>
                  <Text
                    fontSize='2xl'
                    color='green.500'
                    fontWeight='bold'
                    fontFamily='Comic Sans MS, cursive'
                  >
                    Cat Years Old! 🐾
                  </Text>
                </Box>
                {classage && (
                  <Box
                    bgGradient='linear(to-r, #FFF8DC, #F5DEB3)'
                    borderRadius='20px'
                    p={4}
                    border='2px solid #F0E68C'
                  >
                    <Text
                      fontSize='xl'
                      color='orange.600'
                      fontWeight='bold'
                      fontFamily='Comic Sans MS, cursive'
                      textShadow='1px 1px 0px #FFF'
                    >
                      Category: {classage} ✨
                    </Text>
                  </Box>
                )}
              </VStack>
            </ModalBody>

            <ModalFooter textAlign='center' flexDirection='column' gap={4}>
              <Text
                fontSize='lg'
                color='green.600'
                fontFamily='Comic Sans MS, cursive'
                fontWeight='bold'
                textShadow='1px 1px 0px rgba(255,255,255,0.8)'
              >
                Make sure to appreciate your furry friend! 💕
              </Text>
              <Text
                fontSize='md'
                color='green.500'
                fontFamily='Comic Sans MS, cursive'
                textAlign='center'
              >
                Cats age differently than humans - they mature faster in their early years! 🐾
              </Text>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )
    }
  }

  let inputHandler = (event) => {
    event.preventDefault()
    if (data) {

      let stringData = JSON.stringify(data);
      let actualData = JSON.parse(stringData);
      if ((actualData.person.toLowerCase()).includes('alisha') && (actualData.petname.toLowerCase()).includes('baby')) {
        setIsManja(() => true);
      }
      CatCalculator(actualData.petage)

    }

    setShow(() => true);


  }


  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    if (!data) {
      setData(prevData => {
        return { [name]: value }
      })
    }
    else {
      setData(prevData => {
        return { ...prevData, [name]: value }
      })
    }
  }
  return (
    <ChakraProvider theme={theme} >
      <VStack
        w='100%'
        minH='100vh'
        bgGradient='linear(to-br, #FFF8F5, #F0F8FF, #F8F4FF)'
        spacing={6}
        py={8}
      >
        <Box
          p={8}
          maxW='600px'
          w='90%'
          bgGradient='linear(to-r, #FFE4E1, #F5DEB3, #E6E6FA)'
          borderRadius='50px'
          boxShadow='0 15px 35px rgba(0, 0, 0, 0.1)'
          border='3px solid #FFFFFF'
          textAlign='center'
          position='relative'
          _before={{
            content: '""',
            position: 'absolute',
            top: '-8px',
            left: '-8px',
            right: '-8px',
            bottom: '-8px',
            bgGradient: 'linear(to-r, #F0E68C, #DDA0DD, #B0C4DE)',
            borderRadius: '58px',
            zIndex: -1,
            opacity: 0.3
          }}
        >
          <VStack spacing={4}>
            <Text fontSize='6xl' animation='bounce 2s infinite'>🐱</Text>
            <Heading
              fontSize='4xl'
              color='gray.700'
              fontFamily='Comic Sans MS, cursive'
              textShadow='2px 2px 0px #FFF'
              fontWeight='900'
            >
              🐾 Cat Age Calculator 🐾
            </Heading>
            <Text
              color='gray.600'
              fontSize='xl'
              fontWeight='bold'
              fontFamily='Comic Sans MS, cursive'
            >
              ✨ Discover how OLD your furry friend really is! ✨
            </Text>
          </VStack>
        </Box>
        <Box
          p={6}
          maxW='500px'
          w='90%'
          bgGradient='linear(to-b, #FFFFFF, #F8F8FF, #F0F8FF)'
          borderRadius='40px'
          boxShadow='0 10px 30px rgba(0, 0, 0, 0.1)'
          border='2px solid #E6E6FA'
          position='relative'
          _before={{
            content: '""',
            position: 'absolute',
            top: '-6px',
            left: '-6px',
            right: '-6px',
            bottom: '-6px',
            bgGradient: 'linear(to-r, #F5F5F5, #E6E6FA, #F0F8FF)',
            borderRadius: '46px',
            zIndex: -1,
            opacity: 0.5
          }}
        >
          <form onSubmit={inputHandler}>
            <VStack spacing={8}>
              <VStack spacing={4} w='100%'>
                <Box
                  bgGradient='linear(to-r, #FFF8DC, #F5DEB3)'
                  p={4}
                  borderRadius='25px'
                  border='2px solid #F0E68C'
                  w='100%'
                >
                  <VStack spacing={3}>
                    <Text
                      fontSize='2xl'
                      fontWeight='900'
                      color='orange.600'
                      fontFamily='Comic Sans MS, cursive'
                      textShadow='1px 1px 0px #FFF'
                    >
                      👤 Your Info
                    </Text>
                    <Text
                      color='orange.500'
                      fontWeight='bold'
                      fontFamily='Comic Sans MS, cursive'
                    >
                      What's your name? ✨
                    </Text>
                    <Input
                      name='person'
                      bg='white'
                      size='lg'
                      borderRadius='20px'
                      border='2px solid #F0E68C'
                      fontFamily='Comic Sans MS, cursive'
                      _hover={{ borderColor: 'orange.400', transform: 'scale(1.02)' }}
                      _focus={{ borderColor: 'orange.500', boxShadow: '0 0 0 3px rgba(255, 218, 185, 0.4)' }}
                      isRequired
                      onChange={handleChange}
                      placeholder="Enter your name..."
                    />
                  </VStack>
                </Box>

                <Box
                  bgGradient='linear(to-r, #F0FFF0, #E6F3E6)'
                  p={4}
                  borderRadius='25px'
                  border='2px solid #98FB98'
                  w='100%'
                >
                  <VStack spacing={3}>
                    <Text
                      fontSize='2xl'
                      fontWeight='900'
                      color='green.600'
                      fontFamily='Comic Sans MS, cursive'
                      textShadow='1px 1px 0px #FFF'
                    >
                      🐱 Pet Details
                    </Text>

                    <FormControl isRequired>
                      <VStack spacing={4}>
                        <VStack spacing={2}>
                          <Text
                            color='green.600'
                            fontWeight='bold'
                            fontFamily='Comic Sans MS, cursive'
                          >
                            What is your cat's name? 🐾
                          </Text>
                          <Input
                            name='petname'
                            bg='white'
                            size='lg'
                            borderRadius='20px'
                            border='2px solid #98FB98'
                            fontFamily='Comic Sans MS, cursive'
                            _hover={{ borderColor: 'green.400', transform: 'scale(1.02)' }}
                            _focus={{ borderColor: 'green.500', boxShadow: '0 0 0 3px rgba(152, 251, 152, 0.4)' }}
                            required
                            onChange={handleChange}
                            placeholder="Fluffy, Whiskers, etc..."
                          />
                        </VStack>

                        <VStack spacing={2}>
                          <Text
                            color='green.600'
                            fontWeight='bold'
                            fontFamily='Comic Sans MS, cursive'
                          >
                            How old is your cat in human years? 🎂
                          </Text>
                          <Input
                            name='petage'
                            type='number'
                            bg='white'
                            size='lg'
                            borderRadius='20px'
                            border='2px solid #98FB98'
                            fontFamily='Comic Sans MS, cursive'
                            _hover={{ borderColor: 'green.400', transform: 'scale(1.02)' }}
                            _focus={{ borderColor: 'green.500', boxShadow: '0 0 0 3px rgba(152, 251, 152, 0.4)' }}
                            required
                            onChange={handleChange}
                            placeholder="e.g. 2, 5.5, etc..."
                            min="0"
                            max="30"
                            step="0.1"
                          />
                        </VStack>
                      </VStack>
                    </FormControl>
                  </VStack>
                </Box>
              </VStack>

              <Button
                type='submit'
                onClick={onOpen}
                size='lg'
                bgGradient='linear(to-r, #B0E0E6, #ADD8E6, #AFEEEE)'
                color='white'
                borderRadius='30px'
                fontSize='xl'
                fontWeight='bold'
                fontFamily='Comic Sans MS, cursive'
                textShadow='2px 2px 2px rgba(0,0,0,0.2)'
                _hover={{
                  bgGradient: 'linear(to-r, #ADD8E6, #AFEEEE, #B0E0E6)',
                  transform: 'scale(1.05)',
                  boxShadow: '0 8px 20px rgba(176, 224, 230, 0.3)'
                }}
                _active={{ transform: 'scale(0.95)' }}
                px={8}
                py={4}
              >
                🐾 Calculate Age! 🐾
              </Button>

              <NormalPopUp />
            </VStack>
          </form>
        </Box>

        <Box
          p={6}
          maxW='600px'
          w='90%'
          bgGradient='linear(to-b, #FFFFFF, #F8F8FF)'
          borderRadius='30px'
          boxShadow='0 8px 25px rgba(0, 0, 0, 0.08)'
          border='2px solid #E6E6FA'
          mt={8}
        >
          <VStack spacing={6}>
            <Text
              fontSize='2xl'
              fontWeight='900'
              color='gray.700'
              fontFamily='Comic Sans MS, cursive'
              textShadow='1px 1px 0px #FFF'
              textAlign='center'
            >
              📚 How Cat Age Calculation Works
            </Text>

            <Box
              bgGradient='linear(to-r, #FFF8DC, #F5DEB3)'
              p={4}
              borderRadius='20px'
              border='2px solid #F0E68C'
              w='100%'
            >
              <VStack spacing={3} align='start'>
                <Text
                  fontSize='lg'
                  fontWeight='bold'
                  color='orange.600'
                  fontFamily='Comic Sans MS, cursive'
                >
                  🧮 The Scientific Formula
                </Text>
                <Text
                  color='orange.500'
                  fontFamily='Comic Sans MS, cursive'
                  lineHeight='tall'
                >
                  Our calculator uses veterinary science to convert human years to cat years:
                </Text>
                <VStack spacing={2} align='start' pl={4}>
                  <Text
                    color='orange.500'
                    fontFamily='Comic Sans MS, cursive'
                    fontSize='sm'
                  >
                    • <strong>First year:</strong> 1 human year = 15 cat years
                  </Text>
                  <Text
                    color='orange.500'
                    fontFamily='Comic Sans MS, cursive'
                    fontSize='sm'
                  >
                    • <strong>Second year:</strong> Additional 9 cat years (total: 24)
                  </Text>
                  <Text
                    color='orange.500'
                    fontFamily='Comic Sans MS, cursive'
                    fontSize='sm'
                  >
                    • <strong>Each year after:</strong> Additional 4 cat years
                  </Text>
                </VStack>
              </VStack>
            </Box>

            <Box
              bgGradient='linear(to-r, #F0FFF0, #E6F3E6)'
              p={4}
              borderRadius='20px'
              border='2px solid #98FB98'
              w='100%'
            >
              <VStack spacing={3} align='start'>
                <Text
                  fontSize='lg'
                  fontWeight='bold'
                  color='green.600'
                  fontFamily='Comic Sans MS, cursive'
                >
                  📊 Age Categories
                </Text>
                <VStack spacing={2} align='start' pl={4}>
                  <Text
                    color='green.600'
                    fontFamily='Comic Sans MS, cursive'
                    fontSize='sm'
                  >
                    • <strong>Kitten:</strong> 0-6 months (very young cats)
                  </Text>
                  <Text
                    color='green.600'
                    fontFamily='Comic Sans MS, cursive'
                    fontSize='sm'
                  >
                    • <strong>Junior:</strong> 6 months - 2 years (adolescent cats)
                  </Text>
                  <Text
                    color='green.600'
                    fontFamily='Comic Sans MS, cursive'
                    fontSize='sm'
                  >
                    • <strong>Adult:</strong> 2-7 years (mature cats)
                  </Text>
                  <Text
                    color='green.600'
                    fontFamily='Comic Sans MS, cursive'
                    fontSize='sm'
                  >
                    • <strong>Mature:</strong> 7-10 years (middle-aged cats)
                  </Text>
                  <Text
                    color='green.600'
                    fontFamily='Comic Sans MS, cursive'
                    fontSize='sm'
                  >
                    • <strong>Senior:</strong> 10+ years (older cats)
                  </Text>
                </VStack>
              </VStack>
            </Box>

            <Box
              bgGradient='linear(to-r, #F0F8FF, #E6E6FA)'
              p={4}
              borderRadius='20px'
              border='2px solid #B0C4DE'
              w='100%'
            >
              <VStack spacing={3} align='start'>
                <Text
                  fontSize='lg'
                  fontWeight='bold'
                  color='blue.600'
                  fontFamily='Comic Sans MS, cursive'
                >
                  💡 Why This Formula?
                </Text>
                <Text
                  color='blue.500'
                  fontFamily='Comic Sans MS, cursive'
                  lineHeight='tall'
                  fontSize='sm'
                >
                  Cats mature much faster than humans in their early years. A 1-year-old cat is equivalent to a 15-year-old human in terms of development and aging. After their first couple of years, cats age more slowly - about 4 cat years for every human year.
                </Text>
                <Text
                  color='blue.500'
                  fontFamily='Comic Sans MS, cursive'
                  fontSize='sm'
                  fontStyle='italic'
                >
                  *Results are approximate and individual cats may vary based on breed, health, and lifestyle.
                </Text>
              </VStack>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </ChakraProvider>
  );
}

export default App;

