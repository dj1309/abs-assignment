import React from 'react'
import VideoComponent from './videocomponent';
import Secondcomp from './secondcomp';
import Thirdhome from './thirdhome';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
        <Outlet />
        <VideoComponent />
        <Secondcomp/>
        <Thirdhome/>
    </div>
  );
};

export default Layout;
