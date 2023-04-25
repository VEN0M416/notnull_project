import { Dispatch, useCallback } from "react";
import { useState } from "react";

function NewCard() {

    const [name, setName]= useState('');
    const [date, setDate]= useState('');
    const [cvv, setCvv] = useState('');

    return(<>
        
        <div className='w-80 sm:w-96 h-56 sm:h-56 z-30 mx-auto'>
            <div class="w-full h-full m-auto bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl rounded-xl relative text-white shadow-xl">

                <div class="w-full px-8 absolute top-4 sm:top-8">
                <div class="flex justify-between">
                    <div class="">
                        <p class="font-light">
                            Name
                        </p>
                        <p class="font-medium tracking-widest">
                            namename
                        </p>
                    </div>
                    <img class="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png"/>
                </div>
                <div class="pt-1">
                    <p class="font-light">
                        Card Number
                    </p>
                    <p class="font-medium tracking-more-wider">
                        12412341234124
                    </p>
                </div>
                <div class="pt-6 pr-6">
                    <div class="flex justify-between">
                        <div class="">
                            <p class="font-light text-xs">
                                MONTH/YEAR
                            </p>
                            <p class="font-medium tracking-wider">
                                11/22
                            </p>
                        </div>
                        <div class="">
                            <p class="font-light text-xs text-center">
                                CVV
                            </p>
                            <p class="font-medium text-center tracking-wider">
                                123
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </>)
}
export {NewCard};