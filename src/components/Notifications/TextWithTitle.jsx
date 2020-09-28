import React from 'react';
import PropTypes from 'prop-types';

const TextWithTitle = ({ icon, title, text }) => (
  <>
    <div className="toast-header">
      <i className={`${icon} mr-2`} />
      <strong className="mr-auto">{title}</strong>
    </div>
    <div className="toast-body">
      {text}
    </div>
  </>
);

TextWithTitle.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

TextWithTitle.defaultProps = {
  icon: 'ni ni-bell-55',
};

export default TextWithTitle;
