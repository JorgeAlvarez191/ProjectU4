import React, { useState, FC } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
  } from '@mui/material';
interface Props{
    Open : boolean;
    setOpen : (value: React.SetStateAction<boolean>) => void;
}
export const Modal: FC<Props> = ({
Open,
setOpen
}) => {
  
    const cerrar = () =>{
        setOpen(!Open)
    }


    return(
        <Dialog
        open={Open}
        PaperProps={{style:{color: 'red'}}}
        onClose={cerrar}
        >
            <DialogTitle>
                Pedido
            </DialogTitle>

            <DialogContent>
                <DialogContentText>
                    amoma
                </DialogContentText>
            </DialogContent>

        </Dialog>


    );
}

