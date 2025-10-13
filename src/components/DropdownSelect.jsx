import React from 'react';
import './DropdownSelect.css';

export function DropdownSelect({ label = '1936: Milwaukee Milwaukee Zoning', percent = 80 }) {
  return (
    <div className="dropdown-select" role="button" aria-haspopup="listbox" aria-expanded="false" tabIndex={0}>
      <div className="dropdown-body">
        <div className="dropdown-label-row">
          <span className="dropdown-label-text">{label}</span>
          <div className="dropdown-progress">
            <span className="progress-ring" aria-hidden="true">
              <svg width="13" height="13" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6.5" cy="6.5" r="6" stroke="#413A36" fill="none" />
              </svg>
            </span>
            <span className="progress-value">{percent}%</span>
          </div>
        </div>
      </div>
      <span className="dropdown-caret" aria-hidden="true">
        <svg width="10" height="9" viewBox="0 0 10 9" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.81787 9L0.054733 0.749998L9.58101 0.749999L4.81787 9Z" fill="#413A36" />
        </svg>
      </span>
    </div>
  );
}
