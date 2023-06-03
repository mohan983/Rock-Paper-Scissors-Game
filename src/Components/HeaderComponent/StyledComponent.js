import styled from 'styled-components'

export const ScoreHeader = styled.div`
  background-color: transparent;
  width: 70vw;
  border: 2px solid #ffffff;
  border-radius: 10px;
  padding: 20px;
  margin: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const GameNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const GameName = styled.h1`
  color: #ffffff;
  font-size: 25px;
  font-family: Roboto;
  margin: 3px;
  max-width: 100px;
`

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  background-size: cover;
  padding: 15px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ScoreParagraph = styled.p`
  color: #223a5f;
  font-size: 20px;
  font-family: Roboto;
  margin: 10px;
`

export const Score = styled.p`
  color: #223a5f;
  font-size: 30px;
  font-weight: 700;
  font-family: Roboto;
  margin: 0px;
`
