import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('UA-XXXXXXX-X'); // Replace with your Google Analytics tracking ID
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
