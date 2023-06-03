import styled from 'styled-components'

export const GameResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 400px;
  flex-wrap: wrap;
  margin-top: 60px;
  margin-bottom: 15px;
`

export const ResultImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`
export const ResultName = styled.p`
  color: white;
  font-size: 20px;
`
export const ResultText = styled.p`
  color: white;
  font-size: 25px;
`
export const ResultButton = styled.button`
  width: 100px;
  height: 28px;
  padding: 10px;
  color: #223a5f;
  font-size: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border-style: none;
  outline: none;
`
export const GameImage = styled.img`
  width: 150px;
  height: 150px;
`
