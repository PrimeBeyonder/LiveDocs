'use client';
import React, { ReactNode } from 'react'
import {ClientSideSuspense, LiveblocksProvider} from "@liveblocks/react/suspense";
import Loader from '@/components/Loader';
import { getClerkUsers } from '@/lib/actions/user.actions';

const Provider = ({children} : {children: ReactNode}) => {
  return (
    <LiveblocksProvider 
    resolveUsers={async ({ userIds }) => {
      const users = await getClerkUsers({ userIds});
      return users;
    }}
    authEndpoint='/api/liveblocks-auth'>

      <ClientSideSuspense fallback={<Loader/>}>
        {children}
      </ClientSideSuspense>
  </LiveblocksProvider>
  )
}

export default Provider
