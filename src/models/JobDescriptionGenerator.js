import React, { useState } from 'react';
import { Box, TextField, Button, Grid, Card, CardContent, Typography, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios'; // Import Axios

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        background: {
            default: '#f4f5fd',
        },
    },
    typography: {
        fontFamily: 'Arial, sans-serif',
        h4: {
            fontWeight: 600,
        },
    },
});

function JobDescriptionGenerator() {
    const [jobTitle, setJobTitle] = useState('');
    const [wordsToInclude, setWordsToInclude] = useState('');
    const [wordsToAvoid, setWordsToAvoid] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');
    const [generatedDescription, setGeneratedDescription] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleGenerateDescription = async () => {
        setIsLoading(true);
        try {
            const response = await axios.post('https://jobdescriptionbackend-b8b5fpcrgab3fre3.eastus-01.azurewebsites.net/api/final-description', {
                jobTitle,
                wordsToUse: wordsToInclude.split(','), // Split string into array by commas
                wordsToAvoid: wordsToAvoid.split(','), // Split string into array by commas
                additionalInfo
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setGeneratedDescription(response.data.finalDescription);
        } catch (error) {
            console.error('Error generating job description:', error);
            alert('Failed to generate job description.');
        }
        setIsLoading(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="md" sx={{ mt: 4 }}>
                <Typography variant="h4" align="center" color="primary" gutterBottom>
                    Job Description Generator
                </Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: theme.palette.background.default,
                    p: 3,
                    borderRadius: 2,
                    boxShadow: 3
                }}>
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} md={6}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        Create Your Job Description
                                    </Typography>
                                    <TextField
                                        label="Job Title"
                                        value={jobTitle}
                                        onChange={(e) => setJobTitle(e.target.value)}
                                        fullWidth
                                        margin="normal"
                                        variant="outlined"
                                    />
                                    <TextField
                                        label="Words to Include"
                                        value={wordsToInclude}
                                        onChange={(e) => setWordsToInclude(e.target.value)}
                                        fullWidth
                                        margin="normal"
                                        variant="outlined"
                                    />
                                    <TextField
                                        label="Words to Avoid"
                                        value={wordsToAvoid}
                                        onChange={(e) => setWordsToAvoid(e.target.value)}
                                        fullWidth
                                        margin="normal"
                                        variant="outlined"
                                    />
                                    <TextField
                                        label="Additional Information"
                                        value={additionalInfo}
                                        onChange={(e) => setAdditionalInfo(e.target.value)}
                                        fullWidth
                                        multiline
                                        rows={4}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                    <Button variant="contained" color="primary" onClick={handleGenerateDescription} disabled={isLoading} sx={{ mt: 2 }}>
                                        {isLoading ? 'Generating...' : 'Generate Description'}
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card raised>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        Generated Job Description
                                    </Typography>
                                    <TextField
                                        value={generatedDescription}
                                        multiline
                                        rows={16}
                                        fullWidth
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        variant="outlined"
                                    />
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default JobDescriptionGenerator;
