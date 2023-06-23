import { useState } from "react";
import {
  OptionArcade,
  OptionAdvanced,
  OptionPro,
  Period,
  Switch,
  Span,
} from "./styled";
import arcade from "../../assets/images/icon-arcade.svg";
import advanced from "../../assets/images/icon-advanced.svg";
import pro from "../../assets/images/icon-pro.svg";
import ball from "../../assets/images/icon-ball.svg";
import { colors } from "../../config/colors";

interface InputProps {
  type: "checkbox";
  name: string;
  monthly: string;
}

export function PlansOptions() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [isArcade, setIsArcade] = useState(false);
  const [isAdvanced, setIsAdvanced] = useState(false);
  const [isPro, setIsPro] = useState(false);

  const inputProps: InputProps = {
    type: "checkbox",
    name: "switch",
    monthly: isMonthly.toString(),
  };

  return (
    <>
      <OptionArcade
        onClick={() => setIsArcade(!isArcade)}
        style={{
          backgroundColor: isArcade && colors.primary.pastelBlue,
          borderColor: isArcade && colors.primary.purplishBlue,
        }}
      >
        <img src={arcade} alt="Arcade control icon" />
        <div>
          <span>Arcade</span>
          <span>$9/mo</span>
        </div>
      </OptionArcade>
      <OptionAdvanced
        onClick={() => setIsAdvanced(!isAdvanced)}
        style={{
          backgroundColor: isAdvanced && colors.primary.pastelBlue,
          borderColor: isAdvanced && colors.primary.purplishBlue,
        }}
      >
        <img src={advanced} alt="Switch control icon" />
        <div>
          <span>Advanced</span>
          <span>$12/mo</span>
        </div>
      </OptionAdvanced>
      <OptionPro
        onClick={() => setIsPro(!isPro)}
        style={{
          backgroundColor: isPro && colors.primary.pastelBlue,
          borderColor: isPro && colors.primary.purplishBlue,
        }}
      >
        <img src={pro} alt="Console control icon" />
        <div>
          <span>Pro</span>
          <span>$15/mo</span>
        </div>
      </OptionPro>
      <Period>
        <Span monthly={isMonthly}>Monthly</Span>
        <Switch htmlFor="switch" monthly={isMonthly}>
          <input {...inputProps} />
          <span className="check">
            <img
              src={ball}
              alt="White Ball Icon"
              onClick={() => setIsMonthly(!isMonthly)}
            />
          </span>
        </Switch>
        <Span monthly={isMonthly}>Yearly</Span>
      </Period>
    </>
  );
}
