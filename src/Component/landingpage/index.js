import React from "react";
import { Box, Button, Grid2, } from "@mui/material";
import iamge1 from "../asset/Image-container.png";


const LandingPage = () => {
    return (
        <Box sx={{ width: "100%", backgroundColor: "#043873" }}>
            <Grid2
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, md: 2 }}
                style={{ minHeight: "100vh" }}
                justifyContent="center"
                alignItems="center"
            >
                <Grid2 item xs={6}>
                    <div
                        style={{
                            width: "80%",
                            margin: "auto",
                            alignItems: "center",
                        }}
                    >
                        <h1 style={{ color: "white", fontSize: "30px" }}>
                            Get More Done With Whitepace
                        </h1>
                        <h6 style={{ color: "white",}}>
                            Project management software that enables your teams to
                            collaborate, plan, analyze and manage everyday tasks.
                        </h6>
                        <Button
                            variant="contained"
                            sx={{
                                mt: 3,
                                backgroundColor: "#4F9CF9",
                                color: "#fff",
                                border: "1px solid #0A3161",
                                "&:hover": {
                                    backgroundColor: "#f0f0f0",
                                },
                            }}
                        >
                            Try Whitepace free →
                        </Button>
                    </div>
                </Grid2>
                <Grid2 item xs={6}>
                    <div>
                        <img src={iamge1} style={{ width: "100%" }} />
                    </div>
                </Grid2>
            </Grid2>
        </Box>
    );
};

export default LandingPage;
