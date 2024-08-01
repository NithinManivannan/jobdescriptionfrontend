import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addQualification, updateQualification, removeQualification } from '../features/qualificationsSlice';
import { Box, TextField, Button, IconButton, List, ListItem, ListItemSecondaryAction } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function Qualifications() {
    const qualifications = useSelector(state => state.qualifications.list);
    const dispatch = useDispatch();
    const [newQualification, setNewQualification] = useState('');

    const handleAddQualification = () => {
        if (newQualification.trim() !== '') {
            dispatch(addQualification({ value: newQualification }));
            setNewQualification('');
        }
    };

    const handleRemoveQualification = (id) => {
        dispatch(removeQualification(id));
    };

    const handleChange = (id, value) => {
        dispatch(updateQualification({ id, value }));
    };

    return (
        <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', my: 2 }}>
            <List>
                {qualifications.map((item, index) => (
                    <ListItem key={item.id} sx={{ display: 'flex', alignItems: 'center' }}>
                        <TextField
                            fullWidth
                            label={`Qualification ${index + 1}`}
                            value={item.value}
                            onChange={(e) => handleChange(item.id, e.target.value)}
                            variant="outlined"
                            margin="normal"
                        />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveQualification(item.id)}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <TextField
                    fullWidth
                    label="Add new qualification"
                    value={newQualification}
                    onChange={(e) => setNewQualification(e.target.value)}
                    variant="outlined"
                    margin="normal"
                />
                <Button variant="contained" color="primary" onClick={handleAddQualification} sx={{ ml: 2 }}>
                    Add
                </Button>
            </Box>
        </Box>
    );
}

export default Qualifications;
