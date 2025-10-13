import React from 'react';
import { Text, RawImg, CustomCode, TimelinePanel, DropdownSelect } from '@components';
import './PlaceDetails.css';

export default function PlaceDetails() {
  const leftArrowSvg = `<svg id="6:1313" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.7256 43.1405L0.999583 22.4145L22.5546 0.859478" stroke="#413A36"></path>
</svg>`;

  const rightArrowSvg = `<svg id="6:1324" width="44" height="51" viewBox="0 0 44 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.4531 7.58675L43.1784 28.312L21.6241 49.8664" stroke="#413A36"></path>
</svg>`;

  const audioSvg = `<svg id="6:1269" width="90" height="119" viewBox="0 0 90 119" fill="none" xmlns="http://www.w3.org/2000/svg" class="audio-artifact">
<path d="M37.7476 56.7363L37.7476 33.3535L57.9985 45.0449L37.7476 56.7363Z" stroke="#413A36"></path>
<circle cx="45" cy="45.0449" r="44.5" stroke="#413A36"></circle>
<text fill="#413A36" xml:space="preserve" style="white-space: pre" font-family="Styrene B Trial" font-size="14" letter-spacing="0em"><tspan x="0" y="114.715">Audio cap...</tspan></text>
</svg>`;

  const pdfSvg = `<svg id="6:1274" width="79" height="122" viewBox="0 0 79 122" fill="none" xmlns="http://www.w3.org/2000/svg" class="pdf-artifact">
<path d="M1 0.772461V93.3174H71.5104V39.8837C71.5104 34.3751 69.8578 29.9682 65.4509 25.5613L43.9673 5.17936C40.1112 1.32332 35.7043 0.772461 31.8483 0.772461H1Z" stroke="#413A36" stroke-miterlimit="10"></path>
<path d="M44.5225 5.72961C46.7259 10.1365 46.7259 17.8486 46.175 22.2555C51.1328 21.1538 60.4975 21.7046 65.4552 25.5607L44.5225 5.72961Z" stroke="#413A36" stroke-miterlimit="10" stroke-linejoin="round"></path>
<text fill="#413A36" xml:space="preserve" style="white-space: pre" font-family="Styrene B Trial" font-size="14" letter-spacing="0em"><tspan x="1" y="117.987">PDF capt...</tspan></text>
</svg>`;

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Styrene+A+Trial:wght@400;700&family=Styrene+B+Trial:wght@400;500&display=swap" rel="stylesheet" />
      <div className="place-details-container">
        <header className="place-header">
          <button className="nav-arrow-btn" aria-label="Previous">
            <CustomCode code={leftArrowSvg} />
          </button>
          <div className="place-title-group">
            <div className="place-date-range">
              <span className="date-year">1920</span>
              <span className="date-separator">—</span>
              <span className="date-year">1925</span>
            </div>
            <h1 className="place-main-title">Saint Lawrence School</h1>
          </div>
          <button className="nav-arrow-btn" aria-label="Next">
            <CustomCode code={rightArrowSvg} />
          </button>
        </header>

        <div className="dropdown-center">
          <DropdownSelect />
        </div>

        <TimelinePanel />
        <section className="location-section">
          <h2 className="section-title">Location</h2>
          <div className="location-coords">
            <span className="coord-label">From</span>
            <span className="coord-value">40.7306, -74.0103</span>
            <span className="coord-label">To</span>
            <span className="coord-value">40.7128, -73.9857</span>
          </div>
        </section>

        <section className="posted-by-section">
          <h2 className="section-title">Posted by</h2>
          <div className="posted-by-info">
            <span className="author-name">James Levy</span>
            <div className="group-badge">
              <span>Group name</span>
            </div>
          </div>
        </section>

        <section className="images-section">
          <div className="section-header">
            <h2 className="section-title">Images</h2>
            <div className="image-pagination">
              <span className="page-number">1</span>
              <span className="page-of">of</span>
              <span className="page-number">4</span>
            </div>
          </div>
          <div className="image-content">
            <div className="image-wrapper">
              <RawImg 
                image="https://api.builder.io/api/v1/image/assets/TEMP/2a3f65542bc58982dbd43b395c945292367f5e2d?width=1080" 
                altText="Place photo" 
                className="place-image"
              />
            </div>
            <div className="image-caption-nav">
              <p className="image-caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in magna a nibh eleifend volutpat.</p>
              <div className="image-nav">
                <a href="#" className="nav-link">Previous</a>
                <a href="#" className="nav-link">Next</a>
              </div>
            </div>
          </div>
        </section>

        <section className="occupants-section">
          <h2 className="section-title">Occupants</h2>
          <div className="occupant-name">John Doe</div>
        </section>

        <section className="other-occupants-section">
          <h2 className="section-title">Other Occupant Details</h2>
          <p className="occupant-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </section>

        <section className="story-section">
          <h2 className="section-title">Story of Place</h2>
          <p className="story-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in magna a nibh eleifend volutpat. Nunc in vehicula elit, et eleifend nulla. Aenean blandit ipsum ac lorem suscipit facilisis.</p>
        </section>

        <section className="sources-section">
          <h2 className="section-title">Sources</h2>
          <p className="source-content">Lorem ipsum dolor sit amet.</p>
        </section>

        <section className="artifacts-section">
          <div className="section-header">
            <h2 className="section-title">Artifacts</h2>
            <span className="artifact-count">1 AUDIO, 1 PDF</span>
          </div>
          <div className="artifacts-list">
            <CustomCode code={audioSvg} className="artifact-item" />
            <CustomCode code={pdfSvg} className="artifact-item" />
          </div>
        </section>

        <section className="comments-section">
          <div className="comments-header">
            <h2 className="section-title">Comments (2)</h2>
            <button className="close-btn">CLOSE</button>
          </div>
          
          <article className="comment">
            <div className="comment-header">
              <span className="comment-author">James Levy</span>
              <span className="comment-date">September 4, 2025 7:00pm</span>
            </div>
            <p className="comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in magna a nibh eleifend volutpat. Nunc in vehicula elit, et eleifend nulla. Aenean blandit ipsum ac lorem suscipit facilisis.</p>
          </article>

          <article className="comment">
            <div className="comment-header">
              <span className="comment-author">Marshall Hoff</span>
              <span className="comment-date">September 4, 2025 10:00am</span>
            </div>
            <p className="comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in magna a nibh eleifend volutpat. Nunc in vehicula elit, et eleifend nulla. Aenean blandit ipsum ac lorem suscipit facilisis.</p>
          </article>

          <div className="add-comment-wrapper">
            <button className="btn-secondary">Leave a Comment</button>
          </div>
        </section>

        <nav className="bottom-navigation">
          <a href="#" className="nav-link">Previous</a>
          <div className="bottom-pagination">
            <span className="page-number">1</span>
            <span className="page-of">of</span>
            <span className="page-number">4</span>
          </div>
          <a href="#" className="nav-link">Next</a>
        </nav>

        <div className="add-story-cta">
          <p className="cta-text">Have a story to share about this place?</p>
          <button className="btn-primary">Add a Story</button>
        </div>
      </div>
    </>
  );
}
