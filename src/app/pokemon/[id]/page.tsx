import { fetchPokemon } from "@/api/pokemon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PokemonDetail = async ({ params }: { params:{ id: string }}) => {
  const pokemon = await fetchPokemon(params.id); 

  console.log(pokemon)

  return (
    <div className="text-center m-4 p-4 max-w-xl mx-auto bg-white rounded-lg shadow-lg">
    <div className="bg-slate-200 p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">{pokemon.korean_name}</h2>
    <p className="text-gray-600">No. {pokemon.id.toString().padStart(4, '0')}</p>
    </div>
    <div className="mt-4">
    <Image className="mx-auto" src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100}/>
    <p className="mt-2"><strong>이름:</strong> {pokemon.korean_name}</p>
    <p><strong>키:</strong> {pokemon.height/10}m</p><p><strong>무게:</strong> {pokemon.weight/10}kg</p>
    <div className="item-center mt-4">
    <p className="font-bold">기술: </p>
      <div className="flex flex-wrap">
      {pokemon.moves.map((move) => (
              <div key={move.move.name} className="bg-gray-100 text-sm py-1 px-2 rounded-full mr-2 mb-2">{move.move.korean_name || move.move.name}</div>
            ))}
      </div>
    </div>
    <div className="mt-4">
      <Link className="bg-slate-800 text-lg py-3 px-4 rounded-md mr-2 mb-2 text-white hover:underline" href="/">뒤로가기</Link>
    </div>
    </div>
  </div>)
};

export default PokemonDetail;
