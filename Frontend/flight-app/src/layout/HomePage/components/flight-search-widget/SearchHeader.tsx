import React from 'react';
import '../../styles/FlightSearchBar/SearchHeader.css';
import { IoAirplane } from "react-icons/io5";

interface SwitchButtonProps {
    isActive: boolean;
    onClick: () => void;
    label: string;
}

const SwitchButton: React.FC<SwitchButtonProps> = ({ isActive, onClick, label }) => {
    return (
        <button
            className={`switch-button ${isActive ? 'active' : 'inactive'}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

const SearchHeader: React.FC = () => {
    const [activeButton, setActiveButton] = React.useState<'one' | 'two'>('one');

    return (
         <div className="card">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <div className="header-content">
                    <IoAirplane className="icon" />
                    <h2 className='header-content h2'>BOOK YOUR FLIGHT</h2>
                </div>
                <div className="button-group">
                    <SwitchButton
                        isActive={activeButton === 'one'}
                        onClick={() => setActiveButton('one')}
                        label="Round Trip"
                    />
                    <SwitchButton
                        isActive={activeButton === 'two'}
                        onClick={() => setActiveButton('two')}
                        label="One Way"
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchHeader;
