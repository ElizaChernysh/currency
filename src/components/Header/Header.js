import React from 'react';
import { Outlet } from 'react-router-dom';



const Header = () => {
  return (
    <div className="wrapper">
      {/* <header>
        <NavLink to="/">Home</NavLink>
      </header> */}
      <main>
        <Outlet />
      </main>
      
      <footer className="Header__footer">
        <p>
          Created by
          {' '}
          <span> Eliza </span>
          {' '}
          2022 &copy;
        </p>
      </footer>
    </div>
  )
}

export default Header