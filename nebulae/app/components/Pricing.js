import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const tiers = [
    {
        title: 'Basic',
        price: '0',
        description: [
            '5 users included',
            '10 GB of cloud storage',
            'Basic AI tools',
            'Email support',
        ],
        buttonText: 'Get started for free',
        buttonVariant: 'outlined',
    },
    {
        title: 'Advanced',
        subheader: 'Most Popular',
        price: '50',
        description: [
            '50 users included',
            '100 GB of cloud storage',
            'Advanced AI tools',
            'Priority email support',
            'Access to analytics dashboard',
        ],
        buttonText: 'Start now',
        buttonVariant: 'contained',
    },
    {
        title: 'Enterprise',
        price: '200',
        description: [
            'Unlimited users',
            '1 TB of cloud storage',
            'Custom AI solutions',
            '24/7 phone & email support',
            'Dedicated account manager',
        ],
        buttonText: 'Contact sales',
        buttonVariant: 'outlined',
    },
];

export default function Pricing() {
    return (
        <Container
            id="pricing"
            sx={{
                pt: {xs: 4, sm: 12},
                pb: {xs: 8, sm: 16},
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: {xs: 3, sm: 6},
            }}
        >
            <Box
                sx={{
                    width: {sm: '100%', md: '60%'},
                    textAlign: {sm: 'left', md: 'center'},
                }}
            >
                <Typography component="h2" variant="h4" color="text.primary">
                    Nebulae Pricing Plans
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    Choose a plan that fits your business needs. Whether you're just starting out or need a
                    comprehensive solution, Nebulae has you covered.
                </Typography>
            </Box>
            <Grid container spacing={3} alignItems="center" justifyContent="center">
                {tiers.map((tier) => (
                    <Grid
                        item
                        key={tier.title}
                        xs={12}
                        sm={tier.title === 'Enterprise' ? 12 : 6}
                        md={4}
                    >
                        <Card
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 4,
                                border: tier.title === 'Advanced' ? '1px solid' : undefined,
                                borderColor:
                                    tier.title === 'Advanced' ? 'primary.main' : undefined,
                                background:
                                    tier.title === 'Advanced'
                                        ? 'linear-gradient(#033363, #021F3B)'
                                        : undefined,
                            }}
                        >
                            <CardContent>
                                <Box
                                    sx={{
                                        mb: 1,
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        color: tier.title === 'Advanced' ? 'grey.100' : '',
                                    }}
                                >
                                    <Typography component="h3" variant="h6">
                                        {tier.title}
                                    </Typography>
                                    {tier.title === 'Advanced' && (
                                        <Chip
                                            icon={<AutoAwesomeIcon />}
                                            label={tier.subheader}
                                            size="small"
                                            sx={{
                                                background: (theme) =>
                                                    theme.palette.mode === 'light' ? '' : 'none',
                                                backgroundColor: 'primary.contrastText',
                                                '& .MuiChip-label': {
                                                    color: 'primary.dark',
                                                },
                                                '& .MuiChip-icon': {
                                                    color: 'primary.dark',
                                                },
                                            }}
                                        />
                                    )}
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'baseline',
                                        color: tier.title === 'Advanced' ? 'grey.50' : undefined,
                                    }}
                                >
                                    <Typography component="h3" variant="h2">
                                        ${tier.price}
                                    </Typography>
                                    <Typography component="h3" variant="h6">
                                        &nbsp; per month
                                    </Typography>
                                </Box>
                                <Divider
                                    sx={{
                                        my: 2,
                                        opacity: 0.2,
                                        borderColor: 'grey.500',
                                    }}
                                />
                                {tier.description.map((line) => (
                                    <Box
                                        key={line}
                                        sx={{
                                            py: 1,
                                            display: 'flex',
                                            gap: 1.5,
                                            alignItems: 'center',
                                        }}
                                    >
                                        <CheckCircleRoundedIcon
                                            sx={{
                                                width: 20,
                                                color:
                                                    tier.title === 'Advanced'
                                                        ? 'primary.light'
                                                        : 'primary.main',
                                            }}
                                        />
                                        <Typography
                                            component="text"
                                            variant="subtitle2"
                                            sx={{
                                                color:
                                                    tier.title === 'Advanced' ? 'grey.200' : undefined,
                                            }}
                                        >
                                            {line}
                                        </Typography>
                                    </Box>
                                ))}
                            </CardContent>
                            <CardActions>
                                <Button
                                    fullWidth
                                    variant={tier.buttonVariant}
                                    component="a"
                                    href="/material-ui/getting-started/templates/checkout/"
                                    target="_blank"
                                >
                                    {tier.buttonText}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
