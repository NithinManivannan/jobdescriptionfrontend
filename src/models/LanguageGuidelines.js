import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addGoodWord, removeGoodWord, addBadWord, removeBadWord } from '../features/wordsSlice';
import { Box, Typography, Chip, Stack, TextField, Button } from '@mui/material';

function LanguageGuidance() {
    const goodWords = useSelector(state => state.words.goodWords);
    const badWords = useSelector(state => state.words.badWords);
    const dispatch = useDispatch();

    const [newGoodWord, setNewGoodWord] = useState('');
    const [newBadWord, setNewBadWord] = useState('');

    const handleAddGoodWord = () => {
        if (newGoodWord && !goodWords.includes(newGoodWord)) {
            dispatch(addGoodWord(newGoodWord));
            setNewGoodWord('');
        }
    };

    const handleAddBadWord = () => {
        if (newBadWord && !badWords.includes(newBadWord)) {
            dispatch(addBadWord(newBadWord));
            setNewBadWord('');
        }
    };

    return (
        <Box>
            <Typography variant="h6">Recommended Words:</Typography>
            <Stack direction="row" spacing={1}>
                {goodWords.map(word => (
                    <Chip
                        label={word}
                        color="primary"
                        key={word}
                        onDelete={() => dispatch(removeGoodWord(word))}
                    />
                ))}
            </Stack>
            <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                <TextField
                    label="Add new word"
                    value={newGoodWord}
                    onChange={(e) => setNewGoodWord(e.target.value)}
                    size="small"
                    sx={{ mr: 1 }}
                />
                <Button variant="contained" onClick={handleAddGoodWord}>Add</Button>
            </Box>

            <Typography variant="h6" sx={{ mt: 2 }}>Words to Avoid:</Typography>
            <Stack direction="row" spacing={1}>
                {badWords.map(word => (
                    <Chip
                        label={word}
                        color="error"
                        key={word}
                        onDelete={() => dispatch(removeBadWord(word))}
                    />
                ))}
            </Stack>
            <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                <TextField
                    label="Add new word"
                    value={newBadWord}
                    onChange={(e) => setNewBadWord(e.target.value)}
                    size="small"
                    sx={{ mr: 1 }}
                />
                <Button variant="contained" onClick={handleAddBadWord}>Add</Button>
            </Box>
        </Box>
    );
}

export default LanguageGuidance;
