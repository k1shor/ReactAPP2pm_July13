import { AttachMoney, Bookmark, BookmarkBorder, BookmarkOutlined, ShoppingBag } from '@mui/icons-material'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, List, ListItem, Radio, RadioGroup, Typography } from '@mui/material'
import React from 'react'

const Deals = () => {

    function createData(product_name, price, image, quantity) {
        return { product_name, price, image, quantity };
    }

    const products = [
        createData('Samsung F22', 25000, "./images/cart_image/samsung2.jpg", 3),
        createData('Real Me', 20000, "./images/cart_image/realme.png", 2),
        createData('Acer Laptop', 125000, "./images/cart_image/acer.jfif", 4),
        createData('Asus', 135000, "./images/cart_image/asus.jpg", 1),
        createData('Macbook', 225000, "./images/cart_image/macbook.jfif", 2),
        createData('Macbook', 225000, "./images/cart_image/macbook.jfif", 2),
        createData('Macbook', 225000, "./images/cart_image/macbook.jfif", 2),
    ];


    return (
        <>
            <Grid container>
                <Grid item xs={12} md={4} sm={6} lg={3} sx={{ backgroundColor: '#ffddaa' }} padding={3}>
                    <Typography variant='h4'>
                        Category
                    </Typography>
                    {/* <List>
                <ListItem>
                    <FormGroup
                </ListItem>
            </List> */}

                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked
                            icon={<BookmarkBorder />}
                            checkedIcon={<Bookmark />} />} label="Mobiles" />

                        <FormControlLabel control={<Checkbox icon={<BookmarkBorder />}
                            checkedIcon={<Bookmark />} />} label="Laptops" />

                        <FormControlLabel control={<Checkbox icon={<BookmarkBorder />}
                            checkedIcon={<Bookmark />} />} label="Home" />

                        <FormControlLabel control={<Checkbox icon={<BookmarkBorder />}
                            checkedIcon={<Bookmark />} />} label="Kitchen" />

                        <FormControlLabel control={<Checkbox icon={<BookmarkBorder />}
                            checkedIcon={<Bookmark />} />} label="Accessories" />
                    </FormGroup>

                    <FormControl sx={{ marginTop: 5 }}>
                        <FormLabel id="demo-radio-buttons-group-label">
                            <Typography variant='h4'>
                                Price
                            </Typography>
                        </FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="All"
                            name="price-group"
                        >
                            <FormControlLabel value="All" control={<Radio icon={<BookmarkBorder />} checkedIcon={<Bookmark />} />} label="All" />
                            <FormControlLabel value="0" control={<Radio />} label="Upto $100" />
                            <FormControlLabel value="1" control={<Radio />} label="$100 - $500" />
                            <FormControlLabel value="2" control={<Radio />} label="$500 - $1000" />
                            <FormControlLabel value="3" control={<Radio />} label="$1000 - $10000" />
                            <FormControlLabel value="4" control={<Radio />} label="Above $10000" />

                        </RadioGroup>
                    </FormControl>




                </Grid>
                <Grid item xs={12} md={8} sm={6} lg={9} sx={{ backgroundColor: '#ddffaa' }}>
                    <Grid container padding={5} spacing={'10px'}>
                        {
                            products.map(product => {
                                return <Grid xs={12} md={6} lg={4}>
                                    <Card sx={{ maxWidth: 300, marginBottom: 5, paddingTop: 3 }}>
                                        <CardMedia
                                            sx={{ height: 200 }}
                                            image={product.image}
                                            title={product.product_name}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {product.product_name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {product.price}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Box display='flex' justifyContent={'space-between'} width={'100%'}>
                                                <Button size="small" startIcon={<AttachMoney />}>Buy Now</Button>
                                                <Button size="small" endIcon={<ShoppingBag/>}>Add to Cart</Button>
                                            </Box>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            })
                        }

                    </Grid>
                </Grid>
            </Grid>

        </>
    )
}

export default Deals