import logo from './logotostitos.png';
import './App.css';
import Tostiloco from './Tostiloco.jpg'
import Tostielote from './Tostielote.jpg'
import Tostinachos from './Tostinachos.jpeg'
import {BottomNavigation, BottomNavigationAction} from '@mui/material'
import { useState } from 'react';
import Button from '@mui/material/Button';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import {Modalin} from './shopModal.tsx';
import {Modalon} from './RegistroModal.tsx';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

function App() {

    const MuiButtonStyle = {
        color:'black',
        textAling: 'right',
        fontWeight: 'bold',
        fontSize: 'large'
    }
    const OverDriveBottom  = {
        '&:hover': {
            color: 'black',
            backgroundColor: 'green '
            }
    }

const [value,setValue]= useState(0);
const [open,setOpen] = useState(false);
const [open1,setOpen1] = useState(false);


const OpenModal = () => {
setOpen(!open)
}
const OpenModal1 = () => {
setOpen1(!open)
}

const Preparacion = [ "Una cama de tostitos recostado junto con 2 elotes desgranados con delicadeza con queso cottage, chipotle, tajin, mayonesa y sudor de dioses como no puede faltar Mantequila.","Una cama de tostitos baniado en un glaseado delicioso de clamatocon una rociada de limon recostado junto a cacahuates y chacachacas.","Tostitos bañados en queso chedar y jalapeños"]
const Sabores = [ "Tostielotes","Tostilocos","Tostinachos"]
const imgs = [Tostielote,Tostiloco,Tostinachos]

  return (
    <div className="App">
        <div >

            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newVal) => {
                    setValue(newVal)
                    console.log(value)
                }}  

                style={{backgroundColor: '#5FC94E', justifyContent: 'right'}}
            >
              
                <BottomNavigationAction
                    style={ MuiButtonStyle} 
                    sx={ OverDriveBottom}
                    label="Tostielote"
                />

                <BottomNavigationAction
                  style={ MuiButtonStyle} 
                  sx={ OverDriveBottom}
                    label="Tostilocos"
                />

                <BottomNavigationAction
                    style={ MuiButtonStyle} 
                    sx={ OverDriveBottom}
                    label="Tostinachos"
                />

                <a id='logoA' href='https://tostitos.com.mx'>
                <img 
                    id='logo'
                    src={logo}
                />
                </a>
            </BottomNavigation>
         
        </div>
    {/* Fin de la region de nav */}
            



    <div id="Mod">


        <div id="Tittle">
             <h1><center>{Sabores[value]}</center></h1>
        </div>

        <div id="div_Descripcion2" >
            <h2>Preparacion:</h2>
               <p> { Preparacion[value]} </p>
        </div>

        <div id="div_imagen2" style={{ backgroundImage: `url(${imgs[value]})` }}>

        </div>
    </div>
    
    <Modalin
        Open={open}
        setOpen={setOpen}
    />
    <Modalon
        Open={open1}
        setOpen={setOpen1}
    />

    <p id='Copy2'>Si desea saborear uno de nuestros delicioso productos puede pre-ordenar uno tostitos preparados a su eleccion para luego recogerlos.</p>

    <Button
    id='button'
    variant='contained'
    endIcon ={<AddShoppingCartSharpIcon/>}
    onClick={OpenModal}
    >
        ORDENAR YA
    </Button>

    <Button
    id='button2'
    variant='contained'
    endIcon ={<PersonOutlinedIcon/>}
    onClick={OpenModal1}
    >
        Ver Usuarios
    </Button>


    <p id='Copy'>Derechos reservados de Copyrights por Tosticentro Tuchicolote <span style={{ fontSize: "x-small"}}>©</span> 2022.</p>


  </div>
  );
}

export default App;
