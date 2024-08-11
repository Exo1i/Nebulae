'use client'
import React from 'react';
import {SupportAgentOutlined} from '@mui/icons-material';
import {IconButton} from '@mui/material';

const ChatIcon = ({onClick}) => {
    return (
        <IconButton
            onClick={onClick}
            sx={{
                position: 'fixed',
                bottom: 24,
                right: 24,
                backgroundColor: 'primary.main',
                color: 'white',
                '&:hover': {
                    backgroundColor: 'primary.dark',
                },
            }}
        >
            <SupportAgentOutlined />
        </IconButton>
    );
};

export default ChatIcon;