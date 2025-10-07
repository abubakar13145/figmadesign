import React from 'react';
import MyComponent from './components/MyComponent.jsx';
import PlaceDetails from './components/PlaceDetails.jsx';

export default function App() {
  return (
    <div className="app-shell">
      <MyComponent />
      <PlaceDetails />
    </div>
  );
}
