import React from "react";
import {
    Box,
    Typography,
    Button,
    Grid,
    Link,
    Container,
    Grid2,
} from "@mui/material";
import logo from '../asset/Logo.png'

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: "#0A3161", color: "#fff", py: 5 }}>
            <Container maxWidth="lg">
                <Grid2 container spacing={4}>
                    {/* Logo and description */}
                    <Grid2 item xs={12} md={3}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            <img
                                src={logo}
                                alt="Whitespace"
                                style={{ width: "100px" }}
                            />
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ lineHeight: "1.8", maxWidth: "200px" }}
                        >
                            whitespace was created for the new ways we live and work. We make
                            a better workspace around the world.
                        </Typography>
                    </Grid2>

                    {/* Product Section */}
                    <Grid2 item xs={12} md={2}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            Product
                        </Typography>
                        <Link href="#" color="inherit" sx={{ display: "block", mb: 1, textDecoration: "none" }}>
                            Overview
                        </Link>
                        <Link href="#" color="inherit" sx={{ display: "block", mb: 1, textDecoration: "none" }}>
                            Pricing
                        </Link>
                        <Link href="#" color="inherit" sx={{ display: "block", mb: 1, textDecoration: "none" }}>
                            Customer stories
                        </Link>
                    </Grid2>

                    {/* Resources Section */}
                    <Grid2 item xs={12} md={2}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            Resources
                        </Typography>
                        <Link href="#" color="inherit" sx={{ display: "block", mb: 1, textDecoration: "none" }}>
                            Blog
                        </Link>
                        <Link href="#" color="inherit" sx={{ display: "block", mb: 1, textDecoration: "none" }}>
                            Guides & tutorials
                        </Link>
                        <Link href="#" color="inherit" sx={{ display: "block", mb: 1, textDecoration: "none" }}>
                            Help center
                        </Link>
                    </Grid2>

                    {/* Company Section */}
                    <Grid2 item xs={12} md={2}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            Company
                        </Typography>
                        <Link href="#" color="inherit" sx={{ display: "block", mb: 1, textDecoration: "none" }}>
                            About us
                        </Link>
                        <Link href="#" color="inherit" sx={{ display: "block", mb: 1, textDecoration: "none" }}>
                            Careers
                        </Link>
                        <Link href="#" color="inherit" sx={{ display: "block", mb: 1, textDecoration: "none" }}>
                            Media kit
                        </Link>
                    </Grid2>

                    {/* Try Section */}
                    <Grid2 item xs={12} md={3}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            Try It Today
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                            Get started for free. Add your whole team as your needs grow.
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "#4186E0",
                                color: "#fff",
                                borderRadius: "8px",
                                "&:hover": { backgroundColor: "#346dbb" },
                            }}
                        >
                            Start Today →
                        </Button>
                    </Grid2>
                </Grid2>

                {/* Footer Bottom */}
                <Box
                    sx={{
                        mt: 5,
                        borderTop: "1px solid rgba(255, 255, 255, 0.2)",
                        pt: 2,
                        display: "flex",
                    }}
                >
                    <Grid2 item xs={12} md={6}>
                        <Typography variant="body2" color="inherit" mt={0.5}>
                            English
                        </Typography>
                    </Grid2>
                    <Grid2 container justifyContent="space-between" alignItems="center">
                        <Grid2 item xs={12} md={6} sx={{ textAlign: "right" }}>
                            <Link
                                href="#"
                                color="inherit"
                                sx={{ mx: 2, textDecoration: "none" }}
                            >
                                Terms & Privacy
                            </Link>
                            <Link
                                href="#"
                                color="inherit"
                                sx={{ mx: 2, textDecoration: "none" }}
                            >
                                Security
                            </Link>
                            <Link
                                href="#"
                                color="inherit"
                                sx={{ mx: 2, textDecoration: "none" }}
                            >
                                Status
                            </Link>
                        </Grid2>
                    </Grid2>
                    <Grid2 item xs={12} md={6} mt={0.5}>
                        <Typography variant="body2" color="inherit">
                            ©2021 Whitespace LLC.
                        </Typography>
                    </Grid2>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
