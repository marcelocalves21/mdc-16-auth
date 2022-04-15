import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { signIn } from "../utilities/signIn";

export const Home = () => {
	const history = useHistory()
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const signInClicked = async (email, password) => {
		try{
			await signIn(email, password)
			history.push("/demo")
		}catch{(e) => {
			alert(e.message)
		}}
	}
	console.log("%cLog In", "font-size: 100px")
	return(
		<span >
		<div className="sidenav">
			<div className="login-main-text">
				<h2>
					Application
					<br /> Login Page
				</h2>
				<p>Login or register from here to access.</p>
			</div>
		</div>
		<div className="main">
			<div className="col-md-6 col-sm-12">
				<div className="login-form">
					<form>
						<div className="row mb-3">
							<label forhtml="inputEmail3" className="col-sm-2 col-form-label">Email</label>
							<div className="col-sm-6">
								<input type="email" className="form-control" id="inputEmail3" onChange={e => setEmail(e.target.value)} value={email}/>
							</div>
							</div>
							<div className="row mb-3">
							<label forhtml="inputPassword3" className="col-sm-2 col-form-label">Password</label>
							<div className="col-sm-6">
								<input type="password" className="form-control" id="inputPassword3" onChange={e => setPassword(e.target.value)} value={password}/>
							</div>
						</div>
						<button 
							type="submit" 
							className="btn btn-primary" 
							onClick={(e) =>{ 
							signInClicked(email, password)
							e.preventDefault()
							}}>
								Sign in
						</button>
						<button type="submit" className="btn btn-secondary">
								Register
							</button>
					</form>
				</div>
			</div>
		</div>
	</span>
)};
