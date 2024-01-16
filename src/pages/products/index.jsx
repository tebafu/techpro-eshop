import React, { useEffect, useState, useMemo } from "react";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import Filters from "@/components/Filters";
import ProductCard from "@/components/ProductCard";
import { sortProducts } from "@/utils/products";

const sortOptions = [
    {
        label: "Popularity",
        value: 0,
    },
    {
        label: "Price: Ascending",
        value: 1,
    },
    {
        label: "Price:Descending",
        value: 2,
    },
];

const Products = () => {
    const [products, setProducts] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [sortingOrder, setSortingOrder] = useState(0);

    useEffect(() => {
        fetch("http://localhost:8080/api/products")
            .then((res) => res.json())
            .then((json) => setProducts(json))
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const categories = products
        .reduce((categories, product) => {
            if (!categories.includes(product.category)) {
                categories.push(product.category);
            }
            return categories;
        }, [])
        .sort();

    const sortedProducts = sortProducts(products, sortingOrder);

    const filteredProducts =
        selectedCategories.length > 0
            ? sortedProducts.filter((product) => selectedCategories.includes(product.category))
            : sortedProducts;

    const renderProducts = filteredProducts.map((product) => (
        <Grid key={product._id} item xs={6} lg={4}>
            <ProductCard {...product} />
        </Grid>
    ));

    return (
        <Box>
            <Typography variant="h3" sx={{ textAlign: "center", marginBottom: 2 }}>
                Products
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Grid container spacing={2}>
                        {renderProducts}
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Filters
                        sortOptions={sortOptions}
                        categories={categories}
                        sortingOrder={sortingOrder}
                        selectedCategories={selectedCategories}
                        setSelectedCategories={setSelectedCategories}
                        setSortingOrder={setSortingOrder}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Products;
