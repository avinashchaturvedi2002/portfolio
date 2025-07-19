
import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-8LES3TCDQH"); 
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};
