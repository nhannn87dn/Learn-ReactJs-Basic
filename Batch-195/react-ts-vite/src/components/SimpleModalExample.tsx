// Reusable Modal Component (Không dùng framer-motion)
export default function SimpleModalExample({ open, onClose, children, title }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-lg w-96 p-6 animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}

        <div className="mb-6">{children}</div>

        <button
          onClick={onClose}
          className="mt-2 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}

/* Tailwind custom animation (thêm vào globals.css hoặc index.css nếu muốn) */
/*
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .animate-scaleIn {
    animation: scaleIn 0.16s ease-out;
  }
  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.85);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
}
*/
