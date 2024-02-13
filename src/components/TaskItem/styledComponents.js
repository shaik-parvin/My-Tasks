import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px 20px;
  background-color: #1a171d;
  margin-bottom: 10px;
  height: 60px;
`

export const TaskDescription = styled.p`
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
`

export const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3aa4e;
  padding: 1px 15px;
  background-size: cover;
  border-style: none;
  border-radius: 20px;
`
export const Tag = styled.p`
  font-family: 'Roboto';
  color: #1a171d;
  font-size: 10px;
  font-weight: 500;
`
