import './SeasonDisplay.css'
import React from 'react';

const seasonConfig = {
  summer: {
    text: "Mmmmm warm",
    iconName: 'sun'
  },
  winter: {
    text: "Oof it's cold outside",
    iconName: 'snowflake'
  }
};

const getSeason = (lat, month) =>{
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const seasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName} = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default seasonDisplay;
