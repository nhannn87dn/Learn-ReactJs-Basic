import { useState } from "react";

// Details
// Shipping
// Payment

type CheckoutStep = "Details" | "Shipping" | "Payment";


const TsEnums = () => {
    const [checkoutStep, setCheckoutStep] = useState<CheckoutStep>("Details");

    return (
      <>
        {checkoutStep === "Details" && (
          <>
            <h1>Details</h1>
            <button type="button" onClick={() => setCheckoutStep("Shipping")}>
              Next
            </button>
          </>
        )}
  
        {checkoutStep === "Shipping" && (
          <>
            <h1>Shipping</h1>
            <button type="button" onClick={() => setCheckoutStep("Payment")}>
              Next
            </button>
          </>
        )}
  
        {checkoutStep === "Payment" && (
          <>
            <h1>Payment</h1>
          </>
        )}
      </>
    );
}

export default TsEnums