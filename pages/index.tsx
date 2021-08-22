import type { NextPage } from 'next'
import { signIn, signOut, useSession } from 'next-auth/client'

const Home:NextPage = () => {
  const [ session ] = useSession()

  return (<div>
    {!session && <div>
      Not signed in <br/>
      <button onClick={() => signIn()}>Sign in</button>
    </div>}
    {session && <div>
      Signed in as @{session.user?.name} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </div>}
  </div>)
}

export default Home
