import React, { useContext, useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { BtnCreate } from "./BtnCreate";
import { Button } from "react-bootstrap";
import "../../styles/card.scss";
//create your first component

export function Card(props) {
	console.log({ props });

	// useEffect(() => {
	// 	actions.getUserFavorite(data);
	// }, []);
	let SelectOutfitBtn = [];
	let clothingCards = [];
	if (props.clothing != undefined) {
		clothingCards = props.clothing.map((clothing, index) => {
			return (
				<div key={index} className="card border-secondary mb-3">
					<div className="card-body text-secondary">
						<h5 className="card-title">{clothing.name}</h5>
						<h5 className="card-title">{clothing.image}</h5>
						<h4 className="card-title1">{clothing.clean ? "limpio" : "sucio"}</h4>
					</div>
				</div>
			);
		});
	}

	return (
		<div className="card border-secondary mb-3">
			<div className="card-header">{props.collections}</div>
			<div className="card-body text-secondary">
				<h5 className="card-title">{props.name}</h5>
				<h5 className="card-title">{props.image}</h5>
				<h5 className="card-title">{clothingCards}</h5>
				<button className="btn-fav btn-outline-danger" onClick={clothingCards}>
					♡
				</button>
				<button className="btn-out btn-outline-success" onClick={SelectOutfitBtn}>
					Usado
				</button>
			</div>
		</div>
	);
}

Card.propTypes = {
	collections: PropTypes.string,
	name: PropTypes.string,
	clothing: PropTypes.array,
	image: PropTypes.string,
	favorite: PropTypes.string
};
