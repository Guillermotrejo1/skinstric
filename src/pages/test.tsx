import BackButton from "@/components/BackButton";
import ProceedButton from "@/components/ProceedButton";
import DiamondLarge from "@/components/shapes/DiamondLarge";
import DiamondMedium from "@/components/shapes/DiamondMedium";
import DiamondSmall from "@/components/shapes/DiamondSmall";
import { useState } from "react";

const questions = [
  { question: "Introduce Yourself", placeholder: "Introduce Yourself" },
  { question: "Your City Name", placeholder: "Your City Name" },
];

const Test = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({ name: "", location: "" });
  const [error, setError] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation logic
    if (currentQuestionIndex === 0) {
      const regex = /^[a-zA-Z\s]+$/;
      if (!regex.test(answers.name)) {
        setError("Please enter a valid name without numbers or special characters");
        return;
      }
    } else if (currentQuestionIndex === 1) {
      if (!answers.location) {
        setError("City name is required");
        return;
      }
    }

    setError("");

    if (currentQuestionIndex === questions.length - 1) {
      setSubmissionStatus("processing");
      try {
        const response = await fetch("https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: answers.name, location: answers.location }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Error response:", errorData);
          throw new Error("Failed to send data to the API");
        }

        const data = await response.json();
        console.log("API Response:", data);

        // Set success status after a delay
        setTimeout(() => {
          setSubmissionStatus("success");
        }, 3000);

        // Reset answers and question index
        setAnswers({ name: "", location: "" });
        setCurrentQuestionIndex(0);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        setError("Failed to fetch data from the API.");
        setSubmissionStatus("");
      }
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
  <div>
    <div className="min-h-[90vh] flex flex-col items-center justify-center bg-white text-center">
      <div className="absolute top-16 left-2 text-left">
        <h4 className="ml-6 text-xs font-semibold">TO START ANALYSIS</h4>
      </div>
      <div className="relative flex flex-col items-center justify-center mb-40 w-full h-full">
        {submissionStatus === "processing" ? (
          <div className="flex flex-col">
            <p className="text-sm text-gray-400 tracking-wider uppercase mb-1">Processing submission</p>
            <div>
              <span className="inline-block w-1"></span>
              <span className="text-7xl dot"></span>
              <span className="text-7xl dot"></span>
              <span className="text-7xl dot"></span>
            </div>
          </div>
        ) : submissionStatus === "success" ? (
          <div className="flex flex-col items-center">
            <p className="text-xl text-[#1a1b1c] tracking-wider uppercase mb-4">Thank you!</p>
            <p className="text-gray-600 text-lg">Proceed for the next step</p>
            <div className="absolute bottom-[-420px] right-0">
              <ProceedButton />
            </div>
          </div>
        ) : (
          <p className="text-sm text-gray-400 tracking-wider uppercase mb-1">Click To Type</p>
        )}
        <DiamondLarge />
        <DiamondMedium />
        <DiamondSmall />
        {submissionStatus !== "processing" && submissionStatus !== "success" && (
          <form className="relative z-10" onSubmit={handleSubmit}>
            <div className="flex flex-col items-center">
              {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
            </div>
            <input
              type="text"
              placeholder={questions[currentQuestionIndex].placeholder}
              autoComplete="off"
              tabIndex={0}
              name="answer"
              value={currentQuestionIndex === 0 ? answers.name : answers.location}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setAnswers({ ...answers, [currentQuestionIndex === 0 ? "name" : "location"]: e.target.value });
                setError("");
              }}
              className="text-5xl sm:text-6xl font-normal text-center bg-transparent border-b border-black focus:outline-none appearance-none w-[372px] sm:w-[432px] pt-1 tracking-[-0.07em] leading-[64px] text-[#1A1B1C] z-20 relative"
            />
            <button type="submit" className="sr-only">Submit</button>
          </form>
        )}
      </div>
      <BackButton />
    </div>
  </div>
);
}

export default Test;
