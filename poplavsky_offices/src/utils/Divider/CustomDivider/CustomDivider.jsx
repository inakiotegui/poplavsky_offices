
import React from 'react';
import { Divider } from 'primereact/divider';
import './CustomDivider.css';

import dividerIcon from "../../../assets/icons/divider/AbstractDesignIcon.svg";

export default function CustomDivider() {
  return (
    <div className="CustomDivider">
      <Divider align="left">
        <div className="inline-flex align-items-center">
          <img src={dividerIcon} alt="Divider Icon" className=" w-2rem md:w-3rem" />
        </div>
      </Divider>
    </div>
  );
};