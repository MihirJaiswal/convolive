'use client'
import React, { useState } from 'react'
import { HomeCard } from './HomeCard'
import { useRouter } from 'next/navigation'



export const MeetingTypeList = () => {
  const [meetingState, setMeetingState] = useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>()
  const router = useRouter()
  return (
    <div className='mt-4 flex flex-col md:flex-row items-center gap-2 justify-between z-10'>
      <HomeCard
          img="/icons/add-meeting.svg"
          title="New Meeting"
          description="Start a new meeting"
          handleClick = {() => setMeetingState('isInstantMeeting')}
          />
           <HomeCard
            img="/icons/join-meeting.svg"
            title="Join Meeting"
            description="via invitation link"
            handleClick={() => setMeetingState('isJoiningMeeting')}
          />
          <HomeCard
          img="/icons/schedule.svg"
          title="Schedule Meeting"
          description="Plan your meeting"
          handleClick = {() => setMeetingState('isScheduleMeeting')}
          />
          <HomeCard
          img="/icons/recordings.svg"
          title="View Recordings"
          description="Check your recordings"
          handleClick = {() => router.push('/meet/recordings')}
          />
         
    </div>
  )
}
