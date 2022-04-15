import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { logOut } from "../utilities/signOut";

export const Demo = () => {
	const history = useHistory()
	return (
		<div className="container">
			<h1>Logged</h1>
			<br />
			<button 
			className="btn btn-primary"
			onClick={() => {
				logOut()
				history.push('/')
			}}>
				Sign out
			</button>

		</div>
	);
};
