import React, { useEffect } from 'react';
import './App.css';
import MenuItem from './MenuItem';

const MENU_ITEMS = [
  {
    id: 'menu-item-1'
  },  
  {
    id: 'menu-item-2'
  },
  {
    id: 'menu-item-3'
  },  
  {
    id: 'menu-item-4'
  },
  {
    id: 'menu-item-5'
  },  
  {
    id: 'menu-item-6'
  },
]

function Menu() {
  return (
    <div className="Menu">
      { MENU_ITEMS.map(item => (
        <MenuItem 
          {...item}
          key={item.id}
        />
      ))}
    </div>
  );
}

export default Menu;
