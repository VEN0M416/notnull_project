import Particle from "../../background/Particle";
import React from "react";
import SignUpLogInForm from "../Forms/SignUpLogInForm";
import { Link } from "react-router-dom";
import error401 from '../Img/error401.png';

function UnAuthorized() {
    return (<>
        <>
            <Particle />
            <section className="">
                <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
                    <div className="wf-ull lg:w-1/2">
                        <p className="text-sm font-medium text-blue-500 dark:text-blue-400">401 error</p>
                        <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Access denied</h1>
                        <p className="mt-4 text-gray-500 dark:text-gray-400">To use these site features you must be logged in.<br />Here are some helpful links:</p>

                        <div className="flex items-center mt-6">
                            <div className='w-1/2 text-xl font-semibold tracking-wide text-white transition-colors duration-200 rounded-lg shrink-0 sm:w-auto'>
                                <SignUpLogInForm buttonColor={'bg-blue-500'}/>
                            </div>
                            <Link to="/">
                                <button className='bg-blue-500 w-1/2 px-3 mx-1 py-1 text-xl font-semibold tracking-wide text-white transition-colors duration-200 shrink-0 sm:w-auto hover:bg-blue-700 rounded-[10px] active:bg-activeBg'>
                                    Main page
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
                        <img src={error401} className="w-full max-w-lg lg:mx-auto" alt="" />
                    </div>
                </div>
            </section>
        </>
    </>)
}
export default UnAuthorized;