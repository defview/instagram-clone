import { getProviders, signIn } from "next-auth/react"
import Image from "next/image"
import Header from "../../components/Header"

export default function SignIn({ providers }) {
  return (
    <>
    <Header />
    <div className="flex flex-col items-center justify-center min-h-screen
    py-2 -mt-[70px] px-10 text-center">
      <Image 
      src="/instagram.png" 
      width={320}
      height={150} 
      objectFit='contain'/>
      <p className="italic text-md">Welcome to my build</p>
    <div className="mt-20">
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className="border rounded-lg bg-blue-500 text-white px-3 py-2
          hover:border-transparent shadow-xl hover:bg-white hover:text-blue-500 transition
          duration-700 ease-in-out hover:shadow-blue-400" 
          onClick={() => signIn(provider.id, { callbackUrl: "/"})}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
    </div>
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}