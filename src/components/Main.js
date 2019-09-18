import React from 'react';

const ArrowDown = ({handleArrowDown}) => (
	<i className="fas fa-chevron-down" onClick={handleArrowDown}/>
)

const ArrowUp = ({handleArrowUp}) => (
	<i className="fas fa-chevron-up" onClick={handleArrowUp}/>
)

const Option = ({status, index, question, option, handleChosen}) => (
	<div className={status[Number(index)]} onClick={(e) => handleChosen(e, index)}>{option}</div>
)

const Main = ({questions, currentIndex, handleArrowUp, handleArrowDown, status, handleChosen, handleFinish}) => {
	const question = questions[currentIndex]

  return (
  	<div>
	  	<div className="finish" onClick={handleFinish}>
				<i className="fas fa-paper-plane"></i>
			Finish
			</div>

	    <div className="container">
			  <ArrowUp handleArrowUp={handleArrowUp}/>
			  <div className="wrapper">
			    <div className="question">{question.question}</div>
			    <div className="option_wrap">
					{question.options.map( (option, index) =>
						<Option 
							key={index} 
							question={question} 
							option={option} 
							status={status} 
							handleChosen={handleChosen} 
							index={index}/>
					)}
			    </div>
			  </div>
			  <ArrowDown handleArrowDown={handleArrowDown}/>
			</div>
		</div>
  )
}

export default Main;