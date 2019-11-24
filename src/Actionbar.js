import React from 'react';
export default class Actionbar extends React.Component{
	render(){
		return (
			<div class = "botones">
				<button class = "btn"
            	onClick = {() => {
            		this.props.onPreviousQuestion()
            	}} value = "Anterior">Anterior</button>

		    	<button class = "btn"
		    	onClick = {() => {
		    		this.props.onSubmit()
		    	}} value = "Enviar">Comprueba</button>

		    	<button class = "btn"
		    	onClick = {() => {
		    		this.props.onNextQuestion()
		    	}} value = "Siguiente">Siguiente</button>
			<p></p>
			
			<div class = "lista">
			<p> Víctor Álvarez Provencio </p>
			<p> Fernando Martín Maldonado </p>
			</div>
			</div>


		);
	}
}