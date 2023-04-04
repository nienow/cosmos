import {styled} from "goober";

const Svg = styled('svg')`
  fill: var(--sn-stylekit-foreground-color);
`;

const DotsIcon = () => {
  return <Svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
    <path
      d="M13.333 10a1.666 1.666 0 1 1 3.333 0 1.666 1.666 0 0 1-3.333 0Zm-5 0a1.667 1.667 0 1 1 3.334 0 1.667 1.667 0 0 1-3.334 0Zm-5 0a1.667 1.667 0 1 1 3.334 0 1.666 1.667 0 0 1-3.334 0Z"></path>
  </Svg>;
};

export default DotsIcon;
