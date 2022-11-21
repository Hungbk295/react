import React from 'react'
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import sidebarBg from '../../assets/bg2.jpg';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <>
      <ProSidebarProvider
        
      >
        <Menu data-image={sidebarBg} className='sidebar-menu' > 
          <MenuItem routerLink={<Link to="/" />} className='sidebar-menuitem'>
            Home
          </MenuItem>
          <MenuItem routerLink={<Link to="/admins" />} className='sidebar-menuitem'>
            Dashboard
          </MenuItem>
          
                <SubMenu className='sidebar-submenu' label="Users">
            <MenuItem routerLink={<Link to="/admins/manage-users" />} className='sidebar-menuitem'>
               Manage User

            </MenuItem>
                    <MenuItem className='sidebar-menuitem'> Quiz Topic </MenuItem>
                    <MenuItem className='sidebar-menuitem'> Quiz Question </MenuItem>
                </SubMenu>
            </Menu>
            
        </ProSidebarProvider>;
          
    </>
  )
}

export default SideBar
