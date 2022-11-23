import logo from './logo.svg';
import './App.css';
import Tostiloco from './Tostiloco.jpg'
import Tostielote from './Tostielote.jpg'
import {BottomNavigation, BottomNavigationAction} from '@mui/material'
import { useState } from 'react';





function App() {

const [value,setValue]= useState(0);

const MuiButtonStyle = {
    color:'black',
    textAling: 'left',
    fontWeight: 'bold',
    fontSize: 'large'
}


  return (
    <div className="App">
        <div >

            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newVal) => {
                    setValue(newVal)
                }}  

                style={{backgroundColor: '#5FC94E', justifyContent: 'left'}}
            
            >
                <BottomNavigationAction
                    style={
                      MuiButtonStyle
                    } 
                    sx={{   
                        '&:hover': {
                        color: 'black',
                        backgroundColor: 'green '
                        }
                    }}
                    label="Encuestas"
                />

                <BottomNavigationAction
                    style={ MuiButtonStyle} 
                    sx={{   
                        '&:hover': {
                        color: 'Yellow',
                        backgroundColor: 'green '
                        }
                    }}
                    label="Productos"
                />

                <BottomNavigationAction
                    style={MuiButtonStyle} 
                    sx={{   
                        '&:hover': {
                        color: 'black',
                        backgroundColor: 'green '
                        }
                    }}
                    label="Sobre Nosotros"
                />

            </BottomNavigation>
         
        </div>

    <div>
            <div id="div_Descripcion1">
                <h1>Tostiloco</h1>
                <h2>Preparacion:</h2>
               <p> Una cama de tostitos baniado en un glaseado delicioso de clamato
                con una rociada de limon recostado junto a cacahuates y chacachacas.
            </p>
            </div>

            <div id="div_imagen1">

            </div>

    </div>

    <div id="Mod">
        <div id="div_Descripcion2" >
            <h1>Tostielotes</h1>
            <h2>Preparacion:</h2>
               <p> Una cama de tostitos recostado junto con 2 elotes desgranados con delicadeza
                con queso cottage, chipotle, tajin, mayonesa y sudor de dioses como no puede faltar Mantequila.
            </p>
        </div>

        <div id="div_imagen2"  >

        </div>
    </div>

    <div>
        <div id="div_int">
            {/* <form id="formu" name="formu"> <h2>Llena este formulario Y participa para un cupon:</h2><br/><br/>
                <fieldset aria-required="true" style="border: none;">
                <label htmlFor="cname">Nombr/e Completo:</label> <br/>
                <input className ="valores "type="text" name="Name" required /><br/><br/>

                <label htmlFor="cedad">Edad:</label><br/>
                <input className ="valores " type="number" name="age" min="0" required/><br/><br/>

                
                <label htmlFor="cmail">Correo:</label>   <br/>
                <input  className ="valores "type="email" name="email" required/><br/><br/>

                <label htmlFor="cLista">Sabor Preferido:</label>  <br/> 
                <select className ="valores " name="lista" required>
                    <option>Flaming Hot</option>
                    <option>Salsa Verde</option>
                    <option>Azul</option>
                  </select><br/><br/>

                <input id = "buttMod" type="submit" name="formu" value="Subir"  onclick="modal()"/>
            </fieldset>
            </form> */}

        </div>
    </div>

  </div>
  );
}

export default App;
