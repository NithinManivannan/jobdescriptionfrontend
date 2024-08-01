import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';

function JobDescriptionDisplay({ jobDescription, resetForm }) {
    return (
        <Box sx={{ mt: 4, p: 3 }}>
            <Typography variant="h4" gutterBottom component="div">
                Final Job Description
            </Typography>
            <Paper elevation={3} sx={{ mt: 2, p: 3 }}>
                <Typography sx={{ whiteSpace: 'pre-line' }} component="div">
                    {jobDescription || "No job description available. Please generate one."}
                </Typography>
            </Paper>
            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                <Button variant="contained" color="primary" onClick={resetForm}>
                    Generate New Job Description
                </Button>
            </Box>
        </Box>
    );
}

export default JobDescriptionDisplay;
