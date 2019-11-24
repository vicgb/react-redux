import React from 'react';

export default class Results extends React.Component{
	render(){
		return (
			<div class = "Results">

			<h1> De momento llevas:  <p class = "puntuacion">{this.props.score} puntos</p> </h1>
			<button onClick = {() => {
				this.props.onReset();
			}} value = "Reset"> Volver a jugar </button>
			</div>
		);
	}
}