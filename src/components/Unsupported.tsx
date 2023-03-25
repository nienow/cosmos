import React from 'react';
import {styled} from "goober";

const UnsupportedContainer = styled('div')`
  min-height: 100vh;
`

const UnsupportedContent = styled('div')`
  padding: 5px 20px;
`

type Props = {
  eraseFn: () => void;
}

const Unsupported = ({eraseFn}: Props) => {
  return (
    <UnsupportedContainer>
      <UnsupportedContent>The existing note is not compatible with this editor. You have two options:</UnsupportedContent>
      <UnsupportedContent>1. Switch to a different editor. Your data will be maintained.</UnsupportedContent>
      <UnsupportedContent>2. Click the "Erase and Continue" button below to erase your note data and start using this
        editor.</UnsupportedContent>
      <UnsupportedContent>
        <button onClick={eraseFn}>Erase and Continue</button>
      </UnsupportedContent>
    </UnsupportedContainer>
  );
}

export default Unsupported
