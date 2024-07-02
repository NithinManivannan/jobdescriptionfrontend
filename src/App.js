import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  TextField,
  Button,
  CircularProgress,
  Typography,
  Box,
  Paper,
  Grid
} from '@mui/material';

function App() {
  const [jobRole, setJobRole] = useState('');
  const [autoFilledData, setAutoFilledData] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [finalDescription, setFinalDescription] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleJobRoleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3004/api/job-role', { jobRole });
      setAutoFilledData(response.data['Auto-Filled Data']);
      setQuestions(response.data['Questions for Job Creator']);
    } catch (error) {
      console.error('Error fetching auto-filled data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event, key) => {
    const { value } = event.target;
    setAutoFilledData((prevData) => ({ ...prevData, [key]: value }));
  };

  const handleAnswerChange = (event, question) => {
    const { value } = event.target;
    setAnswers((prevAnswers) => ({ ...prevAnswers, [question]: value }));
  };

  const handleFinalSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3004/api/final-description', {
        jobRole,
        autoFilledData,
        answers,
      });
      setFinalDescription(response.data.finalDescription);
    } catch (error) {
      console.error('Error generating final job description:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Job Description Generator
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          label="Enter job role"
          value={jobRole}
          onChange={(e) => setJobRole(e.target.value)}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleJobRoleSubmit}
          disabled={loading}
          startIcon={loading && <CircularProgress size={20} />}
        >
          {loading ? 'Loading...' : 'Submit'}
        </Button>
      </Box>

      {autoFilledData && (
        <Paper elevation={3} style={{ padding: '16px', marginTop: '16px' }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Auto-Filled Data
          </Typography>
          {Object.keys(autoFilledData).map((key) => (
            <TextField
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              label={key}
              value={autoFilledData[key]}
              onChange={(e) => handleInputChange(e, key)}
              margin="normal"
              key={key}
            />
          ))}
        </Paper>
      )}

      {questions.length > 0 && (
        <Paper elevation={3} style={{ padding: '16px', marginTop: '16px' }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Questions
          </Typography>
          {questions.map((question, index) => (
            <TextField
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              label={question}
              value={answers[question] || ''}
              onChange={(e) => handleAnswerChange(e, question)}
              margin="normal"
              key={index}
            />
          ))}
        </Paper>
      )}

      {autoFilledData && questions.length > 0 && (
        <Box my={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleFinalSubmit}
            disabled={loading}
            startIcon={loading && <CircularProgress size={20} />}
          >
            {loading ? 'Generating...' : 'Generate Job Description'}
          </Button>
        </Box>
      )}

      {finalDescription && (
        <Paper elevation={3} style={{ padding: '16px', marginTop: '16px' }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Final Job Description
          </Typography>
          <Grid container spacing={2}>
            {Object.entries(finalDescription).map(([key, value]) => (
              <Grid item xs={12} key={key}>
                <Typography variant="subtitle1" component="p">
                  <strong>{key}:</strong> {value}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Paper>
      )}
    </Container>
  );
}

export default App;