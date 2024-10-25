import { createContext, useContext, useState, ReactNode } from 'react';

type ModalContextType = {
  showLoginModal: boolean;
  showRegisterModal: boolean;
  showOtpModal: boolean;
  setShowLoginModal: (show: boolean) => void;
  setShowRegisterModal: (show: boolean) => void;
  setShowOtpModal: (show: boolean) => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);

  return (
    <ModalContext.Provider value={{ showLoginModal, showRegisterModal, showOtpModal, setShowLoginModal, setShowRegisterModal, setShowOtpModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
