import {Component} from 'react'
import HeaderComponent from '../HeaderComponent'
import PopupComponent from '../PopupComponent'
import GameResult from '../GameResult'
import {
  GameContainer,
  GameViewContainer,
  GameButton,
  GameImage,
} from './StyledComponent'

class RPSGame extends Component {
  state = {
    score: 0,
    isGameOver: false,
    gameResult: '',
    choicesArray: '',
  }

  restartGame = () => {
    this.setState({isGameOver: false})
  }

  getResult = (item1, item2) => {
    if (item1.id === 'ROCK') {
      switch (item2.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (item1.id === 'PAPER') {
      switch (item2.id) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (item2.id) {
        case 'ROCK':
          return 'YOU LOSE'
        case 'PAPER':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  checkResult = id => {
    const {choicesList} = this.props
    const {score} = this.state
    const choice2 = choicesList[Math.floor(Math.random() * choicesList.length)]
    const choice1 = choicesList.filter(eachValue => eachValue.id === id)
    const result = this.getResult(choice1[0], choice2)
    let newScore = score
    if (result === 'YOU WON') {
      newScore = score + 1
    } else if (result === 'YOU LOSE') {
      newScore = score - 1
    } else {
      newScore = score
    }
    this.setState({
      isGameOver: true,
      gameResult: result,
      score: newScore,
      choicesArray: [choice1[0], choice2],
    })
  }

  render() {
    const {score, isGameOver, gameResult, choicesArray} = this.state
    const {choicesList} = this.props

    const GameView = (
      <GameViewContainer>
        <GameButton
          type="button"
          key={choicesList[0].id}
          data-testid="rockButton"
        >
          <GameImage
            src={choicesList[0].imageUrl}
            alt={choicesList[0].id}
            onClick={() => this.checkResult(choicesList[0].id)}
          />
        </GameButton>
        <GameButton
          type="button"
          key={choicesList[1].id}
          data-testid="paperButton"
        >
          <GameImage
            src={choicesList[1].imageUrl}
            alt={choicesList[1].id}
            onClick={() => this.checkResult(choicesList[1].id)}
          />
        </GameButton>
        <GameButton
          type="button"
          key={choicesList[2].id}
          data-testid="scissorsButton"
        >
          <GameImage
            src={choicesList[2].imageUrl}
            alt={choicesList[2].id}
            onClick={() => this.checkResult(choicesList[2].id)}
          />
        </GameButton>
      </GameViewContainer>
    )

    return (
      <GameContainer>
        <HeaderComponent score={score} />
        {isGameOver ? (
          <GameResult
            gameResult={gameResult}
            choicesArray={choicesArray}
            restartGame={this.restartGame}
          />
        ) : (
          GameView
        )}
        <PopupComponent />
      </GameContainer>
    )
  }
}

export default RPSGame
