import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Cart = () => {

    function createData(product_name, price, image, quantity) {
        return { product_name, price, image, quantity };
    }

    const rows = [
        createData('Samsung F22', 25000, "./images/cart_image/samsung2.jpg", 3),
        createData('Real Me', 20000, "./images/cart_image/realme.png", 2),
        createData('Acer Laptop', 125000, "./images/cart_image/acer.jfif", 4),
        createData('Asus', 135000, "./images/cart_image/asus.jpg", 1),
        createData('Macbook', 225000, "./images/cart_image/macbook.jfif", 2),
    ];


    return (
        <div>


            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, maxWidth: 1200, margin: 'auto', marginY: '20px' }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: "#000" }}>
                            <TableCell sx={{ color: "#fff" }} align='center'>S.No.</TableCell>
                            <TableCell sx={{ color: "#fff" }} align='center'>Product Image</TableCell>
                            <TableCell sx={{ color: "#fff" }} align='center'>Product Name</TableCell>
                            <TableCell sx={{ color: "#fff" }} align='center'>Unit Price</TableCell>
                            <TableCell sx={{ color: "#fff" }} align='center'>Quantity</TableCell>
                            <TableCell sx={{ color: "#fff" }} align='center'>Total Price</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, i) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" align='center'>
                                    {i+1}
                                </TableCell>
                                <TableCell component="th" scope="row" align='center'>
                                    <img src={row.image} alt={row.product_name} style={{height: '100px'}}/>
                                </TableCell>
                                <TableCell component="th" scope="row" align='center'>
                                    {row.product_name}
                                </TableCell>
                                <TableCell component="th" scope="row" align='center'>
                                    Rs. {row.price}
                                </TableCell>
                                <TableCell component="th" scope="row" align='center'>
                                    {row.quantity}
                                </TableCell>
                                <TableCell component="th" scope="row" align='center'>
                                    Rs. {row.price * row.quantity}
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

export default Cart