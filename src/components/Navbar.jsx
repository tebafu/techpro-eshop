import React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const Navbar = ({ setDrawerOpen }) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    TechPro
                </Typography>
                <Button color="inherit">
                    <Link href="/">Home</Link>
                </Button>
                <Button color="inherit">
                    <Link href="/products">Products</Link>
                </Button>
                <Button color="inherit">
                    <Link href="/checkout">Checkout</Link>
                </Button>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ ml: 2 }}
                    onClick={() => setDrawerOpen(true)}
                >
                    <ShoppingBasketIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
