import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import Game from "./Game";
import Results from "./Results";
import {questionAnswer, submit, nextQuestion, previousQuestion,initQuestions,resetQuestions} from './redux/actions'

class App extends Component {
  componentDidMount() {

        let token = "021f2a6435874ececfbd";
        let url = "https://quiz.dit.upm.es/api/quizzes/random10wa?token="+token;
        fetch(url)
            .then(res => res.json())
            .then(json => {
                this.props.dispatch(initQuestions(json))
            })
            .catch(error =>{
                console.log(error)
            });

    }

    render() {
      console.log(this.mapStateToProps)
      if(this.props.finished!==false){
        return(
          <div>
            <Results score = {this.props.score}
            finished={this.props.finished}
            onReset={()=>{
              this.props.dispatch(resetQuestions(), initQuestions(this.props.questions))
            }}
            />
          </div>
          );
      }else{
      return (
        <div class="App">
          <Game 
            onInitQuestion = {()=>{
              this.props.dispatch(initQuestions(this.props.questions))
            }}

            question = {this.props.questions[this.props.currentQuestion]}
            questions = {this.props.questions}
            onQuestionAnswer = {(answer)=>{
              this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))
            }}
            onPreviousQuestion = {()=>{
              console.log(this.props.questions[this.props.currentQuestion].id )
              if(this.props.questions[this.props.currentQuestion].id !== this.props.questions[0].id ){
                this.props.dispatch(previousQuestion(this.props.questions.id))
              }
            }}
            onNextQuestion = {()=>{
              if(this.props.questions[this.props.currentQuestion].id !== this.props.questions[this.props.questions.length-1].id){
                this.props.dispatch(nextQuestion(this.props.questions.id))              
              }
            }}
            
            onSubmit = {()=>{
              this.props.dispatch(submit(this.props.questions))
            }}
            
            />
        </div>
      );
    }
  }
}

function mapStateToProps(state){
  return{
     ...state
  }
}

export default connect(mapStateToProps)(App);
