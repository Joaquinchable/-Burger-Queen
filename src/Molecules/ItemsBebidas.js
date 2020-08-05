import React, { Fragment } from 'react';

import BtnItem from '../Atoms/BtnItem'

function ItemsBebidas(props){

   return(
    <Fragment >
    <BtnItem name="Agua 500ml"/>
    <BtnItem name="Agua 750ml"/>
    <BtnItem name="Gaseosa 500ml"/>
    <BtnItem name="Gaseosa 750ml"/>
   </Fragment>
   )



} 


export default ItemsBebidas;