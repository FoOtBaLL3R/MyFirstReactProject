import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Input, 
    Textarea,
    FormControl,
    FormLabel,
  } from '@chakra-ui/react'
import React, { useEffect, useState, } from 'react'

export default function UpdateNoteForm({isOpen, onClose, noteValue, noteUpdate}) {
    
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [dateTime, setDateTime] = useState("");

    useEffect(() => {
      console.log(noteValue);
      setTitle(noteValue?.name ?? "");
      setDesc(noteValue?.description ?? "");
      setDateTime(noteValue?.createdAt ?? "");
    }, [noteValue, isOpen]);

    const updateNot = (e) => {
        e.preventDefault();
        
        const noteData = {
          id: noteValue.id,
          name: title,
          description: desc,
          createdAt: dateTime
        };
        noteUpdate(noteData);
      };
    
  
    return (
      <>
          
        <Modal
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit your note</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Name of the note</FormLabel>
                <Input  
                    placeholder='Name of the note'                    
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />                
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Description of note</FormLabel>
                <Textarea 
                    placeholder='Description of note' 
                    onChange={(e) => setDesc(e.target.value)}                    
                    value={desc}
                />
              </FormControl>

              <FormControl mt={3}>
                <FormLabel>Datetime of note</FormLabel>
                <Input 
                    type='datetime-local'
                    placeholder='Datetime of note' 
                    onChange={(e) => setDateTime(e.target.value)}                    
                    value={dateTime.slice(0, 19)}
                />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button onClick={updateNot} colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )

}