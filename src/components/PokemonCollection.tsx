import React from 'react';
import PokemonList from './PokemonList';
import './pokemon.css';
import { Detail } from '../App';
import { PokemonDetail } from '../interface';

interface Props {
	pokemons: PokemonDetail[];
	viewDetail: Detail;
	setDetail: React.Dispatch<React.SetStateAction<Detail>>;
}

const PokemonCollection: React.FC<Props> = (props) => {
	const { pokemons, viewDetail, setDetail } = props;

	const selectPokemon = (id: number) => {
		if (!viewDetail.isOpen) {
			setDetail({
				id,
				isOpen: true,
			});
		}
	};
	return (
		<>
			<section
				className={
					viewDetail.isOpen
						? 'collection-container-active'
						: 'collection-container'
				}
			>
				{viewDetail.isOpen ? (
					<div className="overlay"></div>
				) : (
					<div></div>
				)}
				{pokemons.map((pokemon) => {
					return (
						<div onClick={() => selectPokemon(pokemon.id)}>
							<PokemonList
								viewDetail={viewDetail}
								setDetail={setDetail}
								key={pokemon.id}
								name={pokemon.name}
								id={pokemon.id}
								abilities={pokemon.abilities}
								image={pokemon.sprites.front_default}
							/>
						</div>
					);
				})}
			</section>
		</>
	);
};

export default PokemonCollection;
