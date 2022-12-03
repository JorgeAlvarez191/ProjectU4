import React, { useState, FC, useEffect } from 'react';
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
import {DataGrid,GridToolbar } from '@mui/x-data-grid';

interface Props{
    Open : boolean;
    setOpen : (value: React.SetStateAction<boolean>) => void;
}
export const Modalon: FC<Props> = ({
Open,
setOpen
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
    const[email,setEmail] = useState<string>();
    const[edad,setEdad] = useState<number>();
    const[genero,setGenero] = useState<any>("Hombre");

    const [errorName,setErrorName] = useState(false);
    const [errorEmail,setErrorEmail] = useState(false);
    const [errorEdad,setErrorEdad] = useState(false);

    const [entradas,setEntradas] = useState(Array<any>);
   


    const cerrar = () =>{
        setOpen(!Open)
        rows.splice(0,rows.length) }
    const columns = [
        {
          field: 'id',
          headerName: 'id',
          width: 20,
        },
        {
          field: 'Nombre',
          headerName: 'Nombre',
          width: 140,
        },
        {
          field: 'Email',
          headerName: 'Email',
          width: 140,
        },
        {
            field:'Edad',
            headerName: 'Edad',
            width: 60
        },
        {
            field:'Sexo',
            headerName: 'Sexo',
            width: 140
        }
      ];
      
      const initialRows = [
        {
          id: 1,
          first: 'Jane',
          last: 'Carter',
        },
        {
          id: 2,
          first: 'Jack',
          last: 'Smith',
        },
        {
          id: 3,
          first: 'Gill',
          last: 'Martin',
        },
      ];

        useEffect(()=>{
            getUsuario();
        },[Open])

        

        function getUsuario(){
            axios.get('http://localhost:8080/API/').then(function(respuesta){
            console.log(respuesta.data);
            // rows.splice(0,rows.length)
            let mapeo = respuesta?.data.map(( user:any, key:any)=>{
             return user;
            })
            console.log(mapeo)
            setRows(mapeo);
         });
        }
        const [rows, setRows] = React.useState(initialRows);
    return(
        <Dialog
        open={Open}
        PaperProps={{style: modalStyle}}
        onClose={cerrar}
        >
            <DialogTitle >
                Usuarios Registrados
            </DialogTitle>

            <DialogContent>
                <DialogContentText>
                    Datos de usuarios registrados
                </DialogContentText>
               
                <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        columns={columns}
        rows={rows}
      />
    </div>
              
            </DialogContent>
        </Dialog>


    );
}

