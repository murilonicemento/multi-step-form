import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddOnsArray, useGlobalContext } from "../../hooks/useGlobalContext";
import { Options, MyButton } from "./styled";
import { colors } from "../../config/colors";

export function AddOnsOptions() {
  const [isOnlineService, setIsOnlineService] = useState(false);
  const [isLargerStorage, setIsLargerStorage] = useState(false);
  const [isCustomizableProfile, setIsCustomizableProfile] = useState(false);
  const { monthly, setAddOns } = useGlobalContext();
  const navigate = useNavigate();

  function verifyAddOns(event: { preventDefault: () => void }) {
    event.preventDefault();

    const addOnsValues = [
      {
        addOnsType: "Online Service",
        isSelected: isOnlineService,
        price: monthly ? "+$1/mo" : "+$10/yr",
      },
      {
        addOnsType: "Larger Storage",
        isSelected: isLargerStorage,
        price: monthly ? "+$2/mo" : "+$20/yr",
      },
      {
        addOnsType: "Customizable Profile",
        isSelected: isCustomizableProfile,
        price: monthly ? "+$2/mo" : "+$20/yr",
      },
    ];
    const newAddOns: AddOnsArray[] = [];

    addOnsValues.forEach((addOn) => {
      if (addOn.isSelected) {
        newAddOns.push(addOn);
      }
    });

    setAddOns(newAddOns);
    navigate("/finish");
  }

  return (
    <>
      <Options
        style={{
          backgroundColor: isOnlineService ? colors.primary.lightBlue : "",
          borderColor: isOnlineService ? colors.primary.marineBlue : "",
        }}
      >
        <div>
          <input
            type="checkbox"
            name="check"
            id="onlineService"
            onChange={() => setIsOnlineService(!isOnlineService)}
            checked={isOnlineService}
          />
          <label htmlFor="onlineService"></label>
          <div>
            <span>Online service</span>
            <span>Access to multiplayer games</span>
          </div>
        </div>
        {monthly ? <span>+$1/mo</span> : <span>+$10/yr</span>}
      </Options>
      <Options
        style={{
          backgroundColor: isLargerStorage ? colors.primary.lightBlue : "",
          borderColor: isLargerStorage ? colors.primary.marineBlue : "",
        }}
      >
        <div>
          <input
            type="checkbox"
            name="check"
            id="largerStorage"
            onChange={() => setIsLargerStorage(!isLargerStorage)}
            checked={isLargerStorage}
          />
          <label htmlFor="largerStorage"></label>
          <div>
            <span>Larger storage</span>
            <span>Extra 1TB of cloud save</span>
          </div>
        </div>
        {monthly ? <span>+$2/mo</span> : <span>+$20/yr</span>}
      </Options>
      <Options
        style={{
          backgroundColor: isCustomizableProfile
            ? colors.primary.lightBlue
            : "",
          borderColor: isCustomizableProfile ? colors.primary.marineBlue : "",
        }}
      >
        <div>
          <input
            type="checkbox"
            name="check"
            id="customizableProfile"
            onChange={() => setIsCustomizableProfile(!isCustomizableProfile)}
            checked={isCustomizableProfile}
          />
          <label htmlFor="customizableProfile"></label>
          <div>
            <span>Customizable profile</span>
            <span>Custom theme on your profile</span>
          </div>
        </div>
        {monthly ? <span>+$2/mo</span> : <span>+$20/yr</span>}
      </Options>
      <MyButton onClick={verifyAddOns}>
        <span>Next Step</span>
      </MyButton>
    </>
  );
}
