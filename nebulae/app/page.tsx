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
import ChatBotOverlay from "./ChatBotOverlay/ChatBotOverlay";

import ChatIcon from "./components/ChatIcon";
import {useAuth} from "@clerk/clerk-react";

interface ToggleCustomThemeProps {
    showCustomTheme: Boolean;
    toggleCustomTheme: () => void;
}

function ToggleCustomTheme({
                               showCustomTheme,
                               toggleCustomTheme,
                           }: ToggleCustomThemeProps) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100dvw',
                position: 'fixed',
                bottom: 24,
            }}
        >
            <ToggleButtonGroup
                color="primary"
                exclusive
                value={showCustomTheme}
                onChange={toggleCustomTheme}
                aria-label="Platform"
                sx={{
                    backgroundColor: 'background.default',
                    '& .Mui-selected': {
                        pointerEvents: 'none',
                    },
                }}
            >
                <ToggleButton value>
                    <AutoAwesomeRoundedIcon sx={{fontSize: '20px', mr: 1}} />
                    Custom theme
                </ToggleButton>
                <ToggleButton value={false}>Material Design 2</ToggleButton>
            </ToggleButtonGroup>
        </Box>
    );
}

export default function LandingPage() {
    const [mode, setMode] = React.useState<PaletteMode>('light');
    const LPtheme = createTheme(getLPTheme(mode));
    const [isChatBotOpen, setIsChatBotOpen] = React.useState(false);
    const toggleColorMode = () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };
    const {userId, isSignedIn} = useAuth();

    return (
        <ThemeProvider theme={LPtheme}>
            <CssBaseline />
            <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
            <Box sx={{bgcolor: 'background.default'}}>
                <Features />
            </Box>

            {isChatBotOpen && (
                <ChatBotOverlay userID={userId} isSignedIn={isSignedIn}
                                closeChatOverlay={() => setIsChatBotOpen(false)} />)}
            {!isChatBotOpen && <ChatIcon onClick={() => setIsChatBotOpen(true)} />}
        </ThemeProvider>
    );
}