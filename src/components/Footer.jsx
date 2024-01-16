import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
    return (
        <Box sx={{ minHeight: "150px", backgroundColor: (theme) => theme.palette.grey[200] }}>
            <Container>
                <Grid container padding={4}>
                    <Grid item xs={6}>
                        <Stack alignItems={"center"}>
                            <Typography variant="body1" sx={{ fontSize: "1.5rem" }}>
                                Frontend
                            </Typography>
                            <Typography variant="body2">React/Next</Typography>
                            <Typography variant="body2">Redux Toolkit</Typography>
                            <Typography variant="body2">Material UI</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack alignItems={"center"}>
                            <Typography variant="body1" sx={{ fontSize: "1.5rem" }}>
                                Backend
                            </Typography>
                            <Typography variant="body2">Springboot</Typography>
                            <Typography variant="body2">MongoDB</Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
