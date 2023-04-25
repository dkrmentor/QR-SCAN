import React from 'react';
import '../../assets/Style/print.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";

const Print = () => {
    const handleClick = () => {
        window.print();
    }

    return (
        <div className="floating-button-container">
            <button className="floating-button" onClick={handleClick}> <FontAwesomeIcon icon={faPrint} /></button>
        </div>
    );
};

export default Print;