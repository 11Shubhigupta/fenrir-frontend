import { useEffect } from "react";

export default function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed top-6 right-6 bg-primary text-white px-6 py-3 rounded-lg shadow-lg">
      {message}
    </div>
  );
}