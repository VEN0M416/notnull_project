export default function Modal({ open, onClose, SendData, FormType, children}) {
    const BtnStyle=' mx-3 rounded-[10px] py-2 px-12 bg-gradient-to-r from-lime-500 to-green-500 active:from-lime-700 active:to-green-700';
    
    return (
        <div className={`fixed inset-0 ${open ? '' : 'pointer-events-none'}`}>
            {/* backdrop */}
            <div 
                className={`fixed inset-0 bg-black ${open ? 'opacity-50' : 'pointer-events-none opacity-0'}`} 
                onClick={onClose} 
            />
 
            {/* content */}
            <div className={`fixed top-[10%] left-1/3 rounded-[15px] bg-gradient-to-r from-cyan-700 to-blue-700  text-white shadow-lg w-full max-w-screen-sm ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
                <div className=' flex justify-center rounded-t-[15px] py-3 mt-4 text-3xl'>
                    {FormType}
                </div>
                { children }
                <div className="flex justify-center my-8 text-2xl">
                    <button onClick={onClose} className={BtnStyle}>Close</button>
                    <button onClick={()=>{
                        onClose();
                        SendData();
                    }} className={BtnStyle}>Send</button>
                </div>
            </div>
        </div>
    )
}