import React, { useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Card from "../component/card";

export const Home = () => {
	const { actions, store } = useContext(Context)

	useEffect(() => {
		actions.obtenerContactos()

	}, [])
	return (
		<div className="container">
			<div className="text-center mt-2 row">
				{store.contacts.map((item) => (
					<div key={item.id} className="col-12">
						<Card
							id={item.id}
							name={item.name}
							phone={item.phone}
							email={item.email}
							address={item.address}

						/>
					</div>
				))}
			</div>
		</div>
	)
};
