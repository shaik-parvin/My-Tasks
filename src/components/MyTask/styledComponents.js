import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  background-size: cover;
`
export const TaskFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 40%;
  background-color: #131213;
  font-family: 'Roboto';
  padding: 30px;
`
export const FormHeading = styled.h1`
  color: #f3aa4e;
  font-size: 30px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: 'Roboto';
  margin-bottom: 25px;
`
export const Label = styled.label`
  font-size: 15px;
  color: #f1f5f9;
  font-weight: 500;
  margin-bottom: 5px;
`
export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px 16px;
  color: #64748b;
  background-color: #f1f5f9;
  border: none;
  cursor: pointer;
  outline: none;
`
export const Select = styled(Input)`
  color: #1a171d;
`
export const AddButton = styled.button`
  height: 40px;
  width: 120px;
  padding: 10px;
  color: #fff;
  background-color: #f3aa4e;
  border-style: none;
  border-radius: 6px;
  cursor: pointer;
  outline: none;
  margin-top: 20px;
  text-align: center;
`
export const TasksDisplayContainer = styled.div`
  width: 100%;
  background-color: #000000;
  height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
`
export const ShowHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: #fff;
  margin-bottom: 10px;
`
export const TagsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0px;
  padding: 0;
  list-style-type: none;
  margin-bottom: 15px;
`
export const TasksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  padding: 0;
`

export const NoTasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100;
`
export const NoTasksDescription = styled.p`
  font-weight: 500;
  font-family: 'Roboto';
  color: #fff;
  font-size: 30px;
`
