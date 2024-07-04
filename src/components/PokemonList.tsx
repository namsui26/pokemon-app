'use client';


import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Pokemon } from '@/types/pokemon';



const PokemonList: React.FC = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    //route.ts핸들러 로직 불러오기
    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const response = await fetch('/api/pokemons');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: Pokemon[] = await response.json();
                setPokemons(data);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemons();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    // const router = useRouter();

//     const handlePokemonClick = (id: number) => {
//       router.push(`/pokemon/${id}`);
//   };

    return (
      <div>
          <ul className="grid sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-4">
              {pokemons.map((pokemon) => (
                <div key={pokemon.id}>
                  <Link href={`/pokemon/${pokemon.id}`}>
                      <div className='m-2 p-2 border-4 border-slate-600 rounded-md'>
                          <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100}/>
                          <h2>{pokemon.korean_name}</h2>
                          <h2>도감번호: {pokemon.id}</h2>
                      </div>
                  </Link>
                </div>
              ))}
          </ul>
      </div>
  );
};

export default PokemonList;
