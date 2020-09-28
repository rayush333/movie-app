import React from 'react';



const LoaderComponent = ({isLoading, children}) => {
  if (isLoading) {
    return (
              <div className="loader-container">
                  <div className="loader">
                      <br/><br/>
                      <div className="loader-title">Loading Movies</div>
                      <br/>
                      <div className="lds-grid">
                          <div />
                          <div />
                          <div />
                          <div />
                          <div />
                          <div />
                          <div />
                          <div />
                          <div />
                      </div>
                  </div>
              </div>

    );
  }
  // Render nothing if no children present
  return children ? children : null;
}

export default LoaderComponent;
