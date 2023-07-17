import PokemonImage from "@/components/pokemon-image";
import { Progress } from "@/components/ui/progress";
import { getPokemon } from "@/lib/pokemonAPI";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPokemonType } from "@/lib/utils";

const PokemonPage = async ({
  params,
}: {
  params: { pokemonNumber: string };
}) => {
  const { pokemonNumber } = params;

  const pokemonObject = await getPokemon(pokemonNumber);

  if (!pokemonObject) {
    notFound();
  }

  return (
    <>
      <div className="flex items-center justify-between w-full px-12 pt-4">
        <Link
          className={pokemonObject.id <= 1 ? "opacity-0" : ""}
          href={"/" + (pokemonObject.id - 1)}
        >
          <ArrowBigLeft size={50} />
        </Link>
        <div>
          <h1 className="text-4xl font-bold">
            {pokemonObject.name.charAt(0).toUpperCase() +
              pokemonObject.name.slice(1).replaceAll("-", " ")}{" "}
            #{pokemonObject.id}
          </h1>
          <div className="flex gap-2">
            {pokemonObject.types.map((type: any) => {
              return (
                <h1
                  className="px-1 text-lg font-semibold text-white rounded-md"
                  style={{
                    backgroundColor: getPokemonType(type.type.name),
                  }}
                >
                  {type.type.name.toUpperCase()}
                </h1>
              );
            })}
          </div>
        </div>
        <Link
          className={pokemonObject.id >= 1010 ? "opacity-0" : ""}
          href={"/" + (pokemonObject.id + 1)}
        >
          <ArrowBigRight size={50} />
        </Link>
      </div>
      <div className="m-4 relative w-[300px] h-[300px]">
        <PokemonImage
          image={pokemonObject.sprites.other["official-artwork"].front_default}
          name={pokemonObject.name}
        />
      </div>
      <div className="flex gap-4">
        <h3 className="py-2">
          Weight: {(pokemonObject.weight / 10).toFixed(1)} kg
        </h3>
        <h3 className="py-2">
          Height: {(pokemonObject.height / 10).toFixed(1)} m
        </h3>
      </div>
      <div className="flex-col">
        {pokemonObject.stats.map((stat: any) => {
          const statName = stat.stat.name;
          const statValue = stat.base_stat;

          return (
            <div className="flex items-stretch w-[500px]" key={statName}>
              <h3 className="w-2/4 p-3">
                {statName}: {statValue}
              </h3>
              <Progress className="w-2/4 m-auto" value={statValue / 2} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PokemonPage;
