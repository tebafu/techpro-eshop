import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../cartSlice";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { red } from "@mui/material/colors";

const ProductCard = ({ _id, price, productName, discounted, dPrice }) => {
    const router = useRouter();
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(
            addProduct({
                _id,
                name: productName,
                price: discounted ? dPrice : price,
                quantity: 1,
            })
        );
    };
    const handleCardClick = () => {
        router.push(`/products/${_id}`);
    };

    return (
        <Card sx={{ maxWidth: 250 }}>
            <CardActionArea onClick={handleCardClick}>
                <CardMedia
                    component="img"
                    height="140"
                    image={`https://picsum.photos/200?random=${_id}`}
                    alt={productName}
                />
                <CardContent>
                    <Typography gutterBottom variant="body1" component="div">
                        {productName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Price:{" "}
                        {discounted ? (
                            <span>
                                <span style={{ textDecoration: "line-through", color: red[500] }}>${price}</span> $
                                {dPrice}
                            </span>
                        ) : (
                            <span>${price}</span>
                        )}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button sx={{ width: "100%" }} color="primary" onClick={handleAddToCart}>
                    Add to Cart
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
