import React from "react";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Alert = ({open, setOpen, onContinue, title, message}) => {
    const handleCancel = () => {
        setOpen(false);
    };

    const handleContinue = () => {
        setOpen(false);
        onContinue();
    }

    return (
        <Dialog open={open}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {message}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button color="error" onClick={handleCancel}>Cancel</Button>
                <Button onClick={handleContinue}>Continue</Button>
            </DialogActions>
        </Dialog>
    );
};

export default Alert;