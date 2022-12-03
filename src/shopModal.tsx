import React, { useState, FC,useRef } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
  } from '@mui/material';
import Button from '@mui/material/Button';
import {TextField} from '@mui/material';
import axios from 'axios';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';


interface Props{
    Open : boolean;
    setOpen : (value: React.SetStateAction<boolean>) => void;
    datos : boolean;
}
export const Modalin: FC<Props> = ({
Open,
setOpen,
datos
}) => { 
  
  

    const modalStyle = {
    color: '#3f3dcf',
    width: '40%',
    height: '41%',
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
    const radios ={
        display: 'inline-block',
    }
   
    const[name,setName] = useState<string| null>();
    const[email,setEmail] = useState<string|null>();
    const[edad,setEdad] = useState<number|null>();
    const[genero,setGenero] = useState<any>("Hombre");

    const [errorName,setErrorName] = useState(false);
  

    const a = useRef(false);
    const b = useRef(false);
    const c = useRef(false);

    const [entradas,setEntradas] = useState(Array<any>);
   

     function cerrar(){
        setOpen(!Open)
        setEdad(null);
        setName(null);
        setEmail(null);

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
                error={a.current}
               > </TextField>

                <TextField
                variant='outlined'
                style={InputStyle}
                label='Email'
                type='email'
                onChange={ (e) =>{
                    setEmail(e.target.value); 
                }}
                error={b.current}

               > </TextField>
               
               <TextField
                variant='outlined'
                style={InputStyle}
                label='Edad'
                type='number'
                onChange={ (e) =>{
                  setEdad(parseInt(e.target.value))
                }}
                error={c.current}

               > </TextField>
                <FormControl style={{padding:'8px'}} >
                <FormLabel id="demo-radio-buttons-group-label" style={{display:'block'}}>Genero</FormLabel>
                <RadioGroup
                style={radios}
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Hombre"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="Hombre" onChange={(e)=>{ setGenero("Hombre")  }} control={<Radio /> } label="Hombre" />
                    <FormControlLabel value="Mujer" onChange={(e)=>{setGenero("Mujer")  }} control={<Radio /> } label="Mujer" />
                    </RadioGroup>
                </FormControl>
                <Button     
                    variant='contained'
                    style={{ 
                    position: 'relative',
                    left: '30%',
                    top: '10%',
                    width: '25%',
                    height: '15%'
                    }}
                    onClick={ (e) =>{
                        
                        name == null  ? a.current = true :  a.current = false
                        email == null ? b.current = true :  b.current = false
                        edad == null ? c.current = true : c.current = false

                            setErrorName(!errorName);
                        if(c.current == false && c.current == false && a.current == false){
                            entradas.push(name)
                            entradas.push(edad)
                            entradas.push(email)
                            entradas.push(genero)

                            // ESTE PUERTO DEBE APUNTAR AL SERVIDOR DONDE SE ESTA HOSTEANDO,  Usualmente es el 80, y a una carpeta que se insertara en el HTDOCS en el xampp en mi caso.
                            axios.post('http://localhost:8080/API/', entradas)

                            entradas.splice(0,entradas.length )
                            cerrar()
                        }
                    }}
                >
                Enviar
                </Button>
                
            </DialogContent>

        </Dialog>


    );
}

