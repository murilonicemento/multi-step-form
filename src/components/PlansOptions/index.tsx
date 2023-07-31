import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  OptionArcade,
  OptionAdvanced,
  OptionPro,
  Period,
  Switch,
  Span,
  MyButton,
  Options,
} from "./styled";
import { colors } from "../../config/colors";
import arcade from "../../assets/images/icon-arcade.svg";
import advanced from "../../assets/images/icon-advanced.svg";
import pro from "../../assets/images/icon-pro.svg";
import ball from "../../assets/images/icon-ball.svg";
import { useGlobalContext } from "../../hooks/useGlobalContext";

export function PlansOptions() {
  const { monthly, setMonthly, setPlan, planType, setPlanType } =
    useGlobalContext();
  const [isMonthly, setIsMonthly] = useState(monthly);
  const [isArcade, setIsArcade] = useState(false);
  const [isAdvanced, setIsAdvanced] = useState(false);
  const [isPro, setIsPro] = useState(false);
  const navigate = useNavigate();

  interface InputProps {
    type: "checkbox";
    name: string;
    defaultChecked: boolean;
    monthly: string;
  }

  interface PlansValues {
    planType: string;
    isSelected: boolean;
    price: number;
  }

  const inputProps: InputProps = {
    type: "checkbox",
    name: "switch",
    defaultChecked: isMonthly,
    monthly: isMonthly.toString(),
  };

  function verifyQuantityPlansSelected(plansValues: PlansValues[]) {
    const quantityPlansSelected = plansValues.filter(
      (plan) => plan.isSelected === true
    );

    if (quantityPlansSelected.length > 1)
      return alert("You can only select one plan");

    plansValues.forEach((plan) => {
      if (plan.isSelected) {
        setPlanType(plan.planType);
        setPlan(plan.price);
      }
    });
  }

  function verifyPlans(event: { preventDefault: () => void }) {
    event.preventDefault();
    const plansValues = [
      {
        planType: "Arcade",
        isSelected: isArcade,
        price: isMonthly ? 9 : 90,
      },
      {
        planType: "Advanced",
        isSelected: isAdvanced,
        price: isMonthly ? 12 : 120,
      },
      {
        planType: "Pro",
        isSelected: isPro,
        price: isMonthly ? 15 : 150,
      },
    ];

    verifyQuantityPlansSelected(plansValues);

    setMonthly(isMonthly);
    navigate("/addOns");
  }

  function verifyPlanType(plan: string): void {
    if (plan === "Arcade") setIsArcade(true);
    if (plan === "Advanced") setIsAdvanced(true);
    if (plan === "Pro") setIsPro(true);
  }

  useEffect(() => {
    verifyPlanType(planType);
  }, [planType]);

  return (
    <>
      <Options>
        <OptionArcade
          onClick={() => setIsArcade(!isArcade)}
          style={{
            backgroundColor: isArcade ? colors.primary.pastelBlue : "",
            borderColor: isArcade ? colors.primary.purplishBlue : "",
          }}
        >
          <img src={arcade} alt="Arcade control icon" />
          <div>
            <span>Arcade</span>
            {isMonthly ? <span>$9/mo</span> : <span>$90/yr</span>}
          </div>
        </OptionArcade>
        <OptionAdvanced
          onClick={() => setIsAdvanced(!isAdvanced)}
          style={{
            backgroundColor: isAdvanced ? colors.primary.pastelBlue : "",
            borderColor: isAdvanced ? colors.primary.purplishBlue : "",
          }}
        >
          <img src={advanced} alt="Switch control icon" />
          <div>
            <span>Advanced</span>
            {isMonthly ? <span>$12/mo</span> : <span>$120/yr</span>}
          </div>
        </OptionAdvanced>
        <OptionPro
          onClick={() => setIsPro(!isPro)}
          style={{
            backgroundColor: isPro ? colors.primary.pastelBlue : "",
            borderColor: isPro ? colors.primary.purplishBlue : "",
          }}
        >
          <img src={pro} alt="Console control icon" />
          <div>
            <span>Advanced</span>
            {isMonthly ? <span>$15/mo</span> : <span>$150/yr</span>}
          </div>
        </OptionPro>
      </Options>
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
      <MyButton onClick={verifyPlans}>
        <span>Next Step</span>
      </MyButton>
    </>
  );
}
