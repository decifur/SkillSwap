import { useEffect, useState , Fragment } from 'react'
import { getDummyUsers, pickRandom } from "../utils";
import arrow from '../assets/arrow.svg'
import { BsSend } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import JSConfetti from 'js-confetti'


import {
  useDisclosure,
  Flex,
  Box,
  Text,
  Image,
  Center,
  Stack,
  Tag,
  TagLabel,
  Skeleton,
  SkeletonCircle,
  Button,
  chakra,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  Textarea,
  useColorModeValue,
  TagCloseButton,
  useToast

} from '@chakra-ui/react';
import { deleteActiveSkill } from '../slice/matchSlice';

function Matchmaking() {
  const primaryBg = useColorModeValue('#EBF2FF', '#404258');
  const secondaryBg = useColorModeValue('blue.500', 'blue.700');
  const [skillInput , setSkillInput] = useState('')
  const [matchedUser, setMatchedUser] = useState(false)
  const [matching, setMatching] = useState(true)
  const [loading, setLoading] = useState(true)
  const user = useSelector((state => state.user))
  const matches = useSelector((state => state.matches))
  const dispatch = useDispatch()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const jsConfetti = new JSConfetti()
  const toast = useToast();



  useEffect(() => {
    setTimeout(() => {
      setLoading(false);

    }, 1000)
    // eslint-disable-next-line
  }, [])

  const handleNewMatchRequest = () => {
    setMatching(true)
    const dummyUsers = getDummyUsers();
    const intervalID = setInterval(() => {
      setMatchedUser(pickRandom(dummyUsers))
    }, 200)
    setTimeout(() => {
      clearInterval(intervalID)
      setMatching(false)
      jsConfetti.addConfetti()
      toast({
        position: 'top-right',
        title: 'Match Found!',
        description: "We've found a match for you.",
        status: 'success',
        duration: 2000,
        isClosable: true,
      })

    }, 5000)
  }

  const SendIcon = chakra(BsSend)
  const imgSize = ['7rem', '8rem', '8.5rem']

  return (
    <>
      <Flex h="100vh" w="100%" py={['0', null, '6']} justify='center' align='center'>
        <Flex w={['100%', '100%', '70%']} bg={primaryBg} h={['100%']} align='center' direction="column" borderRadius={['0', null, '20']} left={['10%']} py={['8', null, null]} >
          <Text as='h1' fontSize={["3xl", null, "1.8rem"]} fontWeight={[null, null, 'semibold']} color="gray.500" m={['2', null, '12']}>
            {!matchedUser ? 'Find' : 'Here'} is your buddy
          </Text>
          <Flex pt={['4rem', null, '2rem']}>
            <Center gap={['4', '8', '12']}>
              <Box >
                <Image src={user.imageLink} alt='user image' borderRadius="full" h={imgSize} w={imgSize} objectFit='cover' />
                <Text textAlign="center">{user.firstName}</Text>
              </Box>
              <Image src={arrow} alt='user image' borderRadius="full" h={['6rem', '7rem', '40']} w={['6rem', '7rem', '40']} objectFit='cover' _dark={{ filter: 'invert(1)' }} />
              <Box >
                {matchedUser && <Image src={matchedUser.imageLink} key={matchedUser.imageLink} alt='user image' borderRadius="full" h={imgSize} w={imgSize} objectFit='cover' />}
                {loading && <SkeletonCircle borderRadius="full" h={imgSize} w={imgSize} objectFit='cover' />}
                {(!matchedUser && !loading) && <Flex borderRadius="full" h={imgSize} w={imgSize} fontSize={['4rem']} color='white' bg='green.200' justify='center' align='center'>?</Flex>}
                <Text textAlign="center">{matchedUser.firstName ? matchedUser.firstName + matchedUser.lastName : '???'}</Text>
              </Box>
            </Center>
          </Flex>
          <Flex m={['16', null, '4']} w='100%' align='center' direction='column'>
            <Text fontSize={['lg']}>Matched Skills</Text>
            <Stack direction='row' spacing={['8px']} my={['2']} align='center' justify='center'>
              {!matching ?
                (
                  <>
                    {
                      matchedUser.skills.map((skill) => {
                        return (<Fragment key={skill}> <Tag variant='solid' size={['sm', null, 'md']} colorScheme='purple'>
                          <TagLabel>{skill}</TagLabel>
                        </Tag></Fragment>)
                      })
                    }
                  </>) : (
                  <Stack direction='row' spacing={['8px']} mb={{ lg: '1' }} align='center' justify='center'>
                    <Skeleton height='20px' w='12' borderRadius={['md']} />
                    <Skeleton height='20px' w='12' borderRadius={['md']} />
                    <Skeleton height='20px' w='12' borderRadius={['md']} />
                  </Stack>
                )}
            </Stack>
          </Flex>
          <Flex direction='column' justify='center' gap={['4']} my={['25']}>
            {matchedUser ? (<><Button border='2px solid black' px={['12']} borderRadius='lg' isLoading={matching}>Send Message <SendIcon size='16' ml={['1']} pos='relative' top={['2px']} /></Button>
              <Button bg={secondaryBg} color='white' px={['12']} borderRadius='lg' onClick={handleNewMatchRequest} _hover={[null, null, { bg: 'blue.300' }]} isLoading={matching}>Request Rematch</Button></>) : (
              <Button bg={secondaryBg} color='white' px={['12']} borderRadius='lg' onClick={onOpen} _hover={[null, null, { bg: 'blue.300' }]} >Request Match</Button>
            )}
          </Flex>
        </Flex>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Find Your Buddy</ModalHeader>
            <ModalCloseButton />
            <ModalBody pos='relative'>
              <Input placeholder='Search Your Skill' value={skillInput} onChange={(e)=>{setSkillInput(e.target.value)}}/>
              <Flex direction='column' pos='absolute' h={['50%']} w={['50%']} bg='white' zIndex='3' left={['7%']} borderBottomRadius={['md']} border='1px' borderColor='gray.200' shadow='md' hidden={skillInput.length < 1}>

              </Flex>
              <Flex py='4' hidden={matches.active.skills.length < 1}>
             { matches.active.skills.map((skill) => {
                        return (<Fragment  key={skill}> <Tag variant='solid' size='sm' colorScheme='purple' mx='1'>
                          <TagLabel>{skill}</TagLabel>
                          <TagCloseButton onClick={()=>{dispatch(deleteActiveSkill(skill))}}/>
                        </Tag></Fragment>)
                      })}
              </Flex>
              <Textarea placeholder='add description' my={['3','4','5']} />
            </ModalBody>

            <ModalFooter>
              <Button variant="ghost" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme='blue' onClick={() => { onClose(); handleNewMatchRequest() }}>Find</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </>
  )
}

export default Matchmaking