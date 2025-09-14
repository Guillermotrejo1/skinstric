import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

interface Demographics {
  race: { [key: string]: number };
  age: { [key: string]: number };
  gender: { [key: string]: number };
}

const Capture = () => {
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  const [, setDemographics] = useState<Demographics | null>(null);
  const [loading, setLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const router = useRouter();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((error) => {
        console.error("Error accessing camera:", error);
      });
  }, []);

    const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (context) {
        // Set canvas dimensions to match video
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;
        
        context.drawImage(videoRef.current, 0, 0);
        
        const base64Image = canvasRef.current.toDataURL("image/png");
        setImage(base64Image); 
        makeApiCall(base64Image);
      }
    }
  };

  const makeApiCall = async (base64Image: string) => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ image: base64Image }),
        }
      );
      const data = await response.json();
      localStorage.setItem("demographics", JSON.stringify(data.data));
      setDemographics(data.data);

      alert("Image analyzed successfully");

      router.push("/selecting");
    } catch (error) {
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="h-[90vh] w-screen">
        <div className="relative h-[92vh] w-screen overflow-hidden bg-gray-900">
          <div className="absolute inset-0 z-10">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            ></video>
            <canvas ref={canvasRef} className="hidden" />
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 flex items-center space-x-3">
              <div className="font-semibold text-sm tracking-tight leading-[14px] text-[#FCFCFC] hidden sm:block">
                TAKE PICTURE
              </div>
              <div className="transform hover:scale-105 ease-in-out duration-300" onClick={captureImage}>
                <img
                  src="/takePictureIcon.webp"
                  alt=""
                  className="w-16 h-16 cursor-pointer"
                />
              </div>
            </div>
            <div className="absolute bottom-30 sm:bottom-40 left-0 right-0 text-center z-20">
              <p className="text-sm mb-2 font-normal leading-6 text-[#FCFCFC]">
                TO GET BETTER RESULTS MAKE SURE TO HAVE
              </p>
              <div className="flex justify-center space-x-8 text-xs leading-6 text-[#FCFCFC]">
                <p>◇ NEUTRAL EXPRESSION</p>
                <p>◇ NEUTRAL EXPRESSION</p>
                <p>◇ NEUTRAL EXPRESSION</p>
              </div>
            </div>
          </div>
          <div className="absolute md:bottom-8 bottom-60 left-8 z-20">
            <a href="/result"></a>
            <div>
              <div className="relative w-12 h-12 flex items-center justify-center border border-[#FCFCFC] rotate-45 scale-[1] sm:hidden">
                <span className="rotate-[-45deg] text-xs font-semibold sm:hidden text-[#FCFCFC]">
                  BACK
                </span>
              </div>
              <div className="group hidden sm:flex flex-row relative justify-center items-center">
                <div className=" w-12 h-12 hidden sm:flex justify-center border border-[#FCFCFC] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300"></div>
                <span className="absolute left-[15px] bottom-[13px] scale-[0.9] rotate-180 hidden sm:block text-[#FCFCFC] group-hover:scale-[0.92] ease duration-300">
                  ▶
                </span>
                <span className="text-sm font-semibold hidden sm:block ml-6 text-[#FCFCFC]">
                  BACK
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Capture;
