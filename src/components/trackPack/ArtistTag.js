import React from 'react';

const ArtistTag = ({ btnText, className }) => {
  return (
    <button
      className={`font-aril bg-white text-MoshDark-7 !leading-[167%] py-1 px-2.5 rounded text-xs ${className}`}
    >
      {btnText}
    </button>
  );
};

export default ArtistTag;
