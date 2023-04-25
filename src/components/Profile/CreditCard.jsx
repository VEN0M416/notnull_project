import { useState } from "react";

function CreditCard(props) {

    const [isShow, setIsShow] = useState(false);

    const toCardView = (number) => {
        return number.replace(/(\d{4})/g, '$1 ');
    }
    const toSaveCardView = (number) => {
        const arr = number.replace(/(\d{12})/g, '$1 ').split(' ');
        return '**** **** **** ' + arr[1];
    }

    return(<>
        <div onClick={()=>{setIsShow(!isShow)}} class="w-full h-full m-auto bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-xl relative text-white shadow-xl transition-transform transform hover:scale-105">
                
            {/* <img class="relative object-cover w-full h-full rounded-xl" src="https://i.imgur.com/kGkSg1v.png"/> */}

            <div class="w-full px-8 absolute top-4 sm:top-8">
                <div class="flex justify-between">
                    <div class="">
                        <p class="font-light">
                            Name
                        </p>
                        <p class="font-medium tracking-widest">
                            {props.name}
                        </p>
                    </div>
                    <img class="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png"/>
                </div>
                <div class="pt-1">
                    <p class="font-light">
                        Card Number
                    </p>
                    <p class="font-medium tracking-more-wider">
                        {isShow ? toCardView(props.cardNumber) : toSaveCardView(props.cardNumber)}
                    </p>
                </div>
                <div class="pt-6 pr-6">
                    <div class="flex justify-between">
                        <div class="">
                            <p class="font-light text-xs">
                                MONTH/YEAR
                            </p>
                            <p class="font-medium tracking-wider">
                                {props.cardDate}
                            </p>
                        </div>
                        <div class="">
                            <p class="font-light text-xs text-center">
                                CVV
                            </p>
                            <p class="font-medium text-center tracking-wider">
                                {isShow ? props.cvv : '***'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export {CreditCard};