import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPokemonType(type: string): string {
  switch (type) {
    case "fire":
      return "#FF3D0D";
    case "water":
      return "#137CBD";
    case "grass":
      return "#77CC55";
    case "electric":
      return "#FFC631";
    case "rock":
      return "#B69E31";
    case "ground":
      return "#D3B357";
    case "ice":
      return "#9FD9D9";
    case "flying":
      return "#A890F0";
    case "poison":
      return "#B667CF";
    case "bug":
      return "#A7B723";
    case "normal":
      return "#A8A878";
    case "fighting":
      return "#C12F28";
    case "psychic":
      return "#F85888";
    case "ghost":
      return "#705898";
    case "dragon":
      return "#6F38FF";
    case "steel":
      return "#B7B7CE";
    case "fairy":
      return "#FDB9E9";
    default:
      return "#AAAAAA";
  }
}
