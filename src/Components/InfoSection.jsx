import React from 'react';
import PropTypes from 'prop-types';

const InfoSection = ({ title, informations }) => {
  return (
    <div className="footer-section">
      <h4>{title}</h4>
      <ul>
        {informations.map((info, index) => (
          <li key={index}>
            <a href={info.link}>{info.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

InfoSection.propTypes = {
  title: PropTypes.string.isRequired,
  informations: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  ).isRequired
};

export default InfoSection;
