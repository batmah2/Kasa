/* eslint-disable react/prop-types */
import { useState } from 'react';
import CollapseBtn from '../../assets/COLLAPSE-Btn.png'

export default function Collapse({ title, description, customClass}) {
    const [active, setActive]= useState(false);
    const toggle= () => {
        setActive(!active);
    }; 

    const content = Array.isArray(description) ? (
    <ul>
      {description.map((item, index) => (
        <li key={ index }>{ item }</li>
      ))}
    </ul>
     ) : (
    description
    );
    return (
        <div className={`collapse ${active ? "fallDescription" : ""} ${customClass}`}>
          <div className="collapseTitle" key={Collapse.id}>
            { title }<img onClick={ toggle } className={`collapseButton ${active ? "rotateBtn" : ""}`} src={ CollapseBtn } alt="arrow" />
          </div>
          <div className={`collapseContent ${active ? "collapseActive" : ""}`}>
            { content }
          </div>
        </div>
      )
  }
