"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { PokemonCard } from "./pokemon-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PokemonGridProps {
  pokemonList: any;
}

const tabsArray = [
  {
    gen: "1",
    start: 0,
    end: 151,
  },
  {
    gen: "2",
    start: 151,
    end: 251,
  },
  {
    gen: "3",
    start: 251,
    end: 386,
  },
  {
    gen: "4",
    start: 386,
    end: 494,
  },
  {
    gen: "5",
    start: 494,
    end: 649,
  },
  {
    gen: "6",
    start: 649,
    end: 721,
  },
  {
    gen: "7",
    start: 721,
    end: 809,
  },
  {
    gen: "8",
    start: 809,
    end: 905,
  },
  {
    gen: "9",
    start: 905,
    end: 1010,
  },
];

export function PokemonGrid({ pokemonList }: PokemonGridProps) {
  const [searchText, setSearchText] = useState("");

  const searchFilter = (pokemonList: any) => {
    return pokemonList.filter((pokemon: any) => {
      return pokemon.name.toLowerCase().includes(searchText.toLowerCase());
    });
  };

  const filteredPokemonList = searchFilter(pokemonList);

  const getPokemonNo = (pokemon: any) => {
    const pokemonId = pokemon.url.split("/")[6];
    return pokemonId;
  };

  return (
    <>
      <div>
        <h3 className="py-2 pt-6 text-3xl font-semibold text-center">
          Search For Your Pokemon!
        </h3>
        <div className="grid w-full max-w-sm gap-1.5 items-center">
          <Input
            autoFocus
            className="mt-2 border-gray-500"
            type="text"
            value={searchText}
            autoComplete="off"
            id="pokemonName"
            placeholder="Enter your favorite Pokemon!"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>

      <div className="pt-10">
        <Tabs defaultValue="1">
          <div className="flex flex-col items-center mb-6">
            <h3 className="text-2xl">Generation</h3>
            <TabsList className="mt-2">
              {tabsArray.map((tab) => {
                return <TabsTrigger value={tab.gen}>{tab.gen}</TabsTrigger>;
              })}
            </TabsList>
          </div>

          {searchText && (
            <>
              <div className="grid mb-32 text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
                {filteredPokemonList.map((pokemon: any, idx: number) => {
                  return (
                    <PokemonCard
                      name={pokemon.name}
                      key={idx}
                      pokemonNo={getPokemonNo(pokemon)}
                    />
                  );
                })}
              </div>
            </>
          )}

          {!searchText &&
            tabsArray.map((tab) => {
              return (
                <TabsContent value={tab.gen}>
                  <div className="grid mb-32 text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
                    {filteredPokemonList.map((pokemon: any, idx: number) => {
                      if (idx >= tab.start && idx < tab.end)
                        return (
                          <PokemonCard
                            name={pokemon.name}
                            key={idx}
                            pokemonNo={getPokemonNo(pokemon)}
                          />
                        );
                    })}
                  </div>
                </TabsContent>
              );
            })}
        </Tabs>
      </div>
    </>
  );
}
