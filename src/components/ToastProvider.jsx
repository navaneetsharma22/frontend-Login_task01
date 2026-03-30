import { createContext, useContext, useMemo, useRef, useState } from "react";

const ToastContext = createContext(null);

const toastStyles = {
  success: "border-emerald-200 bg-emerald-50 text-emerald-900",
  error: "border-rose-200 bg-rose-50 text-rose-900",
  info: "border-sky-200 bg-sky-50 text-sky-900",
};

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const timeoutRefs = useRef(new Map());

  const removeToast = (id) => {
    const timeoutId = timeoutRefs.current.get(id);
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutRefs.current.delete(id);
    }

    setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== id));
  };

  const showToast = ({ title, message, type = "info", duration = 3000 }) => {
    const id = crypto.randomUUID();

    setToasts((currentToasts) => [
      ...currentToasts,
      {
        id,
        title,
        message,
        type,
      },
    ]);

    const timeoutId = window.setTimeout(() => {
      removeToast(id);
    }, duration);

    timeoutRefs.current.set(id, timeoutId);
  };

  const value = useMemo(
    () => ({
      success: (title, message) => showToast({ title, message, type: "success" }),
      error: (title, message) => showToast({ title, message, type: "error", duration: 4000 }),
      info: (title, message) => showToast({ title, message, type: "info" }),
    }),
    []
  );

  return (
    <ToastContext.Provider value={value}>
      {children}

      <div className="pointer-events-none fixed right-4 top-20 z-50 flex w-[min(24rem,calc(100vw-2rem))] flex-col gap-3">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`pointer-events-auto rounded-2xl border px-4 py-3 shadow-lg shadow-slate-900/10 backdrop-blur ${toastStyles[toast.type]}`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-bold">{toast.title}</p>
                {toast.message && <p className="mt-1 text-sm opacity-80">{toast.message}</p>}
              </div>

              <button
                onClick={() => removeToast(toast.id)}
                className="shrink-0 text-xs font-bold uppercase tracking-[0.2em] opacity-60 transition hover:opacity-100"
              >
                Close
              </button>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
}
