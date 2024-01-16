import React from "react";
import { Paper, Typography, List, ListItem, ListItemText, Divider } from "@mui/material";

const Cart = ({ cartItems }) => {
    return (
        <div>
            <Typography variant="h6" gutterBottom>
                Your Cart
            </Typography>
            <List>
                {cartItems.map((item) => (
                    <div key={item._id}>
                        <ListItem>
                            <ListItemText primary={item.name} secondary={`Quantity: ${item.quantity}`} />
                            <Typography variant="body1">${item.price.toFixed(2)}</Typography>
                        </ListItem>
                        <Divider />
                    </div>
                ))}
            </List>
        </div>
    );
};

export default Cart;
