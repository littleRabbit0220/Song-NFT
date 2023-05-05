import React from 'react';
import LeadBoardHead from './LeadBoardHead';
import LeadBoardList from './LeadBoardList';
import NeverMissCTA from '../NeverMissCTA';
import Alert from '../utils/elements/Alert';

export default function LeadBoard() {
  return (
    <div className='lead-board'>
      <div className='max-w-[1400px] px-5 mx-auto  pt-10 lg:pt-[91px] mb-20 min-h-screen'>
        <h2 className='text-4xl font-bold text-center lg:text-6xl'>
          Leaderboard
        </h2>
        <div className='pt-8'>
          <LeadBoardHead />
          <LeadBoardList />
        </div>
      </div>
      <NeverMissCTA />
    </div>
  );
}
