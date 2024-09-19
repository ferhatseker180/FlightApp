import React from "react";
import { IoAirplane as Airplane } from "react-icons/io5";
import { GiEarthAmerica as Discover } from "react-icons/gi";
import '../../styles/MainHeader.css';

const MainHeader = () => {
    
    return (
        <header className="main-header py-3 mb-3 border-bottom">
      <div className="container-fluid">
        {/* Sol Bölge */}
        <div className="left-section d-flex align-items-center">
          <a href="#" className="d-flex align-items-center text-decoration-none">
            <div className="airplane-icon me-2">
              <Airplane />
            </div>
            <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'black' }}>
              PLANE SCAPE
            </span>
          </a>
        </div>

        {/* Sağ Bölge */}
        <div className="right-section d-flex align-items-center">
          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small d-flex align-items-center">
            <li className="nav-item">
              <a href="#" className="nav-link text-secondary d-flex align-items-center">
                <i className="bi bi-tag-fill icon-style"></i>
                Deals
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-dark d-flex align-items-center">
                <div className='icon-style'>
                  <Discover />
                </div>
                Discover
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-dark d-flex align-items-center">
                <i className="bi bi-person-circle icon-style"></i>
                Ferhat Şeker
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    );
  }

export default MainHeader;