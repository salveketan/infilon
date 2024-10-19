import React from "react";
import {
    Card,
    CardContent,
    Typography,
    Button,
    Box,
    Grid2,
} from "@mui/material";

const pricingPlans = [
    {
        title: "Free",
        price: "$0",
        features: [
            "Sync unlimited devices",
            "10 GB monthly uploads",
            "200 MB max. note size",
            "Customize Home dashboard and access extra widgets",
            "Connect primary Google Calendar account",
            "Add due dates, reminders, and notifications to your tasks",
        ],
        highlighted: false,
    },
    {
        title: "Personal",
        price: "$11.99",
        features: [
            "Sync unlimited devices",
            "10 GB monthly uploads",
            "200 MB max. note size",
            "Customize Home dashboard and access extra widgets",
            "Connect primary Google Calendar account",
            "Add due dates, reminders, and notifications to your tasks",
        ],
        highlighted: true,
    },
    {
        title: "Organization",
        price: "$49.99",
        features: [
            "Sync unlimited devices",
            "10 GB monthly uploads",
            "200 MB max. note size",
            "Customize Home dashboard and access extra widgets",
            "Connect primary Google Calendar account",
            "Add due dates, reminders, and notifications to your tasks",
        ],
        highlighted: false,
    },
];

const PricingPlans = () => {
    return (
        <Box sx={{ py: 8 }}>
            <Typography
                variant="h4"
                sx={{ textAlign: "center", mb: 4, fontWeight: "bold" }}
            >
                Choose Your Plan
            </Typography>
            <Typography variant="subtitle1" sx={{ textAlign: "center", mb: 4, }}>
                Whether you want to get organized, keep your personal life on track, or
                boost workplace productivity, Evernote has the right plan for you.
            </Typography>
            <Grid2 container spacing={6} width="90%" margin={"auto"}>
                {pricingPlans.map((plan, index) => (
                    <Grid2 item key={index} xs={12} sm={6} md={4}>
                        <PricingCard {...plan} />
                    </Grid2>
                ))}
            </Grid2>
        </Box>
    );
};

const PricingCard = ({ title, price, features, highlighted }) => {
    return (
        <Card
            sx={{
                borderRadius: 2,
                backgroundColor: highlighted ? "#0A3161" : "#fff",
                color: highlighted ? "#fff" : "#000",
                boxShadow: highlighted ? "0px 10px 20px rgba(0,0,0,0.2)" : "none",
                border: highlighted ? "none" : "1px solid #E0E0E0",
            }}
        >
            <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                    {title}
                </Typography>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: "bold",
                        mb: 2,
                        color: highlighted ? "#FFE492" : "black",
                    }}
                >
                    {price}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Capture ideas and find them quickly
                </Typography>
                <Box>
                    {features.map((feature, index) => (
                        <Typography
                            key={index}
                            variant="body2"
                            sx={{ mb: 1, display: "flex", alignItems: "center" }}
                        >
                            ✔ {feature}
                        </Typography>
                    ))}
                </Box>
                <Button
                    variant="contained"
                    sx={{
                        mt: 3,
                        backgroundColor: highlighted ? "#A6D5FA" : "#fff",
                        color: highlighted ? "#0A3161" : "#0A3161",
                        border: highlighted ? "none" : "1px solid #0A3161",
                        "&:hover": {
                            backgroundColor: highlighted ? "#8ec3f0" : "#f0f0f0",
                        },
                    }}
                >
                    Get Started
                </Button>
            </CardContent>
        </Card>
    );
};
export default PricingPlans;
