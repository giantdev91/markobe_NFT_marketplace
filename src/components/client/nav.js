import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import 'primeicons/primeicons.css';
import { useDispatch } from 'react-redux';
import NavDropDown from '../../components/client/nav/navdropdown';

const ClientNavbar = () => {
  const [address, setAddress] = useState('0xA3Eb7***8B6b1');
  const addresses = [
    '0xA3Eb7***8B6b1',
    '0xB3Eb7***B6bd1',
    '0xC3Eb7***B6bd1',
    '0xD3Eb7***B6bd1',
    '0xE3Eb7***B6bd1',
  ];
  const dispatch = useDispatch();

  const showSidebar = () => {
    dispatch({ type: 'set', sidebarShow: true });
  };

  return (
    <>
      <div className="admin-navbar">
        <div>
          <i
            className="pi pi-bars disp-sidebar-icon"
            style={{ fontSize: '2em' }}
            onClick={showSidebar}
          ></i>
        </div>
        <div className="navbar-row">
          <div className="admin-navbar-titles">
            <a href="#">Explore</a>
            <a href="#">Community</a>
            <a href="#">Solutions</a>
          </div>
          <div className="admin-navbar-btns gap-1">
            <div className="admin-navbar-btn-ether"></div>
            <NavDropDown items={addresses} value={address} onChange={setAddress} />
            {/* <Dropdown icon={ Drop_Icon } className='admin-navbar-wallet-address' optionLabel="name" placeholder='0xA3Eb7***8B6bd1' options={ addresses } value={address} onChange={(e) => setAddress(e.value)}/> */}
            <div className="admin-navbar-btn-ring"></div>
          </div>
        </div>
      </div>
    </>
  );

  // const navlist = [
  //     { label: 'Home', icon: 'pi pi-fw pi-home'},
  //     { label: 'About', icon: 'pi pi-fw pi-file' },
  //     { label: 'Contact', icon: 'pi pi-fw pi-phone'}
  // ];

  // return (
  //     <div>
  //         <header>
  //             <nav>
  //                 <ul>
  //                     <Menubar
  //                          model={navlist}
  //                     />
  //                 </ul>
  //             </nav>
  //         </header>
  //     </div>
  // )
};

export default ClientNavbar;
