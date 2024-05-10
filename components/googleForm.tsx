import NextImage  from "next/image"
import { signIn, signOut, useSession } from "next-auth/react";

export default function GoogleFormu () {
    const { data: session } = useSession();
    console.log(session);

    return (<>
        

        {  !session?.user ? (<>

                <div className="flex items-center justify-center ">
                    <button className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
                        onClick={()=>signIn()}
                        >
                        <NextImage 
                        className="w-6 h-6" 
                        width={24}
                        height={24} 
                        src="https://www.svgrepo.com/show/475656/google-color.svg" 
                        loading="lazy" 
                        alt="google logo"/>
                        <span>Login with Google</span>
                    </button>
                </div>
                <div className="mt-4 flex items-center justify-between">
                    <span className="border-b w-1/5 lg:w-1/4"></span>
                    <a href="#" className="text-xs text-center text-gray-500 uppercase">or login with email</a>
                    <span className="border-b w-1/5 lg:w-1/4"></span>
                </div>
                <div className="mt-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                    <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" />
                </div>
                <div className="mt-4">
                    <div className="flex justify-between">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <a href="#" className="text-xs text-gray-500">Forget Password?</a>
                    </div>
                    <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" />
                </div>
                <div className="mt-8">
                    <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Login</button>
                </div>
                <div className="mt-4 flex items-center justify-between">
                    <span className="border-b w-1/5 md:w-1/4"></span>
                    <a href="#" className="text-xs text-gray-500 uppercase">or sign up</a>
                    <span className="border-b w-1/5 md:w-1/4"></span>
                </div>
            </>) : (<>
                
            </>)
    }

    </>)
}
