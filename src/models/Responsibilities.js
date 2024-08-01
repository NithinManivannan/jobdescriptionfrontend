import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addResponsibility, removeResponsibility, updateResponsibility } from '../features/responsibilitiesSlice';
import { Box, TextField, Button, IconButton, List, ListItem, ListItemSecondaryAction } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function Responsibilities() {
    const responsibilities = useSelector(state => state.responsibilities.list);
    const dispatch = useDispatch();
    const [newResponsibility, setNewResponsibility] = useState('');

    const handleAddResponsibility = () => {
        if (newResponsibility.trim() !== '') {
            dispatch(addResponsibility({ value: newResponsibility }));
            setNewResponsibility(''); // Clear the input after adding
        }
    };

    const handleRemoveResponsibility = (id) => {
        dispatch(removeResponsibility(id));
    };

    const handleChange = (event, id) => {
        // Use a more specific handler to update existing responsibilities
        dispatch(updateResponsibility({ id, value: event.target.value }));
    };

    return (
        <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', my: 2 }}>
            <List>
                {responsibilities.map((item, index) => (
                    <ListItem key={item.id} sx={{ display: 'flex', alignItems: 'center' }}>
                        <TextField
                            fullWidth
                            label={`Responsibility ${index + 1}`}
                            value={item.value}
                            onChange={(e) => handleChange(e, item.id)}
                            variant="outlined"
                            margin="normal"
                        />
                        <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveResponsibility(item.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItem>
                ))}
                <TextField
                    fullWidth
                    label="Add new responsibility"
                    value={newResponsibility}
                    onChange={(e) => setNewResponsibility(e.target.value)}
                    variant="outlined"
                    margin="normal"
                />
                <Button variant="contained" color="primary" onClick={handleAddResponsibility} sx={{ mt: 2 }}>
                    Add
                </Button>
            </List>
        </Box>
    );
}

export default Responsibilities;
