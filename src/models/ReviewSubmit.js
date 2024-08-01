import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Typography, Paper, Box, List, ListItem, ListItemText, Button, CircularProgress } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ReviewSubmit({ onFinalize }) {
    const navigate = useNavigate();
    const jobRole = useSelector(state => state.job.jobRole);
    const responsibilities = useSelector(state => state.responsibilities.list);
    const qualifications = useSelector(state => state.qualifications.list);
    const words = useSelector((state) => state.words || { goodWords: [], badWords: [] });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async () => {
        if (!jobRole || !responsibilities.length || !qualifications.length) {
            alert('Please fill in all required fields.');
            return;
        }
        setIsLoading(true);
        const payload = {
            jobRole,
            responsibilities: responsibilities.map(res => res.value),
            qualifications: qualifications.map(qual => qual.value),
            recommendedWords: words.goodWords,
            wordsToAvoid: words.badWords
        };

        try {
            console.log("Payload being sent:", payload);
            const response = await axios.post('http://localhost:3000/api/final-description', payload, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Response:', response.data);
            setIsLoading(false);
            onFinalize(response.data.finalDescription);
            navigate('/final'); // Navigate to the final page
        } catch (error) {
            console.error('Error submitting job description:', error);
            setIsLoading(false);
        }
    };

    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>Review Your Job Description</Typography>
            
            <Paper elevation={2} sx={{ p: 2, mb: 2 }}>
                <Typography variant="h6">Job Role</Typography>
                <Typography>{jobRole || 'No job role defined'}</Typography>
            </Paper>

            <Paper elevation={2} sx={{ p: 2, mb: 2 }}>
                <Typography variant="h6">Responsibilities</Typography>
                <List>
                    {responsibilities.length ? responsibilities.map((resp, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={resp.value} />
                        </ListItem>
                    )) : <ListItem><ListItemText primary="No responsibilities defined" /></ListItem>}
                </List>
            </Paper>

            <Paper elevation={2} sx={{ p: 2, mb: 2 }}>
                <Typography variant="h6">Qualifications</Typography>
                <List>
                    {qualifications.length ? qualifications.map((qual, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={qual.value} />
                        </ListItem>
                    )) : <ListItem><ListItemText primary="No qualifications defined" /></ListItem>}
                </List>
            </Paper>

            <Paper elevation={2} sx={{ p: 2, mb: 2 }}>
                <Typography variant="h6">Recommended Words</Typography>
                <Typography>{words.goodWords.join(", ") || 'No recommended words'}</Typography>
            </Paper>

            <Paper elevation={2} sx={{ p: 2, mb: 2 }}>
                <Typography variant="h6">Words to Avoid</Typography>
                <Typography>{words.badWords.join(", ") || 'No words to avoid'}</Typography>
            </Paper>
            <Button sx={{ alignSelf: 'center', mt: 2 }} variant="contained" onClick={handleSubmit} disabled={isLoading}>
                {isLoading ? <CircularProgress size={24} /> : "Create Job Description"}
            </Button>   
        </Box>
    );
}

export default ReviewSubmit;