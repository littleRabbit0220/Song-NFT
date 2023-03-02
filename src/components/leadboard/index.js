import React from 'react';
import LeadBoardHead from './LeadBoardHead';
import LeadBoardList from './LeadBoardList';

export default function LeadBoard() {
  return (
    <div className='lead-board'>
      <div className='mosh-container-normal pt-10 lg:pt-[91px]'>
        <h2 className='text-4xl font-bold text-center lg:text-6xl'>
          Leaderboard
        </h2>
        <div className='pt-8'>
          <LeadBoardHead />
          <LeadBoardList />
        </div>
      </div>
    </div>
  );
}
