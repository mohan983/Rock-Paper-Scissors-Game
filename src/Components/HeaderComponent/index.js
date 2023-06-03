import {
  ScoreHeader,
  GameNameContainer,
  GameName,
  ScoreContainer,
  ScoreParagraph,
  Score,
} from './StyledComponent'

const HeaderComponent = props => {
  const {score} = props

  return (
    <ScoreHeader>
      <GameNameContainer>
        <GameName>Rock Paper Scissors</GameName>
      </GameNameContainer>
      <ScoreContainer>
        <ScoreParagraph>Score</ScoreParagraph>
        <Score>{score}</Score>
      </ScoreContainer>
    </ScoreHeader>
  )
}

export default HeaderComponent
