import React, {useState} from 'react';
import {styled} from "goober";
import {useLocked} from "../../hooks/useLocked";

interface Params {
  label: string;
  initialValue: boolean;
  onToggle: (value: boolean) => void;
}

const ToggleButtonContainer = styled('div')`
  cursor: pointer;
  padding: 5px 10px;
  border: 1px solid var(--sn-stylekit-border-color);
  border-radius: 3px;
  display: flex;
  align-items: center;
  margin: 0 5px;

  svg {
    margin-right: 5px;
  }

  path {
    stroke: var(--sn-stylekit-secondary-foreground-color) !important;
  }
`;

const CheckedSvg = () => {
  return <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69.1483214208265 69.14832142082645" width="18"
              height="18">
    <g stroke-linecap="round" transform="translate(10 10) rotate(0 24.574160710413253 24.574160710413224)">
      <path
        d="M12.29 0 M12.29 0 C17.28 1.58, 24.88 -0.33, 36.86 0 M12.29 0 C21.53 0.73, 32.3 -0.71, 36.86 0 M36.86 0 C45.51 1.42, 49.76 3.84, 49.15 12.29 M36.86 0 C47 -1.37, 49.27 2.9, 49.15 12.29 M49.15 12.29 C48.39 16.29, 47.54 21.44, 49.15 36.86 M49.15 12.29 C49 20.87, 48.89 28.38, 49.15 36.86 M49.15 36.86 C48.73 43.57, 43.28 49.05, 36.86 49.15 M49.15 36.86 C48.69 46.02, 44.4 49.67, 36.86 49.15 M36.86 49.15 C28.06 51.22, 18.26 50.42, 12.29 49.15 M36.86 49.15 C31.32 48.49, 26.37 48.3, 12.29 49.15 M12.29 49.15 C4.36 49.89, 1.11 45.51, 0 36.86 M12.29 49.15 C5.65 51.13, 0.55 46.19, 0 36.86 M0 36.86 C1.3 27.3, 0.5 21.06, 0 12.29 M0 36.86 C1.05 32.6, 0.5 26.16, 0 12.29 M0 12.29 C0.89 5.49, 5.29 0.54, 12.29 0 M0 12.29 C-0.9 4.78, 4.87 -0.14, 12.29 0"
        stroke="#000000" stroke-width="4" fill="none"></path>
    </g>
    <g stroke-linecap="round">
      <g transform="translate(19.946052285931728 38.641870354212585) rotate(0 5.0805240542937895 4.607971833000562)">
        <path d="M-1.06 -0.09 C0.95 1.3, 9.43 7.33, 11.22 9.11 M0.58 -1.19 C2.58 0.31, 8.75 8.74, 10.7 10.4" stroke="#000000"
              stroke-width="4"
              fill="none"></path>
      </g>
    </g>
    <mask></mask>
    <g stroke-linecap="round">
      <g transform="translate(32.44605228593173 47.39187035421253) rotate(0 8.497141993989544 -11.472141463905558)">
        <path d="M0.37 -0.91 C2.89 -4.45, 12.85 -18.61, 15.69 -22.21 M-0.9 1.23 C1.94 -2.62, 14.9 -20.45, 17.89 -24.18" stroke="#000000"
              stroke-width="4" fill="none"></path>
      </g>
    </g>
    <mask></mask>
  </svg>;
};

const UncheckedSvg = () => {
  return <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69.1483214208265 69.14832142082645" width="18"
              height="18">
    <g stroke-linecap="round" transform="translate(10 10) rotate(0 24.574160710413253 24.574160710413224)">
      <path
        d="M12.29 0 M12.29 0 C17.28 1.58, 24.88 -0.33, 36.86 0 M12.29 0 C21.53 0.73, 32.3 -0.71, 36.86 0 M36.86 0 C45.51 1.42, 49.76 3.84, 49.15 12.29 M36.86 0 C47 -1.37, 49.27 2.9, 49.15 12.29 M49.15 12.29 C48.39 16.29, 47.54 21.44, 49.15 36.86 M49.15 12.29 C49 20.87, 48.89 28.38, 49.15 36.86 M49.15 36.86 C48.73 43.57, 43.28 49.05, 36.86 49.15 M49.15 36.86 C48.69 46.02, 44.4 49.67, 36.86 49.15 M36.86 49.15 C28.06 51.22, 18.26 50.42, 12.29 49.15 M36.86 49.15 C31.32 48.49, 26.37 48.3, 12.29 49.15 M12.29 49.15 C4.36 49.89, 1.11 45.51, 0 36.86 M12.29 49.15 C5.65 51.13, 0.55 46.19, 0 36.86 M0 36.86 C1.3 27.3, 0.5 21.06, 0 12.29 M0 36.86 C1.05 32.6, 0.5 26.16, 0 12.29 M0 12.29 C0.89 5.49, 5.29 0.54, 12.29 0 M0 12.29 C-0.9 4.78, 4.87 -0.14, 12.29 0"
        stroke="#000000" stroke-width="4" fill="none"></path>
    </g>
  </svg>;
};

const ToggleButton = ({label, initialValue, onToggle}: Params) => {
  const {locked} = useLocked();
  const [value, setValue] = useState(initialValue);
  const toggle = () => {
    if (locked) return;
    setValue(!value);
    onToggle(!value);
  };
  return <ToggleButtonContainer onClick={toggle}>
    {value ? <CheckedSvg/> : <UncheckedSvg/>}
    {label}
  </ToggleButtonContainer>;
}

export default ToggleButton
