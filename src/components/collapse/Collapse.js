import './collapse.scss';
import React, { useState } from 'react';

export default function Collapse({ title, content }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
      <div className="collapse">
        <div className="collapse-header" onClick={toggleCollapse}>
          <h3>{title}</h3>
          <div className={`arrow ${isCollapsed ? 'up' : 'down'}`}>&#8593;</div>
        </div>
        {!isCollapsed && <div className="collapse-content">{content}</div>}
      </div>
  );
}