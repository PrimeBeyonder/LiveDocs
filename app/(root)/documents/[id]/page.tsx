import CollaborativeRoom from '@/components/CollaborativeRoom'
import { getDocument } from '@/lib/actions/room.actions'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

const Document =  async ({ params: { id } }: SearchParamProps) => {
  const clerkUser = await currentUser();

  const room = await getDocument({
    roomId: id,
    userId: clerkUser.emailAddresses[0].emailAddress,
  });
  if(!room) redirect('/');
  return (
    <div>
    <CollaborativeRoom 
        roomId={id}
        roomMetadata={room.metadata} currentUserType={'creator'}         />
    </div>
  )
}

export default Document
