import React from 'react';
import basket from './images/basket.png';
import people from './images/people.png';
import admin from './images/admin.png';
import person from './images/person.png';

export const SidebarData = [
    
    {
      id: 1,  
      title: 'Central de Cestas',
      path: '/.PaginaPadrao',
      element:'PaginaPadrao',
      icon: <img src={basket}/>,
      cName: 'nav-text', 
     },
     {
      id: 2,
      title: 'Área do Beneficiário',
      path: '/.PaginaPadrao',
      element:'PaginaPadrao',
      icon: <img src={people}/>,
      cName: 'nav-text', 
     },
     {
      id: 3,  
      title: 'Painel do Administrador',
      path: '/.PaginaPadrao',
      element:'PaginaPadrao',
      icon: <img src={admin}/>,
      cName: 'nav-text', 
     },
     {
      id:4,  
      title: 'Login',
      path: '/.PaginaPadrao',
      element:'PaginaPadrao',
      icon: <img src = {person}/>,
      cName: 'nav-text', 
     },
];
