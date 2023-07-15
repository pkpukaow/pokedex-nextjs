import Link from "next/link";

interface PokemonCardProps {
  name: string;
  pokemonNo: string;
}

export function PokemonCard({ name, pokemonNo }: PokemonCardProps) {
  return (
    <Link
      href={pokemonNo}
      className="px-5 py-4 m-3 w-[300px] lg:w-[250px] transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 dark:border-gray-500"
      key={name + "Card"}
    >
      <p>No: {pokemonNo}</p>
      <h2 className={`text-2xl font-semibold`}>
        {name.charAt(0).toUpperCase() + name.slice(1).replaceAll("-", " ")}
      </h2>
    </Link>
  );
}
