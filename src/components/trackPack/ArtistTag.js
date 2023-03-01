import React from 'react';

const ArtistTag = ({ btnText, className }) => {
  return (
    <button
      className={`font-aril bg-white text-MoshDark-7 !leading-[160%] md:py-1 py-[5px] px-2 md:px-2.5 rounded  text-[11px] md:text-xs ${className}`}
    >
      {btnText}
    </button>
  );
};

export default ArtistTag;
