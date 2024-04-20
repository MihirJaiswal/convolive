'use client'
import React, { useState } from 'react'
import { HomeCard } from './HomeCard'
import { useRouter } from 'next/navigation'
import { MeetingModal } from './MeetingModal'



export const MeetingTypeList = () => {
  const [meetingState, setMeetingState] = useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>()
  const router = useRouter()

  const createMeeting = () => {}
  return (
    <section>
    <div className='mt-4 flex flex-col md:flex-row items-center gap-2 justify-between ' style={{zIndex: 9999}}>
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
    <MeetingModal 
    isOpen={meetingState === 'isInstantMeeting'} 
    onClose={() => setMeetingState(undefined)} 
    title="Start a new Meeting"
    className="text-center" 
    buttonText="Start Meeting"
    handleClick={createMeeting} 
    />
    </section>
  )
}
