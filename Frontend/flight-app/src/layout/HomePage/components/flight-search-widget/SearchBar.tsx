import React from 'react';
import '../../styles/FlightSearchBar/SearchBar.css';

// İkonları dinamik olarak geçmek için props türlerini belirtiyoruz
interface SearchBarProps {
    icons: React.ElementType[]; // Dinamik ikonları almak için kullanılır
}

const SearchBar: React.FC<SearchBarProps> = ({ icons }) => {
    const data = ['Ali', 'Buse', 'Ceylin', 'Deniz', 'Ekrem'];
    return (
        <div className='search-bar-container'>
            {icons.map((Icon, index) => (
                <div className='input-wrapper' key={index}>
                    <div className='icon-wrapper'>
                        <Icon />
                    </div>
                    <input list={`data-${index}`} />
                    <datalist id={`data-${index}`}>
                        {data.map((opt, optIndex) => (
                            <option key={optIndex}>{opt}</option>
                        ))}
                    </datalist>
                </div>
            ))}
        </div>
    );
};

export default SearchBar;
