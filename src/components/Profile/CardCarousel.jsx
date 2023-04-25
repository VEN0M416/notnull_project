import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { CreditCard } from "./CreditCard";
import { NewCard } from "./NewCard";
import { Modal } from "../Forms/Modal";

function CardCarousel (props) {

    const [isShowNewCard, setIsShowNewCard] = useState(false);
    function closeModal () {
        setIsShowNewCard(false);
    }

    const cards = useSelector((state)=>state.profile.cards);
    
    return (<>
        <div className='w-full pt-6 pb-6 snap-x snap-mandatory relative flex gap-4 overflow-x-auto'>
            <div className='snap-center shrink-0 sm:w-24 md:w-44'></div>
                {cards.map((card)=>
                    <div className='snap-center snap-always shrink-0'>
                        <div className='w-80 sm:w-96 h-56 sm:h-56 '>
                            <CreditCard name={card.cardName} cardNumber={card.cardNumber} cardDate={card.cardDate} cvv={card.cardCvv}/>
                        </div>
                    </div>
                )}
                <div className='snap-center snap-always shrink-0'>
                    <div className='w-80 sm:w-96 h-56 sm:h-56 '>
                        <div onClick={()=>{setIsShowNewCard(true)}} className='flex items-center justify-center w-full h-full m-auto bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-xl relative text-white shadow-xl transition-transform transform hover:scale-105'>
                        <div className='text-center text-3xl font-light'>Новая карта</div>
                    </div>
                </div>
            </div>
            <div className='snap-center shrink-0 sm:w-24 md:w-44'></div>
            { isShowNewCard && 
                <Modal closeModal={closeModal}>
                    <NewCard/>
                </Modal>}
        </div>
    </>)
}

export {CardCarousel};