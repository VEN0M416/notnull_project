
function Modal ({closeModal, children}) {

    return (<>
        <button onClick={closeModal} className="fixed block h-full top-0 right-0 left-0 bg-black/50 z-10">
            {children}
        </button>
    </>)
}
export {Modal}