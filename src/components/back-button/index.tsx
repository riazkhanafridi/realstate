import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = memo(function BackButton() {
  const navigate = useNavigate();

  const handleBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <button
      onClick={handleBack}
      className="flex items-center gap-2 px-4 py-2 text-white bg-primary rounded-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <FaArrowLeft />
    </button>
  );
});

export default BackButton;
