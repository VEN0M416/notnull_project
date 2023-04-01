export default function Modal({ open, onClose, FormType, children}) {
    return (
        <div className={`fixed inset-0 ${open ? '' : 'pointer-events-none'}`}>
            {/* backdrop */}
            <div 
                className={`fixed inset-0 bg-black ${open ? 'opacity-50' : 'pointer-events-none opacity-0'}`} 
                onClick={onClose} 
            />
 
            {/* content */}
            <div className={`fixed top-5 left-1/3 rounded-[15px] bg-indigo-900 text-white shadow-lg w-full max-w-screen-sm ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
                <div className=' bg-indigo-950 flex justify-center rounded-t-[15px] py-4 text-3xl'>
                    {FormType}
                </div>
                { children }
                <div className="flex justify-center mb-5">
                    <button onClick={onClose} className=" mx-3 rounded-[10px] py-1 px-4 bg-hoverBg active:bg-activeBg">Close</button>
                </div>
            </div>
        </div>
    )
}