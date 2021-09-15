import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import Card from "../component/card.js";
import { CollectionDropdown } from "../component/collectionDropdown.js";
import Closet2 from "../../img/closet2.png";

import "../../styles/closet.scss";

export const Closet = () => {
	const { store, actions } = useContext(Context);

	function handleFavorite(id) {
		actions.favoriteBrand(id);
	}
	useEffect(() => {
		actions.getUserFavorite();
		actions.getTodayOutfit();
	}, []);

	let favoriteCards = [];
	const collectionOutfits =
		store.selectedCollection.outfits &&
		store.selectedCollection.outfits.map(outfit => (
			<Card
				name={outfit.name}
				id={outfit.id}
				collections={outfit.collections}
				image={outfit.image}
				clothing={outfit.clothing}
				favorite={outfit.favorite}
				today={outfit.today_outfit}
				key={outfit.id}
			/>
		));
	if (store.favorites != undefined) {
		favoriteCards = store.favorites.map((favorite, index) => {
			return (
				<Card
					name={favorite.name}
					id={favorite.id}
					collections={favorite.collections}
					image={favorite.image}
					clothing={favorite.clothing}
					favorite={favorite.favorite}
					today={favorite.today_outfit}
					key={index}
					markAsFavorite={handleFavorite}
				/>
			);
		});
	}
	return (
		<div className="containerCloset">
			{/* <h1 className="tittleCloset">Closet</h1>
			<p className="leadCloset">Dress for every ocassion</p> */}
			<img className="imgCloset" src={Closet2} />
			<h1 className="tittleCollections">Collections</h1>
			<div className="dropCollect">
				<CollectionDropdown />
			</div>
			<div className="containerClothingCollections">
				<div className="row">
					<div className="collectionDrop d-flex flex-row cardScrollable">{collectionOutfits}</div>
				</div>
			</div>
			<h1 className="todayCloset">Todays outfit</h1>
			<div className="containerClothingUsed">
				<div className="row">
					<div className="todayCards  d-flex flex-row cardScrollable">
						{store.todayOutfit
							? store.todayOutfit.map((today, index) => {
									console.log(today);
									return (
										<Card
											name={today.name}
											id={today.id}
											collections={today.collections}
											image={today.image}
											clothing={today.clothing}
											favorite={today.favorite}
											today={today.today_outfit}
											key={index}
											markAsFavorite={handleFavorite}
										/>
									);
							  })
							: ""}
					</div>
				</div>
			</div>

			<h1 className="tittleFavourites">Favourites</h1>
			<div className="containerClothingFavs">
				<div className="row">
					<div className="favClosetCard d-flex flex-row cardScrollable">{favoriteCards}</div>
				</div>
			</div>
		</div>
	);
};
