import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'reactstrap';

const TextWithButton = ({
  icon, title, text, href, btnText,
}) => (
  <>
    <div className="toast-header">
      <i className={`${icon} mr-2`} />
      <strong className="mr-auto">{title}</strong>
    </div>
    <div className="toast-body">
      {text}
    </div>
    <div className="toast-footer">
      <Button className="text-white" color="transparent" href={href}>{btnText}</Button>
    </div>
  </>
);

TextWithButton.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
};

TextWithButton.defaultProps = {
  icon: 'ni ni-bell-55',
};

export default TextWithButton;
