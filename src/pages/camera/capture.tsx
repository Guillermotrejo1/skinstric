import Link from "next/link";
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
  const [showPreview, setShowPreview] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!showPreview) {
      navigator.mediaDevices
        .getUserMedia({ video: { facingMode: "user" } })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((error) => {
          console.error("Error accessing camera:", error);
        });
    }
  }, [showPreview]);

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (context) {
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;
        context.drawImage(videoRef.current, 0, 0);
        const base64Image = canvasRef.current.toDataURL("image/png");
        setImage(base64Image);
        setShowPreview(true);
        // Pause the video stream
        if (videoRef.current.srcObject) {
          (videoRef.current.srcObject as MediaStream)
            .getTracks()
            .forEach((track) => track.stop());
        }
      }
    }
  };

  const handleRetake = () => {
    setImage(null);
    setShowPreview(false);
  };

  const handleUsePhoto = () => {
    if (typeof image === "string") {
      setLoading(true);
      makeApiCall(image);
    }
  };

  const makeApiCall = async (base64Image: string) => {
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

      // alert("Image analyzed successfully");
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
            {!showPreview ? (
              <>
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="absolute inset-0 w-full h-full object-cover"
                ></video>
                <canvas ref={canvasRef} className="hidden" />
                <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 flex items-center space-x-3">
                  <div className="font-semibold text-sm tracking-tight leading-[14px] text-[#FCFCFC] hidden sm:block">
                    TAKE PICTURE
                  </div>
                  <div
                    className="transform hover:scale-105 ease-in-out duration-300"
                    onClick={captureImage}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/takePictureIcon.webp"
                      alt=""
                      className="w-16 h-16 cursor-pointer"
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={typeof image === "string" ? image : ""}
                  alt="Captured"
                  className="absolute inset-0 w-full h-full object-cover z-10"
                />

                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-30">
                  <div className="bg-black bg-opacity-80 text-white px-2 md:px-8 py-2 text-xl font-semibold shadow-lg">
                    Great shot!
                  </div>
                </div>

                <div className="absolute w-full bottom-35 md:bottom-12 left-1/2 transform -translate-x-1/2 z-30 flex justify-center gap-6">
                  <button
                    className="bg-white text-black px-2 md:px-8 py-2 font-semibold shadow hover:bg-gray-200 transition"
                    onClick={handleRetake}
                  >
                    Retake
                  </button>
                  <button
                    className="bg-[#1A1B1C] text-white px-2 md:px-8 py-2 font-semibold shadow hover:bg-[#333] transition"
                    onClick={handleUsePhoto}
                  >
                    Use this photo
                  </button>
                </div>
              </>
            )}

            {!showPreview && (
              <div className="absolute bottom-30 sm:bottom-40 left-0 right-0 text-center z-20">
                <p className="text-sm mb-2 font-normal leading-6 text-[#FCFCFC]">
                  TO GET BETTER RESULTS MAKE SURE TO HAVE
                </p>
                <div className="flex justify-center space-x-8 text-xs leading-6 text-[#FCFCFC]">
                  <p>◇ NEUTRAL EXPRESSION</p>
                  <p>◇ FRONTAL POSE</p>
                  <p>◇ ADEQUATE LIGHTING</p>
                </div>
              </div>
            )}
          </div>
          <div className="absolute md:bottom-8 bottom-60 left-8 z-20">
            <Link href="/results">
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
            </Link>
          </div>

          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-30">
              <div className="bg-gray-600 text-white py-12 px-16 rounded-xl">
                <p>Analyzing Image</p>
                <div className="flex items-center justify-center">
                  <span className="inline-block w-1"></span>
                  <span className="text-7xl dot"></span>
                  <span className="text-7xl dot"></span>
                  <span className="text-7xl dot"></span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Capture;
