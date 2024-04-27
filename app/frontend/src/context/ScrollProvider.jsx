import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import ScrollContext from './ScrollContext';


function ScrollProvider({ children }) {
  const [scrollToSection, setScrollToSection] = useState(null);

  const values = useMemo(() => ({
    scrollToSection,
    setScrollToSection,
  }), [scrollToSection, setScrollToSection]);

  return (
    <ScrollContext.Provider value={values}>
      {children}
    </ScrollContext.Provider>
  )
}

ScrollProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ScrollProvider
