import React from 'react';
//import PropTypes from 'prop-types';

import styles from './Button.module.css';

type ButtonTypes = {
  text: string;
  height: number;
  mode: 'contain' | 'outline';
}

function Button({ text, height, mode } : ButtonTypes) {
  return (
    <div
      className={mode === 'contain' ? styles['button-contain'] : styles['button-outline']}
      style={{
        height: height,
      }}
    >
      {text}
    </div>
  );
}

// Button.propTypes = {
//   text: PropTypes.string.isRequired,
//   height: PropTypes.number,
//   mode: PropTypes.oneOf(['contain', 'outline']),
// };

Button.defaultProps = {
  height: 72,
};

export default Button;