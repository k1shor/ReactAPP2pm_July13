import { Book, Home, Share } from '@mui/icons-material'
import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'

const Contact = () => {
    return (
        <>
            <Container sx={{ padding: 5, backgroundColor: '#dddd33' }} maxWidth={'lg'}>
                <Box display={'flex'}>
                    <Box width={'50%'} backgroundColor='#f5d7db' padding={5}>
                        <Typography variant='h4' sx={{ textDecoration: 'underline' }} color={'secondary'}>
                            Address:
                        </Typography>

                        <Typography variant='h4' color={'secondary'}>
                            Our Store
                        </Typography>

                        <Typography variant='h5' color={'secondary'}>
                            Jamal, Kathmandu
                        </Typography>

                        <Typography variant='h5' color={'secondary'}>
                            Phone: 5358003
                        </Typography>

                        <Typography variant='h5' color={'secondary'}>
                            Email: info@ourstore.com.np
                        </Typography>
                    </Box>
                    <Box width={'50%'} backgroundColor='#6da5c0' padding={5}>
                        <Typography variant='h4' sx={{ textDecoration: 'underline' }} color={'secondary'}>
                            Contact Form
                        </Typography>

                        <TextField variant='outlined' label='Email' color={'secondary'} fullWidth required placeholder='enter your email here' />
                        <TextField variant='outlined' label='Subject' color={'secondary'} fullWidth required placeholder='Subject' sx={{marginTop:1}} />
                        <TextField variant='outlined' label='Body' color={'secondary'} fullWidth required placeholder='Body' sx={{marginTop:1}} multiline rows={4}/>
                        <hr/>
                        <Button variant='contained' color='secondary' fullWidth size='large' startIcon={<Share/>} endIcon={<Book/>}>Submit <Home/>  </Button>
                    </Box>
                </Box>
                <Box p={4}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.240249574041!2d85.31233177465765!3d27.709867525381874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb193edf6bd2af%3A0x44ac26fce7c33d8c!2sDursikshya%20Education%20Network!5e0!3m2!1sen!2snp!4v1687854162264!5m2!1sen!2snp" style={{width:"100%", height: "450px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    
                </Box>





            </Container>

        </>
    )
}

export default Contact