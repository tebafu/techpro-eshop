import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct, clearCart } from "../cartSlice";
import { Paper, Typography, List, ListItem, ListItemText, Divider, Button, Box } from "@mui/material";

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.products);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeProduct({ _id: id }));
    };

    const handleClear = () => {
        dispatch(clearCart());
    };

    return (
        <div>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h6" gutterBottom>
                    Your Cart
                </Typography>
                <Button variant="outlined" color="error" onClick={handleClear}>
                    Clear cart
                </Button>
            </Box>

            <List>
                {cartItems.map((item) => (
                    <div key={item._id}>
                        <ListItem>
                            <ListItemText primary={item.name} secondary={`Quantity: ${item.quantity}`} />
                            <Typography variant="body1" sx={{ marginRight: "2rem" }}>
                                ${item.price.toFixed(2)}
                            </Typography>
                            <Button variant="outlined" color="error" onClick={() => handleRemove(item._id)}>
                                Remove
                            </Button>
                        </ListItem>
                        <Divider />
                    </div>
                ))}
            </List>
        </div>
    );
};

export default Cart;
