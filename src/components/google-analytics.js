import ReactGA from "react-ga4";
import { useEffect } from "react";

const initializeGA = () => {
  ReactGA.initialize("G-0D2Y2FDLNY");
};

const trackGAEvent = (category, action, label) => {/* 
  console.log("GA event:", category, ":", action, ":", label); */
  // Send GA4 Event
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};

const GoogleAnalytics = () => {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initializeGA();
      window.GA_INITIALIZED = true;
    }
  }, []);

  return null; // or any other React component if needed
};

export { initializeGA, trackGAEvent, GoogleAnalytics };
