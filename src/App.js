import React from 'react';
import JobDescriptionGenerator from './models/JobDescriptionGenerator';

function App() {
    return (
        <div>
            <JobDescriptionGenerator />
        </div>
    );
}

export default App;



// import React, { useState } from 'react';
// import { Container, Box, Stepper, Step, StepLabel, Button } from '@mui/material';
// import { Routes, Route, useNavigate } from 'react-router-dom';
// import JobRoleForm from './models/JobRoleForm';
// import Responsibilities from './models/Responsibilities';
// import Qualifications from './models/Qualifications';
// import LanguageGuidelines from './models/LanguageGuidelines';
// import ReviewSubmit from './models/ReviewSubmit';
// import JobDescriptionDisplay from './models/JobDescriptionDisplay';

// function App() {
//     const navigate = useNavigate();
//     const [activeStep, setActiveStep] = useState(0);
//     const [finalJobDescription, setFinalJobDescription] = useState('');

//     const steps = ['Job Role', 'Responsibilities', 'Qualifications', 'Language Guidelines', 'Review & Submit'];

//     const handleNext = () => {
//         setActiveStep((prevStep) => prevStep + 1);
//     };

//     const handleBack = () => {
//         setActiveStep((prevStep) => prevStep - 1);
//     };

//     const handleReset = () => {
//         setActiveStep(0);
//         navigate('/');
//         // You may want to reset your Redux store here as well
//     };

//     const handleFinalizeJobDescription = (description) => {
//         setFinalJobDescription(description);
//     };

//     const getStepContent = (stepIndex) => {
//         switch (stepIndex) {
//             case 0:
//                 return <JobRoleForm />;
//             case 1:
//                 return <Responsibilities />;
//             case 2:
//                 return <Qualifications />;
//             case 3:
//                 return <LanguageGuidelines />;
//             case 4:
//                 return <ReviewSubmit onFinalize={handleFinalizeJobDescription} />;
//             default:
//                 throw new Error('Unknown step');
//         }
//     };

//     return (
//         <Container maxWidth="md">
//             <Routes>
//                 <Route path="/" element={
//                     <>
//                         <Stepper activeStep={activeStep} alternativeLabel>
//                             {steps.map((label) => (
//                                 <Step key={label}>
//                                     <StepLabel>{label}</StepLabel>
//                                 </Step>
//                             ))}
//                         </Stepper>
//                         {getStepContent(activeStep)}
//                         <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
//                             <Button disabled={activeStep === 0} onClick={handleBack}>Back</Button>
//                             <Box sx={{ flex: '1 1 auto' }} />
//                             {activeStep !== steps.length - 1 && (
//                                 <Button onClick={handleNext}>Next</Button>
//                             )}
//                         </Box>
//                     </>
//                 } />
//                 <Route path="/final" element={<JobDescriptionDisplay jobDescription={finalJobDescription} resetForm={handleReset} />} />
//             </Routes>
//         </Container>
//     );
// }

// export default App;