
import { useState } from 'react'
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Select,
    Flex, Text,
    VStack,
    Button,
    Menu,
    MenuButton,
    MenuList,
} from '@chakra-ui/react'

import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import React from 'react'

const MoodOption = ({ index }) => {
    const [selectedEmoji, setSelectedEmoji] = useState('grinning');
    function onClick(emoji) {
        console.log(emoji.id)
        setSelectedEmoji(emoji.id)
    }
    return (
        <FormControl id="text" isRequired w={'60%'}>
            <Flex flexDirection={'column'} gap={'20px'}>
                <Flex gap={'10px'}>
                    <Menu>
                        <MenuButton textAlign={'center'} as={Button} p={'0px'} variant={'solid'} colorScheme='gray' >
                            <em-emoji id={selectedEmoji} set="apple" size="2em"></em-emoji>
                        </MenuButton>
                        <MenuList>
                            <Picker data={data} onEmojiSelect={onClick} />

                        </MenuList>
                    </Menu>
                    <Input placeholder={`Option ${index}`} />
                </Flex>
            </Flex>
        </FormControl>
    )
}

const Layout = () => {

    const [type, setType] = useState('text')
    const [showEmoji, setShowEmoji] = useState(true)
    const [moodOptionCount, setMoodOptionCount] = useState(3)

    return (

        <>
            <Box mt={'50px'} width={'50%'}>
                <VStack alignItems={'flex-start'} gap={'20px'}>
                    <FormControl id="question" isRequired>
                        <FormLabel>Question</FormLabel>
                        <Input />
                    </FormControl>

                    <FormControl width={'50%'} id="type" isRequired>
                        <FormLabel>Type</FormLabel>
                        <Select placeholder="Select type"  onChange={(e) => setType(e.target.value)}>
                            <option value="text" selected='selected'>Text</option>
                            <option value="multiplechoice">Multiple Choice</option>
                            <option value="mood">Mood</option>
                            <option value="checkbox">Checkbox</option>
                            <option value="dropdown">Dropdown</option>
                        </Select>
                    </FormControl>


                    {type === 'text' ? (
                        <Flex gap={'20px'} w={'100%'}>
                            <FormControl id="text" isRequired w={'60%'}>
                                <FormLabel>Input Placeholder</FormLabel>
                                <Input />
                            </FormControl>

                            <FormControl id="text" isRequired w={'40%'}>
                                <FormLabel>Response Type</FormLabel>
                                <Select placeholder="Select type" onChange={(e) => setType(e.target.value)}>
                                    <option value="text" selected='selected'>Text</option>
                                    <option value="email">E-mail</option>
                                </Select>
                            </FormControl>
                        </Flex>

                    ) : type === 'multiplechoice' ? (
                        <VStack gap={'20px'} w={'100%'} flexDirection={'column'} alignItems={'flex-start'}>
                            <Text>
                                Options
                            </Text>
                            <FormControl id="text" isRequired w={'60%'} gap>
                                <Flex flexDirection={'column'} gap={'20px'}>
                                    <Input placeholder='Option 1' />
                                    <Input placeholder='Option 2' />
                                    <Input placeholder='Option 3' />
                                    <Input placeholder='Option 4' />
                                </Flex>

                            </FormControl>
                            <Button>
                                Add Another Option
                            </Button>
                        </VStack>

                    ) : type === 'mood' ? (
                        <VStack gap={'20px'} w={'100%'} flexDirection={'column'} alignItems={'flex-start'}>
                            <Text>
                                Options
                            </Text>
                            {
                                Array.from(Array(moodOptionCount).keys()).map((item, index) => (
                                    <MoodOption index={index + 1} />
                                ))
                            }
                            <Button onClick={
                                () => {
                                    setMoodOptionCount(moodOptionCount + 1)
                                }
                            }>
                                Add Another Option
                            </Button>
                        </VStack>
                    ) : (
                        <div></div>
                    )
                    }

                    <Button colorScheme='blue'>
                        Save Changes
                    </Button>
                </VStack>
            </Box>
        </>
    )
}

export default Layout