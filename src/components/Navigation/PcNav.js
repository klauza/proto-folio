import React from 'react'

import NavLinks from './NavLinks';
// icons
// import { HomeIcon, AppsIcon, MenuIcon } from '../../media';

const PcNav = ({ handleCheckboxChange, pc_mouse_move, toggleModal, toggleSideMenu, loc1, loc2 }) => {
  return (
    <div>
      <NavLinks handleCheckboxChange={handleCheckboxChange} pc_mouse_move={pc_mouse_move} toggleSideMenu={toggleSideMenu} toggleModal={toggleModal} loc1={loc1} loc2={loc2} />
    </div>
  )
}

export default PcNav
