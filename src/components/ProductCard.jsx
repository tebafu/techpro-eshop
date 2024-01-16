import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { red } from "@mui/material/colors";

const ProductCard = ({ _id, price, productName, isDiscounted, dPrice }) => {
    const router = useRouter();

    const handleAddToCart = () => {
        console.log("Added to cart: ", _id);
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
                        {isDiscounted ? (
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
