import React from 'react';

const Modal = ({ isGameOver, isGameFinished, handleNewParty }) => (
  <section className="modal">
    <p>
      {
        isGameOver ? 'Sorry, the game is over :(' :
        isGameFinished ? 'Congratulations, you beat all the ennemys !' :
        null
      }
    </p>
    <button className="btn" onClick={handleNewParty}>Click here to try again</button>
  </section>
)

export default Modal
