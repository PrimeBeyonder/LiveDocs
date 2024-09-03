"use client";
import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { ClientSideSuspense, RoomProvider } from '@liveblocks/react/suspense';
import Header from '@/components/Header';
import ActiveCollaborators from './ActiveCollaborators';
import { Editor } from './editor/Editor';

interface CollaborativeRoomProps {
  roomId: string;
  roomMetadata?: any;
}

const CollaborativeRoom: React.FC<CollaborativeRoomProps> = ({ roomId, roomMetadata }) => {
  return (
    <RoomProvider id={roomId}>
      <ClientSideSuspense fallback={<div>Loading…</div>}>
        <div className='collaborative-room'>
          <Header>
            <div className='flex w-fit items-center justify-center gap-2'>
              <p className='document-title'>Share</p>
            </div>
            <div className="flex w-full flex-1 justify-end gap-2 sm:gap-4">
              <ActiveCollaborators />
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </Header>
          <Editor/>
        </div>
      </ClientSideSuspense>
    </RoomProvider>
  );
};

export default CollaborativeRoom;