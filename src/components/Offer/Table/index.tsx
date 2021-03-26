/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useState } from 'react';

import { Grid, AppBar, Tabs, Tab } from '@material-ui/core';

import TabData from 'shared/SSOT/TabData';

import TabPanels from './TabPanels';

import useStyles from './TableStyles';

export interface TabPanelProps {
    index: number;
    value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ value, children, index }) => {
    const classes = useStyles();

    return (
        <Grid
            container
            component='div'
            role='tabpanel'
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
        >
            {value === index && (
                <Grid item xs={12} md={8} className={classes.TabContainer}>
                    {children}
                </Grid>
            )}
        </Grid>
    );
};

export const ScrollableTabsButtonForce = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Grid item xs={12} className={classes.TableContainer} component='section'>
            <AppBar position='static' color='default' component='nav'>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant='scrollable'
                    scrollButtons='on'
                    indicatorColor='primary'
                    textColor='primary'
                >
                    {TabData.map((tab) => (
                        <Tab {...tab} key={tab.id} />
                    ))}
                </Tabs>
            </AppBar>
            {TabPanels.map(({ children, id }, index) => (
                <TabPanel value={value} index={index} key={id}>
                    {children}
                </TabPanel>
            ))}
        </Grid>
    );
};
