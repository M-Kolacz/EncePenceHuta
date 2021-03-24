import { SyntheticEvent } from 'react';
import { Alert, Color } from '@material-ui/lab';
import { Snackbar as MUISnackbar } from '@material-ui/core';

export interface SnackbarProps {
    open: boolean;
    severity: Color;
    onClose: (event: SyntheticEvent<Element, Event>) => void;
}

const Snackbar: React.FC<SnackbarProps> = ({ open, onClose, severity, children }) => {
    return (
        <MUISnackbar open={open} autoHideDuration={6000} onClose={onClose}>
            <Alert elevation={6} variant='filled' onClose={onClose} severity={severity}>
                {children}
            </Alert>
        </MUISnackbar>
    );
};

export default Snackbar;
