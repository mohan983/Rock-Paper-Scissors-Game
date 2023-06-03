import {
  GameResultContainer,
  GameImage,
  ResultImageContainer,
  ResultName,
  ResultText,
  ResultButton,
} from './StyledComponent'

const GameResult = props => {
  const {gameResult, choicesArray, restartGame} = props
  const onClickPlayAgain = () => {
    restartGame()
  }
  return (
    <GameResultContainer>
      <ResultImageContainer>
        <ResultName>YOU</ResultName>
        <GameImage src={choicesArray[0].imageUrl} alt="your choice" />
      </ResultImageContainer>
      <ResultImageContainer>
        <ResultName>OPPONENT</ResultName>
        <GameImage src={choicesArray[1].imageUrl} alt="opponent choice" />
      </ResultImageContainer>
      <ResultImageContainer>
        <ResultText>{gameResult}</ResultText>
        <ResultButton type="button" onClick={onClickPlayAgain}>
          PLAY AGAIN
        </ResultButton>
      </ResultImageContainer>
    </GameResultContainer>
  )
}

export default GameResult
