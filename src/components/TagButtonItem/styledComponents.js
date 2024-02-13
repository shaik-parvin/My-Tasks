import styled from 'styled-components'

export const ListItem = styled.li`
  margin-right: 20px;
`

export const Button = styled.button`
  background-color : ${props => props.bgColor};
  height: 30px;
  text-align: center;
  color: #f1f5f9;
  border: solid 1px #f3aa4e;
  border-radius: 20px;
  cursor: pointer;
  width: 100%;
  outline: none;
  padding: 5px 16px;
`
