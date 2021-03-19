import React from 'react';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import { MobileStepper, Paper, Typography, Button, Grid, Box } from '@material-ui/core';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import OpinionsData from 'shared/SSOT/OpinionsData';

import useStyles from './OpinionsStyles';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export interface OpinionsProps {}

const Opinions: React.FC<OpinionsProps> = () => {
    const classes = useStyles();

    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = OpinionsData.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };
    return (
        <Grid
            container
            justify='center'
            alignItems='center'
            item
            xs={12}
            style={{ textAlign: 'center' }}
            className={classes.OpinionsContainer}
        >
            <Box className={classes.root}>
                <Typography variant='h2' className={classes.ServiceItemTitle}>
                    Opinie rodziców
                </Typography>
                <AutoPlaySwipeableViews axis='x' index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents>
                    {OpinionsData.map((step, index) => (
                        <div key={step.author}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <Typography variant='h6'>{step.description}</Typography>
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
                <Paper square elevation={0} className={classes.header}>
                    <Typography variant='h6'>{OpinionsData[activeStep].author}</Typography>
                </Paper>
                <MobileStepper
                    steps={maxSteps}
                    position='static'
                    variant='text'
                    activeStep={activeStep}
                    style={{ backgroundColor: 'white' }}
                    nextButton={
                        <Button size='large' onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                            Następny
                            <KeyboardArrowRight />
                        </Button>
                    }
                    backButton={
                        <Button size='large' onClick={handleBack} disabled={activeStep === 0}>
                            <KeyboardArrowLeft />
                            Poprzedni
                        </Button>
                    }
                />
            </Box>
        </Grid>
    );
};

export default Opinions;
