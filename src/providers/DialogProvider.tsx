import React, {createContext, ReactNode, useContext, useState} from 'react';
import {createPortal} from "react-dom";
import {styled} from "goober";

const DialogBackground = styled('div')`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
`

const DialogContainer = styled('div')`
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  width: 300px;
  background-color: var(--sn-stylekit-background-color);
  padding: 20px 50px;
`

const DialogButton = styled('button')`
  padding: 5px 10px;
  cursor: pointer;
  width: 100%;
  outline: none;

  &:not(:first-child) {
    margin-left: 10px;
  }
`

const DialogActions = styled('div')`
  display: flex;
  margin-top: 20px;
`

const CustomDialog = styled('div')`
  background-color: var(--sn-stylekit-background-color);
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  overflow-x: hidden;
  height: 100vh;
`;

const CustomDialogActions = styled('div')`
  flex: 0 0 auto;
  padding: 10px 0 0 0;

`;

const BackLink = styled(`span`)`
  font-size: 20px;
  cursor: pointer;
  border-bottom: 1px solid var(--sn-stylekit-foreground-color);
`;

const CustomDialogContent = styled('div')`
  flex: 1 1 auto;
  margin-bottom: 30px;
`;

const SimpleDialog = ({children, open}) => {
  if (open) {
    return createPortal(
      <DialogBackground>
        {children}
      </DialogBackground>,
      document.body
    );
  }
}

interface IDialogContext {
  confirm: (text: string, action: () => void) => void;
  alert: (text: string) => void;
  custom: (el: JSX.Element) => () => void;
}

const DialogContext = createContext<IDialogContext>({} as any);

export const useDialog = () => useContext(DialogContext);

interface CustomDialogData {
  id: number;
  el: ReactNode;
}

export const DialogProvider = ({children}) => {
  const [contents, setContents] = useState(null);
  const [customContents, setCustomContents] = useState<CustomDialogData[]>([]);

  const confirm = (text, action) => {
    const confirmContents = (
      <DialogContainer>
        <div>{text}</div>
        <DialogActions>
          <DialogButton onClick={() => {
            action();
            closeDialog()
          }}>OK
          </DialogButton>
          <DialogButton onClick={closeDialog}>Cancel</DialogButton>
        </DialogActions>
      </DialogContainer>
    )

    setContents(confirmContents);
  };

  const alert = (text) => {
    const confirmContents = (
      <DialogContainer>
        <div>{text}</div>
        <DialogActions>
          <DialogButton onClick={closeDialog}>OK
          </DialogButton>
        </DialogActions>
      </DialogContainer>
    )

    setContents(confirmContents);
  };

  const custom = (content: JSX.Element) => {
    const id = new Date().getTime();
    const el = (
      <CustomDialog>
        <CustomDialogActions>
          <BackLink onClick={() => closeCustom(id)}>&lt; Back</BackLink>
        </CustomDialogActions>
        <CustomDialogContent>{content}</CustomDialogContent>
      </CustomDialog>
    )
    setCustomContents([...customContents, {id, el}]);
    return () => {
      closeCustom(id);
    };
  }

  const closeDialog = () => {
    setContents(null);
  }

  const closeCustom = (id) => {

    setCustomContents((customContents) => {
      const index = customContents.findIndex(item => item.id === id);
      customContents.splice(index, 1);
      return [...customContents]
    });
  }

  return (
    <DialogContext.Provider value={{confirm, alert, custom}}>
      {
        customContents.map(content => {
          return createPortal(
            <DialogBackground>{content.el}</DialogBackground>,
            document.body,
            String(content.id)
          )
        })
      }
      {/*<SimpleDialog open={customContents.length > 0}>{customContents}</SimpleDialog>*/}
      <SimpleDialog open={!!contents}>{contents}</SimpleDialog>
      {children}
    </DialogContext.Provider>
  );
};
