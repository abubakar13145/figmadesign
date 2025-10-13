import React from 'react';

export function TimelinePanel() {
  return (
    <section className="timeline-section" aria-labelledby="timeline-heading">
      <div className="timeline-panel">
        <div className="timeline-column">
          <h3 className="timeline-group-title" id="timeline-heading">SUGGESTED</h3>
          <ul className="timeline-list">
            <li className="timeline-list-item">Location 1</li>
            <li className="timeline-list-item">Location 2</li>
            <li className="timeline-list-item">Location 3</li>
          </ul>
        </div>
        <div className="timeline-column">
          <h3 className="timeline-group-title">YOUR SEARCH HISTORY</h3>
          <ul className="timeline-list">
            <li className="timeline-list-item">Location 1</li>
            <li className="timeline-list-item">Location 2</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
