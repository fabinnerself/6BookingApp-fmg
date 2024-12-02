import React from 'react';
import { SiGmail } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { PiFileCloudFill } from "react-icons/pi";

function Layout({ children }) {
  return (
    <>
    
      <main  >{children}</main>
      <footer className="footer">
    <div >
        <p className="flex items-center space-x-2">
            Copyright © 2024 Favian Medina Gemio &nbsp;
            <a href="https://www.linkedin.com/in/favian-medina-35a5471a4/?locale=en_US" target="_blank" rel="noopener noreferrer">
                <BsLinkedin />
            </a>
            &nbsp;
            <a href="mailto:favian.medina.gemio@gmail.com?subject=Consulta%20sobre%20tu%20proyecto">
                <SiGmail />
            </a>
            &nbsp;
            <a href="https://academlo-cv-fmg-page.vercel.app/index_en.html#home" target="_blank" rel="noopener noreferrer">
                <PiFileCloudFill />
            </a>
            &nbsp;
        </p>
         
    </div>
</footer>

    </>
  );
}

export default Layout;


