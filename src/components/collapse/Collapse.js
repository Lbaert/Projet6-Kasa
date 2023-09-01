import './collapse.scss';
import React, { useState } from 'react';
import arrowIcon from '../../img/arrow_back_ios-24px 2.png';

export default function Collapse({ title, content }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
      <div className="collapse">
        <div className="collapse-header" onClick={toggleCollapse}>
          <h2>{title}</h2>
          <img
          src={arrowIcon}
          alt={isCollapsed ? 'Expand' : 'Collapse'}
          className={`collapse-icon ${isCollapsed ? '' : 'expanded'}`}
        />
        </div>
        {!isCollapsed && <div className="collapse-content">{content}</div>}
      </div>
  );
}