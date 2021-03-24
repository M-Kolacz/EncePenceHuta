import { useState } from 'react';
import { Box, IconButton, Drawer, Hidden, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import NavigationLinks from 'shared/SSOT/NavigationLinksData';

import Logo from 'components/UIElements/Logo';

import useStyles from './MobileNavigationStyles';

export interface MobileNavigationProps {}

const MobileNavigation: React.FC<MobileNavigationProps> = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClick = () => setOpen((prevState) => !prevState);

    return (
        <Hidden mdUp={true}>
            <Box className={classes.MenuIconContainer} onClick={handleClick}>
                <IconButton>
                    <MenuIcon fontSize='large' className={classes.MenuIcon} />
                </IconButton>
            </Box>
            <Drawer anchor='left' open={open} onClose={handleClick}>
                <Logo link />
                <ul className={classes.NavigationList}>
                    {NavigationLinks.map(({ title, icon, path }) => (
                        <li key={title} className={classes.NavigationElement}>
                            <ListItem button component='a' href={path}>
                                <ListItemIcon>{icon}</ListItemIcon>
                                <ListItemText primary={title} />
                            </ListItem>
                        </li>
                    ))}
                </ul>
            </Drawer>
        </Hidden>
    );
};

export default MobileNavigation;
