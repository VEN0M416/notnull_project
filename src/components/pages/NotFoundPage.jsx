import { Link } from "react-router-dom";
import Particle from "../../background/Particle";
import error404 from "../Img/error404.png"


function NotFoundPage () {
    return(<>
        <section className="">
            <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
                <div className="wf-ull lg:w-1/2">
                    <p className="text-sm font-medium text-blue-500 dark:text-blue-400">404 error</p>
                    <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Page not found</h1>
                    <p className="mt-4 text-gray-500 dark:text-gray-400">Sorry, the page you are looking for doesn't exist.<br />Here are some helpful links:</p>

                    <div className="flex items-center mt-6 gap-x-3">
                        <Link to="/"><button className="bg-blue-500 px-3 py-1 text-xl font-semibold tracking-wide text-white transition-colors duration-200 shrink-0 sm:w-auto w-1/2 hover:bg-hoverBg rounded-[10px] active:bg-activeBg">
                            Main page
                        </button></Link>
                    </div>
                </div>

                <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
                    <img className="w-full max-w-lg lg:mx-auto" src={error404} alt=""/>
                </div>
            </div>
        </section>
    </>)
}
export default NotFoundPage;