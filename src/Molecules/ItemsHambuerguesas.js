import React, { Fragment } from 'react';

import BtnItem from '../Atoms/BtnItem'

function ItemsHamburguesas(props){

   return(
    <Fragment >
    <BtnItem name="Hambuerguess de Res Simple"/>
    <BtnItem name="Hambuerguess de Res Doble"/>
    <BtnItem name="Hambuerguess de Pollo Simple"/>
    <BtnItem name="Hambuerguess de Pollo Doble"/>
    <BtnItem name="Hambuerguess de Vegetariana"/>
   </Fragment>
   )



} 


export default ItemsHamburguesas;