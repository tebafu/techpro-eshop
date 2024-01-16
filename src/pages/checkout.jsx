import React, { useState } from "react";
import { Container, Grid, Paper, Typography, TextField, Button, Box } from "@mui/material";
import Cart from "@/components/Cart";

const Checkout = () => {
    const [form, setform] = useState({ name: "", email: "", phone: "", city: "", address: "", zipCode: "" });

    const cartItems = [
        { _id: "658d703815063e85c06eac42", name: "Air Fryer", price: 38.65, quantity: 1 },
        { _id: "658d961cc12f1a487453ac1a", name: "Nokia 510i", price: 450, quantity: 1 },
    ];

    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper style={{ padding: 20, marginBottom: 20 }}>
                        <Cart cartItems={cartItems} />
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper style={{ padding: 20 }}>
                        <Typography variant="h6" gutterBottom>
                            Your Details
                        </Typography>
                        <Box component="form" noValidate autoComplete="off">
                            <TextField
                                label="Name"
                                fullWidth
                                margin="normal"
                                value={form.name}
                                onChange={(e) =>
                                    setform((prev) => {
                                        return { ...prev, name: e.target.value };
                                    })
                                }
                            />
                            <TextField
                                label="Email"
                                fullWidth
                                margin="normal"
                                value={form.email}
                                onChange={(e) =>
                                    setform((prev) => {
                                        return { ...prev, email: e.target.value };
                                    })
                                }
                            />
                            <TextField
                                label="Phone"
                                fullWidth
                                margin="normal"
                                value={form.phone}
                                onChange={(e) =>
                                    setform((prev) => {
                                        return { ...prev, phone: e.target.value };
                                    })
                                }
                            />
                            <TextField
                                label="City"
                                fullWidth
                                margin="normal"
                                value={form.city}
                                onChange={(e) =>
                                    setform((prev) => {
                                        return { ...prev, city: e.target.value };
                                    })
                                }
                            />
                            <TextField
                                label="Address"
                                fullWidth
                                margin="normal"
                                value={form.address}
                                onChange={(e) =>
                                    setform((prev) => {
                                        return { ...prev, address: e.target.value };
                                    })
                                }
                            />
                            <TextField
                                label="Zip Code"
                                fullWidth
                                margin="normal"
                                value={form.zipCode}
                                onChange={(e) =>
                                    setform((prev) => {
                                        return { ...prev, zipCode: e.target.value };
                                    })
                                }
                            />
                            <Button
                                variant="outlined"
                                color="primary"
                                style={{ marginTop: 20 }}
                                onClick={() => {
                                    const payload = cartItems.map((product) => product._id);
                                    fetch("http://localhost:8080/api/orders/newOrder", {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify(payload),
                                    }).catch((error) => {
                                        console.error("Error:", error);
                                    });

                                    console.log(payload);
                                }}
                            >
                                Place Order
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Checkout;
