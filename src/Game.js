import React from 'react';
import Content from './Content.js'
import Actionbar from './Actionbar.js'
import {questionAnswer} from './redux/actions'

export default class Game extends React.Component{
      render(){

            if(this.props.questions.length === 0){
                  return(<h3>No hay ninguna pregunta que mostrar</h3>)
            }
            return (
            
                  <div class = "Game">
                  <Content question = {this.props.question}
                              onQuestionAnswer =  {this.props.onQuestionAnswer}/>

                  
                  <Actionbar
                          onPreviousQuestion = {this.props.onPreviousQuestion}
                          onNextQuestion = {this.props.onNextQuestion}
                              onSubmit = {this.props.onSubmit}
                  />

                  </div>

            );

      }
}