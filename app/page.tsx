'use client'
import * as React from 'react';
import {PaletteMode} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import AppAppBar from './components/AppAppBar';
import Features from './components/Features';

import getLPTheme from './getLPTheme';

// @ts-ignore
import ChatBotOverlay from "./ChatBotOverlay/ChatBotOverlay";

import ChatIcon from "./components/ChatIcon";
import {useAuth} from "@clerk/clerk-react";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import FeedbackOverlay from "./FeedBack/FeedBack";

export default function LandingPage() {
    const [mode, setMode] = React.useState<PaletteMode>('light');
    const LPtheme = createTheme(getLPTheme(mode));
    const [isChatBotOpen, setIsChatBotOpen] = React.useState(false);
    const [hadOpenedChatBot, setHadOpenedChatBot] = React.useState(false);
    const toggleColorMode = () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };
    const {userId, isSignedIn} = useAuth();
    const handleFeedbackClose = () => {
        setHadOpenedChatBot(false);
    };
    return (
        <ThemeProvider theme={LPtheme}>
            <CssBaseline />
            <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
            <Box sx={{bgcolor: 'background.default'}}>
                <Features />
                <Divider />
                <Testimonials />
                <Divider />
                <Pricing />
                <Divider />
                <FAQ />
                <Divider />
            </Box>

            {isChatBotOpen && (
                <ChatBotOverlay userID={userId} isSignedIn={isSignedIn}
                                closeChatOverlay={() => {
                                    setIsChatBotOpen(false)
                                    setHadOpenedChatBot(true)
                                }} />)}
            {hadOpenedChatBot &&
                <FeedbackOverlay userID={userId} open={hadOpenedChatBot} handleClose={handleFeedbackClose} />}
            {!isChatBotOpen && <ChatIcon onClick={() => setIsChatBotOpen(true)} />}

        </ThemeProvider>
    );
}