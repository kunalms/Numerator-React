import React from 'react';

const NotFound = () => (
  <div className="content-container">
    <div className="content-title-group not-found">
      <i className="fas fa-exclamation-triangle" aria-hidden="true" />
      &nbsp;
      <span className="title">{`This page is still under development`}</span>
    </div>
  </div>
);

export default NotFound;
