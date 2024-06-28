import { Card, CardHeader, Heading, Divider, CardBody, Text, CardFooter, IconButton } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import moment from "moment/moment"
 
export default function Note({myNotes, noteDelete, noteEdt}) {
    
    return (
        <>
        
        {myNotes.map((n) => (

            <li key={n.id}>
                <Card variant={'filled'} >
                    <CardHeader alignItems="right">
                        <Heading size={'md'}>
                            {n.name} 
                            <IconButton 
                                top="-1"
                                variant='outline' 
                                colorScheme='red'  
                                ml="15"
                                aria-label='Delete'
                                icon={<DeleteIcon />} 
                                onClick={() => noteDelete(n.id)}
                            />
                            <IconButton
                                top="-1" 
                                variant='outline' 
                                colorScheme='yellow'  
                                ml="15"
                                aria-label='Edit'
                                icon={<EditIcon />}                                 
                                onClick={() => noteEdt(n)}
                            />                            
                        </Heading>
                    </CardHeader>
                    <Divider borderColor={'gray'} />
                    <CardBody>
                        <Text>{n.description}</Text>              
                    </CardBody>
                    <Divider borderColor={'gray'} />
                    <CardFooter>{moment(n.createAt).format("LLL")}</CardFooter>
                </Card>
          
            </li>
        ))}
        </>
        
        
    )
    
}