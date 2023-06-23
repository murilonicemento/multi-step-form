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

interface Plans {
  arcade: boolean;
  advanced: boolean;
  pro: boolean;
}

export function PlansOptions() {
  const [isMonthly, setIsMonthly] = useState(true);

  let plans: Plans = {
    arcade: false,
    advanced: false,
    pro: false,
  };

  const optionStyle = {
    backgroundColor: colors.primary.pastelBlue,
    borderColor: colors.primary.pastelBlue,
  };

  const inputProps: InputProps = {
    type: "checkbox",
    name: "switch",
    monthly: isMonthly.toString(),
  };

  return (
    <>
      <OptionArcade onClick={() => !plans.arcade}>
        <img src={arcade} alt="Arcade control icon" />
        <div>
          <span>Arcade</span>
          <span>$9/mo</span>
        </div>
      </OptionArcade>
      <OptionAdvanced onClick={() => !plans.advanced}>
        <img src={advanced} alt="Switch control icon" />
        <div>
          <span>Advanced</span>
          <span>$12/mo</span>
        </div>
      </OptionAdvanced>
      <OptionPro onClick={() => !plans.pro}>
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
