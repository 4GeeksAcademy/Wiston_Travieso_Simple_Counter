import React from "react";

import Card from "./Card";
import CardClock from "./CardClock";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component


const Home = ({ one, two, three, four }) => {

	let digits = [
		{ title: four },
		{ title: three },
		{ title: two },
		{ title: one }
		
	]
	return (
		<div className="container text-center mt-5">
			<div className="row">
				<div className="col">
					<CardClock />
				</div>
				{digits.map((value, index, array) => {
					return (
					<div className="col">
						<Card title={value.title} />
					</div>)
				})}
			</div>
		</div>
	);
};

export default Home;
