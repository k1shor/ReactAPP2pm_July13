import { Box, Typography } from '@mui/material'
import React from 'react'

const FAQs = () => {
    return (
        <>
            <Box sx={{ backgroundColor: 'success.light' }} m={5} p={3}>
                <Typography fontSize={'40px'} variant='h3' color={'#fafafa'} textAlign={'center'} sx={{textDecoration:"underline"}}>
                    FAQS
                </Typography>
                <Box p={3} border={3} borderColor={'gray'} borderRadius={3}  className='bg-danger-subtle'  marginY={5} 
                sx = {{
                    "&:hover":{
                        boxShadow:'0 10px 5px -5px gray',
                        transform: 'translateY(-10px)',
                        transition: '1s'
                    }
                }}
                >
                    <Typography variant='h5' color={'secondary'}>
                        <b><u>Question</u></b> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique rem repudiandae laboriosam ut, nemo tenetur, vel sed iusto at est nesciunt atque illum neque sequi.
                    </Typography>
                    <Typography variant='h5' color={'success.light'}>
                        <b><u>Answer</u></b> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique rem repudiandae laboriosam ut, nemo tenetur, vel sed iusto at est nesciunt atque illum neque sequi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, itaque!
                    </Typography>
                </Box>

                <Box p={3} border={3} borderColor={'gray'} borderRadius='15px'  className='bg-danger-subtle'>
                    <Typography variant='h5' color={'secondary'}>
                        <b><u>Question</u></b> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique rem repudiandae laboriosam ut, nemo tenetur, vel sed iusto at est nesciunt atque illum neque sequi.
                    </Typography>
                    <Typography variant='h5' color={'success.light'}>
                        <b><u>Answer</u></b> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique rem repudiandae laboriosam ut, nemo tenetur, vel sed iusto at est nesciunt atque illum neque sequi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, itaque!
                    </Typography>
                </Box>
            </Box>

        </>
    )
}

export default FAQs