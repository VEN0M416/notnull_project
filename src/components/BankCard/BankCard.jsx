import React, { useRef } from "react";

const BankForm = () => {
  const cardNumberRef = useRef();
  const cardHolderRef = useRef();
  const expiryDateRef = useRef();
  const cvvRef = useRef();

  const handleInputChange = (e, ref) => {
    const input = e.target;
    if (input.value.length === input.maxLength) {
      ref.current.focus();
    }
  };

  return (
    <div>
      <input
        type="text"
        maxLength={4}
        onChange={(e) => handleInputChange(e, cardHolderRef)}
        ref={cardNumberRef}
      />
      <input
        type="text"
        maxLength={5}
        onChange={(e) => handleInputChange(e, expiryDateRef)}
        ref={cardHolderRef}
      />
      <input
        type="text"
        maxLength={3}
        onChange={(e) => handleInputChange(e, cvvRef)}
        ref={expiryDateRef}
      />
      <input type="text" maxLength={3} ref={cvvRef} />
    </div>
  );
};

export default BankForm;
