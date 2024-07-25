import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

import Toast from "@/components/general/Toast";

type ToastType = "success" | "error" | "info";

interface ToastData {
  id: number;
  type: ToastType;
  message: string;
  title: string;
  link?: string;
}

interface ToastContextProps {
  addToast: (
    type: ToastType,
    title: string,
    message: string,
    link?: string,
  ) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const useToast = (): ToastContextProps => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
};

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider = ({
  children,
}: ToastProviderProps): JSX.Element => {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const addToast = useCallback(
    (type: ToastType, title: string, message: string, link?: string) => {
      const id = Date.now();

      setToasts((prevToasts) => [
        ...prevToasts,
        { id, type, title, message, link },
      ]);
      setTimeout(() => removeToast(id), 6000);
    },
    [],
  );

  const removeToast = useCallback((id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed bottom-4 left-5 z-50 max-w-md min-w-[20%]  rounded-sm">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            id={toast.id}
            link={toast.link}
            message={toast.message}
            title={toast.title}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};
