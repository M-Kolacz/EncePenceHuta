import { useState } from 'react';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import { MobileStepper, Typography, Button, Grid, Box } from '@material-ui/core';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import OpinionsData from 'shared/SSOT/OpinionsData';

import useStyles from './OpinionsStyles';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export interface OpinionsProps {}

export const Opinions: React.FC<OpinionsProps> = () => {
    const classes = useStyles();

    const [activeStep, setActiveStep] = useState(0);
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
            className={classes.OpinionsContainer}
            component='section'
        >
            <Box className={classes.OpinionsBox}>
                <Typography variant='h3' component='h2' className={classes.OpinionsTitle}>
                    Opinie rodziców
                </Typography>
                <AutoPlaySwipeableViews axis='x' index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents>
                    {OpinionsData.map((step, index) => (
                        <Box key={step.author}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <Typography variant='body1'>{step.description}</Typography>
                            ) : null}

                            <Typography variant='body2' className={classes.OpinionsAuthor}>
                                {OpinionsData[activeStep].author}
                            </Typography>
                        </Box>
                    ))}
                </AutoPlaySwipeableViews>

                <MobileStepper
                    steps={maxSteps}
                    position='static'
                    variant='dots'
                    activeStep={activeStep}
                    className={classes.OpinionsStepper}
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
