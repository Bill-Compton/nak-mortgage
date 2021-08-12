import React, { Fragment, useEffect } from "react";
import {
  RightColumn,
  LeftColumn,
  PricingContainer,
  StyledHeading,
  ColumnContainer,
} from "./Pricing.style";

export default function Pricing() {
  useEffect(() => {
    const calc = document.getElementById("mortgage-calculator");
    const left = document.getElementById("left-column");
    const right = document.getElementById("right-column");
    const usRate = document.getElementById("us-rates");
    const azRate = document.getElementById("az-rates");
    if (calc === null || usRate === null || azRate === null) {
      window.location.reload();
    } else {
      left.appendChild(calc);
      right.appendChild(usRate);
      usRate.after(azRate);
      window.scrollTo({ top: 0, behavior: "smooth" });
      calc.style.display = "block";
      calc.style.position = "relative";
      usRate.style.display = "block";
      usRate.style.position = "relative";
      azRate.style.display = "block";
      azRate.style.position = "relative";
    }
  });

  return (
    <Fragment>
      <PricingContainer>
        <StyledHeading>Rates and Calculators</StyledHeading>
          <LeftColumn id="left-column" />
          <RightColumn id="right-column" />
      </PricingContainer>
    </Fragment>
  );
}
