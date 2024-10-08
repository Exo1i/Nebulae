import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import FactoryIcon from '@mui/icons-material/Factory';
import {Gamepad, SportsEsports} from "@mui/icons-material";

const items = [
    {
        icon: <SmartToyIcon />,
        title: 'Artificial intelligence',
        description:
            'Build intelligent apps at enterprise scale with our AI portfolio.',
        imageLight: 'url("https://img.freepik.com/free-photo/ai-nuclear-energy-future-innovation-disruptive-technology_53876-129784.jpg")',
        imageDark: 'url("https://img.freepik.com/free-photo/ai-nuclear-energy-future-innovation-disruptive-technology_53876-129784.jpg")',
    },
    {
        icon: <FactoryIcon />,
        title: 'Industry',
        description:
            'Reimagine your business and enable security and compliance at scale',
        imageLight: 'url("https://img.freepik.com/free-photo/technological-futuristic-holograms-logistics-means-transport_23-2151663027.jpg?t=st=1723341580~exp=1723345180~hmac=87c65d851d139d4140b4cb584e3d91a7cdd811459c08b44e35871d91fce83ace&w=740")',
        imageDark: 'url("https://img.freepik.com/free-photo/technological-futuristic-holograms-logistics-means-transport_23-2151663027.jpg?t=st=1723341580~exp=1723345180~hmac=87c65d851d139d4140b4cb584e3d91a7cdd811459c08b44e35871d91fce83ace&w=740")',
    },
    {
        icon: <SportsEsports />,
        title: 'Gaming',
        description:
            'Build, run, and grow games with purpose-built, developer-friendly solutions',
        imageLight: 'url("https://img.freepik.com/free-photo/medium-shot-smiley-man-playing-videogame_23-2149350012.jpg")',
        imageDark: 'url("https://img.freepik.com/free-photo/man-holding-controller-close-up_23-2149005239.jpg")',
    },
];

export default function Features() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

    const handleItemClick = (index) => {
        setSelectedItemIndex(index);
    };

    const selectedFeature = items[selectedItemIndex];

    return (
        <Container id="features" sx={{py: {xs: 8, sm: 16}}}>
            <Grid container spacing={6}>
                <Grid item xs={12} md={6}>
                    <div>
                        <Typography component="h2" variant="h1" color="text.primary" marginBottom={"5px"}>
                            Cloud Like Never Before
                        </Typography>
                        <Typography
                            variant="h4"
                            color="text.secondary"
                            sx={{mb: {xs: 2, sm: 1}}}
                        >
                            From building apps at an enterprise scale to AI-powered intelligent apps.
                        </Typography>
                    </div>
                    <Grid container item gap={1} sx={{display: {xs: 'auto', sm: 'none'}}}>
                        {items.map(({title}, index) => (
                            <Chip
                                key={index}
                                label={title}
                                onClick={() => handleItemClick(index)}
                                sx={{
                                    borderColor: (theme) => {
                                        if (theme.palette.mode === 'light') {
                                            return selectedItemIndex === index ? 'primary.light' : '';
                                        }
                                        return selectedItemIndex === index ? 'primary.light' : '';
                                    },
                                    background: (theme) => {
                                        if (theme.palette.mode === 'light') {
                                            return selectedItemIndex === index ? 'none' : '';
                                        }
                                        return selectedItemIndex === index ? 'none' : '';
                                    },
                                    backgroundColor: selectedItemIndex === index ? 'primary.main' : '',
                                    '& .MuiChip-label': {
                                        color: selectedItemIndex === index ? '#fff' : '',
                                    },
                                }}
                            />
                        ))}
                    </Grid>
                    <Box
                        component={Card}
                        variant="outlined"
                        sx={{
                            display: {xs: 'auto', sm: 'none'},
                            mt: 4,
                        }}
                    >
                        <Box
                            sx={{
                                backgroundImage: (theme) =>
                                    theme.palette.mode === 'light'
                                        ? items[selectedItemIndex].imageLight
                                        : items[selectedItemIndex].imageDark,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                minHeight: 280,
                            }}
                        />
                        <Box sx={{px: 2, pb: 2}}>
                            <Typography color="text.primary" variant="body2" fontWeight="bold">
                                {selectedFeature.title}
                            </Typography>
                            <Typography color="text.secondary" variant="body2" sx={{my: 0.5}}>
                                {selectedFeature.description}
                            </Typography>
                            <Link
                                color="primary"
                                variant="body2"
                                fontWeight="bold"
                                sx={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    '& > svg': {transition: '0.2s'},
                                    '&:hover > svg': {transform: 'translateX(2px)'},
                                }}
                            >
                                <span>Learn more</span>
                                <ChevronRightRoundedIcon
                                    fontSize="small"
                                    sx={{mt: '1px', ml: '2px'}}
                                />
                            </Link>
                        </Box>
                    </Box>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="flex-start"
                        spacing={2}
                        useFlexGap
                        sx={{width: '100%', display: {xs: 'none', sm: 'flex'}}}
                    >
                        {items.map(({icon, title, description}, index) => (
                            <Card
                                key={index}
                                variant="outlined"
                                component={Button}
                                onClick={() => handleItemClick(index)}
                                sx={{
                                    p: 3,
                                    height: 'fit-content',
                                    width: '100%',
                                    background: 'none',
                                    backgroundColor:
                                        selectedItemIndex === index ? 'action.selected' : undefined,
                                    borderColor: (theme) => {
                                        if (theme.palette.mode === 'light') {
                                            return selectedItemIndex === index
                                                ? 'primary.light'
                                                : 'grey.200';
                                        }
                                        return selectedItemIndex === index ? 'primary.dark' : 'grey.800';
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '100%',
                                        display: 'flex',
                                        textAlign: 'left',
                                        flexDirection: {xs: 'column', md: 'row'},
                                        alignItems: {md: 'center'},
                                        gap: 2.5,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            color: (theme) => {
                                                if (theme.palette.mode === 'light') {
                                                    return selectedItemIndex === index
                                                        ? 'primary.main'
                                                        : 'grey.300';
                                                }
                                                return selectedItemIndex === index
                                                    ? 'primary.main'
                                                    : 'grey.700';
                                            },
                                        }}
                                    >
                                        {icon}
                                    </Box>
                                    <Box sx={{textTransform: 'none'}}>
                                        <Typography
                                            color="text.primary"
                                            variant="body2"
                                            fontWeight="bold"
                                        >
                                            {title}
                                        </Typography>
                                        <Typography
                                            color="text.secondary"
                                            variant="body2"
                                            sx={{my: 0.5}}
                                        >
                                            {description}
                                        </Typography>
                                        <Link
                                            color="primary"
                                            variant="body2"
                                            fontWeight="bold"
                                            sx={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                '& > svg': {transition: '0.2s'},
                                                '&:hover > svg': {transform: 'translateX(2px)'},
                                            }}
                                            onClick={(event) => {
                                                event.stopPropagation();
                                            }}
                                        >
                                            <span>Learn more</span>
                                            <ChevronRightRoundedIcon
                                                fontSize="small"
                                                sx={{mt: '1px', ml: '2px'}}
                                            />
                                        </Link>
                                    </Box>
                                </Box>
                            </Card>
                        ))}
                    </Stack>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{display: {xs: 'none', sm: 'flex'}, width: '100%'}}
                >
                    <Card
                        variant="outlined"
                        sx={{
                            height: '100%',
                            width: '100%',
                            display: {xs: 'none', sm: 'flex'},
                            pointerEvents: 'none',
                        }}
                    >
                        <Box
                            sx={{
                                m: 'auto',
                                width: '100%',
                                height: "100%",
                                backgroundSize: 'contain',
                                backgroundImage: (theme) =>
                                    theme.palette.mode === 'light'
                                        ? items[selectedItemIndex].imageLight
                                        : items[selectedItemIndex].imageDark,
                            }}
                        />
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}
