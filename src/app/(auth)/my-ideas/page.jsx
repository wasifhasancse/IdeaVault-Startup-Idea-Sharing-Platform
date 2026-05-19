import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';


const MyIdeas = async() => {
  const session = await auth.api.getSession({ headers: await headers() });
  return (
    <div className='text-4xl'>

    </div>
  );
};

export default MyIdeas;
