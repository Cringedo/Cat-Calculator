import React, { useState, useRef } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  HStack, 
  Code,
  Grid,
  theme,
  Heading,
  Spacer,
  Container,
  Center,
  Input,
  Button,
  Stack,
  FormControl,
  FormHelperText,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import "@fontsource/roboto";
import InfoInput from './Input';
import { computeStyles } from '@popperjs/core';
import { set } from 'lodash';
import { useDisclosure } from '@chakra-ui/react'
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';


function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  const showNow = false; 
  let old = 0
  
  function ShowAgeBruh(props){
    
    console.log("Show Modal Now: " + props.isShow);
    
  }

  function ShowAge(props){

    if(props.isShow){
      console.log('Show Now!')
      return <Box boxShadow={'base'} p={4}>
        <VStack>
        <Text color={'purple.700'}> Your cat is actually (in cat's age): </Text>
        <Text fontWeight={'extrabold'} color={'purple.700'} fontSize={40}> {age} </Text>    
        <Text color={'purple.700'}> Your cat is in category of : </Text>
        <Text fontWeight={'extrabold'} color={'purple.700'} fontSize={40}> {classage} </Text>
        </VStack>
            </Box>
    }
  }

  const result = () => {

  }
  
  function CatCalculator(age){
    age = parseFloat(age)
    let ageInCat = 0;
    let ageInClass = 'Please input without the decimal!'
  
    if(age > 0){
      if(age < 4){
        switch (age) {
          case 1:
            ageInCat = 15
            ageInClass = 'Junior'
            break;
          
          case 1.5:
            ageInCat = 21
            ageInClass = 'Junior'
            break;

          case 2:
            ageInCat = 24
            ageInClass = 'Junior'
            break;

          case 3:
            ageInCat = 28
            ageInClass = 'Adult'
            break;
        }
        
      }
      else{
        ageInCat = 28 + (age - 3)*4
        if(ageInCat < 44){
          ageInClass = 'Adult'
        }
        else if(ageInCat < 60){
          ageInClass = 'Mature'
        }
        else{
          ageInClass = 'Super Senior'
        }
      }
      console.log('Age: ' + ageInCat);
      setAge(() => ageInCat);
      setClassage(() => ageInClass);
      
    }
    else{
      console.log('Trolled!');
    }

    
    
  }

  const [data, setData] = useState();
  const [isShow, setShow] = useState(Boolean);
  const [age, setAge] = useState();
  const [classage, setClassage] = useState();
  const [isManja, setIsManja] = useState(Boolean);

  let yes = true;

  const ManjaDetector = (props) => {

    return (
    <>
      <Modal isOpen={onOpen} onClose={onClose} size={'xs'}  >
        <ModalOverlay />
        <ModalContent bg='purple.200'>
          <ModalHeader> Manja aye buat apa tu </ModalHeader>
          <ModalCloseButton />
          <ModalBody fontSize={20} textAlign='center'>
            Ni lah apa yang saya buat selama ini, hehehehehe love u sayang aye comel sungguh muah muah muah
          </ModalBody>

          <ModalFooter textAlign={'center'}>
            Sorry for being not epic before this, i think this week mungkin aye gunting rambut?! LETSGOOOO!
          </ModalFooter>
          <Button onClick={() => setIsManja(() => false)}> Love you juga sayang saya Nabilku </Button>

        </ModalContent>
      </Modal>
    </>
    )
  }

  const NormalPopUp = (props) =>{

    if(isManja){
      return <ManjaDetector />
    }
    else{
      return (
        <Modal isOpen={isOpen} onClose={onClose} size={'xs'}  >
          <ModalOverlay />
          <ModalContent bg='purple.200'>
            <ModalHeader>Your cat is .. </ModalHeader>
            <ModalCloseButton />
            <ModalBody fontSize={60} textAlign='center'>
              {age}
            </ModalBody>

            <ModalFooter textAlign={'center'}>
              Make sure to appreciate your 'oldie' cat! You can find more details below about the cheeto age.
            </ModalFooter>
          </ModalContent>
          </Modal>
        )
    }
  }

  let inputHandler = (event) => {
    event.preventDefault()
    if(data){
    
      let stringData =  JSON.stringify(data);
      //alert("You've submitted your informations! \n" + stringData)
      let actualData = JSON.parse(stringData);
      console.log((actualData.person.toLowerCase()).includes('alisha'))
      if((actualData.person.toLowerCase()).includes('alisha') && (actualData.petname.toLowerCase()).includes('baby')){
        setIsManja(() => true);
      }
      console.log('Cat is actual ' + actualData.petage);
      CatCalculator(actualData.petage)
      
    }
    else{
      //alert('Fill in the fields and stop trolling?')
    }
    
    setShow(() => true);
    

  }

  
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    
    if(!data){
      console.log("New Data! ")
      setData(prevData => {
        return {[name]:value}
      })
    }
    else{
      setData(prevData => {
        return {...prevData, [name]:value}
      })
    }
  }
  
  let isDone = false;
  function runInput(){
    console.log('Running Input.. ');
    isDone = !isDone;
  }
  
  return (
    <ChakraProvider theme={theme}>
      <VStack>
        <Box p={5} w='100%' bgGradient='linear(to-r, purple.200, purple.300)' textAlign={'center'}>
          <VStack spacing={5}> 
            <Heading color={'purple.400'} textShadow='2px 1px #2D3748'> Cat Age Calculator </Heading>
            <Text color={'purple.700'} fontWeight={'extrabold'}> A converter to help figuring out how old the hell your cat actually is!</Text>
          </VStack>
        </Box>
        <Box p={1} boxShadow={'base'} textAlign={'center'} w='95%'>

          {/* Form Start */}
          <form onSubmit={inputHandler}> 
            <Box p={10} bg={'purple.100'} textAlign={'center'}> 

              <VStack spacing={'10'}>
                <VStack align>
                  <Text fontWeight={'extrabold'} color={'purple.700'}> USER </Text>

                    <Text color={'purple.700'}> Name </Text> 
                    <Input name='person' bg={'white'} size='md' isRequired onChange={handleChange}/>
                  
                </VStack>
                <VStack direction={'row'} align>
                <Text fontWeight={'extrabold'} color={'purple.700'}> PET </Text>
                  
                  <FormControl isRequired>
                    <VStack spacing={3}>
                    <Text color={'purple.700'}> Name </Text> 
                    <Input name='petname' bg={'white'} size='md' required onChange={handleChange}/>

                    <Text color={'purple.700'}> Age in Human Year </Text> 
                    <Input name='petage' bg={'white'} size='md' required onChange={handleChange}/>
                    </VStack>
                  </FormControl>
                  
                </VStack>

                <Button left={'30%'} bottom={'20%'} type='submit' onClick={onOpen}> Continue </Button>
                <ShowAge isShow={isShow}/>
                
                {/* This is for the modal pop-up! */}
                {/* <Modal isOpen={isOpen} onClose={onClose} size={'xs'}  >
                  <ModalOverlay />
                  <ModalContent bg='purple.200'>
                    <ModalHeader>Your cat is .. </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody fontSize={60} textAlign='center'>
                      {age}
                    </ModalBody>

                    <ModalFooter textAlign={'center'}>
                      Make sure to appreciate your 'oldie' cat! You can find more details below about the cheeto age.
                    </ModalFooter>
                  </ModalContent>
                </Modal> */}

                <NormalPopUp />

              </VStack>
              
              <Spacer/>
              
              
            </Box>
          </form>

        </Box>
      </VStack>
    </ChakraProvider>
  );
}

export default App;

