import React from 'react';

export default class Content extends React.Component{
	

	render(){
		return (
			
			<div class = "content">
			 <p>
			    <h1 class = "pregunta">{this.props.question.question}?</h1>

			    <input type = "text" value = {this.props.question.userAnswer || ""} onChange = {(e)=> {
			    	this.props.onQuestionAnswer(e.target.value);}}/>

			    <h4> Pista: </h4>
			    {this.props.question.tips.map((pista,i)=> <p key={i}> {pista}</p>)}
			</p>
			 
			 	 	
                <img class ="imagen" src={this.props.question.attachment.url} />
            
			</div>
		);
	}
}