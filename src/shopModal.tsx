import React, { useState, FC } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
  } from '@mui/material';
import Button from '@mui/material/Button';
import {TextField} from '@mui/material';

interface Props{
    Open : boolean;
    setOpen : (value: React.SetStateAction<boolean>) => void;
}
export const Modalin: FC<Props> = ({
Open,
setOpen
}) => {
  
  

    const modalStyle = {
    color: '#3f3dcf',
    width: '25%',
    height: '30%',
    backgroundColor: 'rgb(213 221 181)',
    border: '2px solid #543003'
    }

    const InputStyle ={
        backgroundColor: '#f4f7e6',
        marginTop: '10px',
        marginLeft: '5px'
    }

    const buttonStyle= {
        position: 'relative',
        right: '3%',
        top: '50%',
        width: '25%'
    }
   
    const[name,setName] = useState<string| null>();
    const[email,setEmail] = useState<string>();
    const[edad,setEdad] = useState<number>();

    const [errorName,setErrorName] = useState(false);
    const [errorEmail,setErrorEmail] = useState(false);
    const [errorEdad,setErrorEdad] = useState(false);
   
    const cerrar = () =>{
        setOpen(!Open)
        setErrorName(false)
        setName(null)
    }


    return(
        <Dialog
        open={Open}
        PaperProps={{style: modalStyle}}
        onClose={cerrar}
        >
            <DialogTitle >
                Pedido
            </DialogTitle>

            <DialogContent>
                <DialogContentText>
                    Llene los siguientes datos para realizar su pedido.
                </DialogContentText>
               
               <TextField
                variant='outlined'
                style={InputStyle}
                label='Nombre*'
                onChange={ (e) =>{
                    setName(e.target.value)
                  
                }}
                error={errorName}
               > </TextField>

                <TextField
                variant='outlined'
                style={InputStyle}
                label='Email'
                type='email'
                onChange={ (e) =>{
                    setEmail(e.target.value);
                  
                }}
               > </TextField>
               
               <TextField
                variant='outlined'
                style={InputStyle}
                label='Edad'
                type='number'
                onChange={ (e) =>{
                  
                }}
               > </TextField>

                <Button     
                    variant='contained'
                    style={{ 
                    position: 'relative',
                    right: '3%',
                    top: '50%',
                    width: '25%'}}
                    onClick={ (e) =>{
                        name == null && email == null &&  edad == null ? setErrorName(true) :  cerrar()
                    
                    }}
                >
                Enviar
                </Button>

            </DialogContent>

        </Dialog>


    );
}

