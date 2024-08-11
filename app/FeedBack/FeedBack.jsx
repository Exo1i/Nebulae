import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Modal from '@mui/material/Modal';
import supabase from '../ChatBotOverlay/supabaseClient';
import {useTheme} from "@mui/system";

const FeedbackOverlay = ({open, handleClose, userID}) => {
    const [rating, setRating] = useState(0);
    const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

    const handleRatingChange = (event, newRating) => {
        handleSubmitFeedback(newRating);
    };
    let darkMode = useTheme().palette.mode === "dark"
    const handleSubmitFeedback = async (newRating) => {
        if (newRating > 0) {
            setRating(newRating);

            setFeedbackSubmitted(true);
            handleClose();
            try {
                const {data, error} = await supabase.from('userFeedback').insert([{
                    userID, title: new Date().toISOString(), // ISO 8601 format timestamp
                    rating: newRating
                }]);
            } catch (error) {
                console.error('Unexpected error:', error);
            }
        }
    };

    return (<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="feedback-modal-title"
        aria-describedby="feedback-modal-description"
    >
        <Box
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                border: '2px solid #000',
                borderRadius: 8,
                boxShadow: 24,
                p: 4,
                display: 'flex',
                justifyContent: "center",
            }}
        >
            {!feedbackSubmitted ? (<>
                <Typography id="feedback-modal-title" variant="h6" component="h2" color>
                    Rate Your Experience
                </Typography>
                <Rating
                    name="user-rating"
                    value={rating}
                    onChange={handleRatingChange}
                    max={10}
                    sx={{mt: 2}}
                />

            </>) : (
                <Typography id="feedback-modal-description" variant="body1" color={darkMode ? "white" : "black"}
                            sx={{mt: 2}}>
                    Thank you for your feedback!
                </Typography>)}
        </Box>
    </Modal>);
};

export default FeedbackOverlay;
