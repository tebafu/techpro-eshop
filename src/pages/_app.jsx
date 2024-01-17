import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import { Box } from "@mui/material";
import "@/styles/globals.css";
import { useState } from "react";
import Cart from "@/components/Cart";
import { Provider } from "react-redux";
import { store } from "../store";

export default function App({ Component, pageProps }) {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <Provider store={store}>
            <div className={`min-h-screen flex flex-col justify-between`}>
                <div>
                    <Navbar setDrawerOpen={setDrawerOpen} />
                    <Container fixed maxWidth="lg" sx={{ marginY: "36px" }}>
                        <Component {...pageProps} />
                    </Container>
                    <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                        <Box sx={{ width: 500, padding: 8 }}>
                            <Cart />
                        </Box>
                    </Drawer>
                </div>
                <Footer />
            </div>
        </Provider>
    );
}
