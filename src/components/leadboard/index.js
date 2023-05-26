import React, {useContext, useEffect, useState} from 'react';
import cloneDeep from 'lodash/cloneDeep'
import LeadBoardHead from './LeadBoardHead';
import LeadBoardList from './LeadBoardList';
import NeverMissCTA from '../NeverMissCTA';
import { UserContext } from '@/context/UserContext';

export default function LeadBoard() {

 const { getTopUsers ,state} = useContext(UserContext);
 const {leaderboard_list} = state;
 const [list, setList] = useState([]);

 useEffect(() => {
  getTopUsers();
 },[]);
 useEffect(() => {
  console.log(leaderboard_list,"l")
  if(leaderboard_list.length>0) {
    setList(cloneDeep(leaderboard_list));
  }
 },[leaderboard_list]);
 useEffect(() => {
  console.log(list, 'list')
 },[list])
  return (
    <div className='lead-board'>
      <div className='max-w-[1400px] px-5 mx-auto  pt-10 lg:pt-[91px] mb-20 min-h-screen'>
        <h2 className='text-4xl font-bold text-center lg:text-6xl'>
          Leaderboard
        </h2>
        <div className='pt-8'>
          <LeadBoardHead />
          <LeadBoardList data={list}/>
        </div>
      </div>
      <NeverMissCTA />
    </div>
  );
}
