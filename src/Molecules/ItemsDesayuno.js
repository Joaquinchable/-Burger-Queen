import React, { Fragment } from 'react';

import BtnItem from '../Atoms/BtnItem'

function ItemsDesayuno(props){

   return(
    <Fragment >
    <BtnItem name="Cafe Americano"/>
    <BtnItem name="Cafe con leche"/>
    <BtnItem name="Sandwich de jamon y queso"/>
    <BtnItem name="Jugo Natural"/>
   </Fragment>
   )



} 


export default ItemsDesayuno;