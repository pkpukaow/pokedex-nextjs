"use client";
import React, { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

function useKeyDownNavigate() {
  const router = useRouter();
  const params = useParams();
  useEffect(() => {
    document.addEventListener("keypress", (event) => {
      if (event.key === "a") {
        router.push(`/${Number(params.pokemonNumber) - 1}`);
      } else if (event.key === "d") {
        router.push(`/${Number(params.pokemonNumber) + 1}`);
      }
    });
  }, []);
  return true;
}

export default useKeyDownNavigate;
