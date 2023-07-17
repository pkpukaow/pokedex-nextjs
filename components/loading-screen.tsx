"use client";

import Lottie from "lottie-react";
import pokeball from "@/assets/pokeball.json";

const LoadingScreen = () => {
  return (
    <Lottie
      animationData={pokeball}
      loop={true}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

export default LoadingScreen;
