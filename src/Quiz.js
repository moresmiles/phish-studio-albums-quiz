import React from 'react';
import Hero from './Hero';
import Turn from './Turn';
import Continue from './Continue';
import Footer from './Footer'
import {connect} from 'react-redux';
import './Quiz.css';
import './bootstrap.min.css'

const mapStateToProps = (state) => {
  return {
    turnData: state.turnData,
    highlight: state.highlight
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAnswerSelect: (answer) => {
      dispatch({type: 'ANSWER_SELECTED', answer})
    },
    onContinue: () => {
      dispatch({type: 'CONTINUE'})
    }
  }
}


const Quiz = connect(mapStateToProps, mapDispatchToProps)(
  function({turnData, highlight, onAnswerSelect, onContinue}) {
    return (
      <div className="container-fluid">
        <Hero />
        <Turn {...turnData} highlight={highlight} onAnswerSelect={onAnswerSelect}/>
        <Continue show={highlight === 'correct'} onContinue={onContinue}/>
        <Footer />
     </div>
    );
  })


export default Quiz;
