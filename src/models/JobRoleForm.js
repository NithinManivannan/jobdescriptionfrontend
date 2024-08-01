import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setJobRole } from '../features/jobSlice';
import { TextField, Box } from '@mui/material';

function JobRoleForm() {
    const jobRole = useSelector((state) => state.job.jobRole);
    const dispatch = useDispatch();

    return (
        <Box>
            <TextField
                label="Job Role"
                value={jobRole}
                onChange={(e) => dispatch(setJobRole(e.target.value))}
                fullWidth
                margin="normal"
                placeholder="Enter the job role you are hiring for"
            />
        </Box>
    );
}

export default JobRoleForm;
