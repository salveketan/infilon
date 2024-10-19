import React from 'react';
import { Box, Button, Typography, Container } from '@mui/material';

const YourWorkSection = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#0A3161', // Dark blue background
                color: '#fff',
                py: 10, // Padding for top and bottom
                textAlign: 'center',
                position: 'relative',
            }}
        >
            <Container maxWidth="md">
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 'bold',
                        mb: 3,
                    }}
                >
                    Your work, <span style={{ position: 'relative' }}>everywhere you are</span>
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        mb: 5,
                        maxWidth: '800px',
                        margin: '0 auto',
                        lineHeight: '1.6',
                    }}
                >
                    Access your notes from your computer, phone or tablet by synchronizing with various services, including whitespace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android, and iOS. A terminal app is also available!
                </Typography>

                <Button
                    variant="contained"
                    size="large"
                    sx={{
                        backgroundColor: '#4186E0', // Light blue button background
                        color: '#fff',
                        mt:2,
                        borderRadius: '8px',
                        padding: '10px 24px',
                        '&:hover': {
                            backgroundColor: '#346dbb', // Darker shade on hover
                        },
                    }}
                >
                    Try Taskey →
                </Button>
            </Container>
        </Box>
    );
};

export default YourWorkSection;
