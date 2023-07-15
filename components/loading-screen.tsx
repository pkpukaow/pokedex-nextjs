"use client";

import Lottie from "lottie-react";
import pokeball from "@/assets/pokeball.json";

const LoadingScreen = () => {
  return <Lottie animationData={pokeball} loop={true} />;
};

export default LoadingScreen;
