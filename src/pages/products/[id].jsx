import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Grid, Typography, Paper, Button, Stack, Box, CircularProgress } from "@mui/material";
import { red } from "@mui/material/colors";
import Image from "next/image";

const Product = () => {
    const [product, setProduct] = useState();

    const router = useRouter();
    const id = router.query.id;

    useEffect(() => {
        fetch("http://localhost:8080/api/products")
            .then((res) => res.json())
            .then((json) => setProducts(json))
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    if (!product) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", paddingTop: 16 }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <>
            <Paper elevation={3} style={{ padding: "20px" }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <div
                            style={{
                                backgroundColor: "#eee",
                                height: "300px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Image
                                src={`https://picsum.photos/1000?random=${product._id}`}
                                alt={product.productName}
                                width={300}
                                height={300}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack
                            spacing={2}
                            justifyContent="space-between"
                            useFlexGap
                            sx={{ height: "100%", paddingY: 4 }}
                        >
                            <Typography variant="h4" gutterBottom>
                                {product.productName}
                            </Typography>
                            <div>
                                <Typography variant="subtitle1" gutterBottom>
                                    <strong>Category:</strong> {product.category}
                                </Typography>

                                <Typography variant="body1" paragraph>
                                    {product.description}
                                </Typography>
                            </div>

                            <div>
                                <Typography variant="h6" color="textSecondary" gutterBottom>
                                    {product.isDiscounted ? (
                                        <span>
                                            <span style={{ textDecoration: "line-through", color: red[500] }}>
                                                ${product.price}
                                            </span>{" "}
                                            ${product.dPrice}
                                        </span>
                                    ) : (
                                        `$${product.price}`
                                    )}
                                </Typography>
                                <Typography variant="body1">
                                    <strong>Stock:</strong>{" "}
                                    {product.stock > 0 ? `${product.stock} Available` : "Out of Stock"}
                                </Typography>
                                <Button color="primary" variant="outlined" disabled={product.stock === 0}>
                                    Add to Cart
                                </Button>
                            </div>
                        </Stack>
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
};

export default Product;
