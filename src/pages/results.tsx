import BackButton from "@/components/BackButton";
import FaceScan from "@/components/FaceScan";
import GalleryAccess from "@/components/GalleryAccess";
import { useRouter } from "next/router";
import React, { useState } from "react";

interface Demographics {
  race: { [key: string]: number };
  age: { [key: string]: number };
  gender: { [key: string]: number };
}

const Results = () => {
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  const [, setDemographics] = useState<Demographics | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [cameraPromptVisible, setCameraPromptVisible] = useState(false);

  const handleFaceScanClick = () => {
    setCameraPromptVisible(true);
  };

  const handleCameraPermissionChange = (visible: boolean) => {
    setCameraPromptVisible(visible);
  };

  const handleImageUpload = (imageFile: File) => {
    setLoading(true);
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = () => {
      const base64Image = reader.result;
      if (base64Image) {
        setImage(base64Image);
        makeApiCall(base64Image as string);
      } else {
        setLoading(false);
      }
    };
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
    <div>
      {loading && (
        <div className="fixed inset-0 bg-opacity-30 flex items-center justify-center z-50">
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm text-black tracking-wider uppercase mb-1">
              PREPARING YOUR ANALYSIS...
            </p>
            <div>
              <span className="inline-block w-1"></span>
              <span className="text-7xl dot"></span>
              <span className="text-7xl dot"></span>
              <span className="text-7xl dot"></span>
            </div>
          </div>
          <div className="absolute top-[80px] right-7 md:top-[80px] md:right-8 transition-opacity duration-300 opacity-100">
            <h1 className="text-xs md:text-sm font-normal mb-1 text-left">
              Preview
            </h1>
            <div className="w-24 h-24 md:w-32 md:h-32 border border-gray-300 overflow-hidden">
              {image && typeof image === "string" && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={image}
                  alt="Uploaded Preview"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-1/2 w-[350px] h-[350px] md:w-[450px] md:h-[450px] animate-spin-fastest rotate-190 border-3 border-[#A0A4AB] border-dotted opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] animate-spin-faster rotate-185 border-3 border-[#A0A4AB] border-dotted opacity-30"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-1/2 w-[220px] h-[220px] md:w-[350px] md:h-[350px] animate-spin-fast border-3 border-[#A0A4AB] border-dotted opacity-40"></div>
        </div>
      )}

      {!loading && (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center mb-50">
          <div className="absolute top-20 left-2 text-left">
            <h4 className="ml-6 text-sm font-semibold">TO START ANALYSIS</h4>
          </div>
          <div className="flex-[0.4] md:flex-1 flex flex-col md:flex-row items-center lg:justify-between relative mb-40 md:mb-40 space-y-[-20px] md:space-y-0 w-full">
            <FaceScan onCameraPermissionChange={handleCameraPermissionChange} />
            <GalleryAccess
              style={{
                opacity: cameraPromptVisible ? 0.5 : 1,
                pointerEvents: cameraPromptVisible ? "none" : "auto",
              }}
              onImageUpload={handleImageUpload}
            />
            <div className="absolute top-[-75px] right-7 md:top-0 md:right-8 transition-opacity duration-300 opacity-100">
              <h1 className="text-xs md:text-sm font-normal mb-1 text-left">
                Preview
              </h1>
              <div className="w-24 h-24 md:w-32 md:h-32 border border-gray-300 overflow-hidden">
                {image && typeof image === "string" && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={image}
                    alt="Uploaded Preview"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="fixed bottom-4 left-0 right-0 pt-4 md:pt-0 pb-8 bg-white z-50">
        <BackButton />
      </div>
    </div>
  );
};

export default Results;
