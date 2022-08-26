import React, { useEffect, useState } from 'react';
import { Detail } from '../App';
import './pokemon.css';

interface Props {
	name: string;
	viewDetail: Detail;
	setDetail: React.Dispatch<React.SetStateAction<Detail>>;
	id: number;
	image: string;
	abilities:
		| {
				name: string;
				ability: string;
		  }[]
		| undefined;
}

const PokemonList: React.FC<Props> = (props) => {
	const { name, id, image, abilities, viewDetail, setDetail } = props;
	const [isSelected, setSelected] = useState(false);

	useEffect(() => {
		setSelected(id === viewDetail?.id);
	}, [viewDetail]);

	const closeDetail = () => {
		setDetail({
			id: 0,
			isOpen: false,
		});
	};

	return (
		<div>
			{isSelected ? (
				<section className="pokemon-list-detailed">
					<div className="detail-container">
						<p className="detail-close" onClick={closeDetail}>
							X
						</p>
						<div className="detail-info">
							<img
								src={image}
								alt="pokemon"
								className="detail-img"
							/>
							<p className="detail-name">{name}</p>
						</div>
						<p className="detail-ability">Abilities:</p>
						{abilities?.map((ab: any) => (
							<div>{ab.ability.name}</div>
						))}
					</div>
				</section>
			) : (
				<section className="pokemon-list-container">
					<p className="pokemon-name">{name}</p>
					<img src={image} alt="pokemon" />
				</section>
			)}
		</div>
	);
};

export default PokemonList;
