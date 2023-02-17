import React from 'react';
import spin from "../../assets/images/spin.svg";

const Preloader = () => {
    return (
        <div>
            <img
                src={spin} style={{height: "75px"}}
            />
        </div>
    );
};

export default Preloader;