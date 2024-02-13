import {Component} from 'react'

import {v4 as uid} from 'uuid'

import OptionItem from '../OptionItem'
import TagButtonItem from '../TagButtonItem'
import TaskItem from '../TaskItem'

import {
  AppContainer,
  TaskFormContainer,
  FormHeading,
  InputContainer,
  Label,
  Input,
  Select,
  AddButton,
  TasksDisplayContainer,
  ShowHeading,
  TagsContainer,
  TasksContainer,
  NoTasksContainer,
  NoTasksDescription,
} from './styledComponents'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class MyTask extends Component {
  state = {
    tasksList: [],
    taskInput: '',
    option: tagsList[0].optionId,
    activeBtn: '',
  }

  onChangeInput = event => {
    this.setState({taskInput: event.target.value})
  }

  onChangeOption = event => {
    this.setState({option: event.target.value})
  }

  onAddTask = event => {
    event.preventDefault()
    const {taskInput, option} = this.state
    const optionDetails = tagsList.filter(each => each.optionId === option)
    console.log(optionDetails)
    const {displayText} = optionDetails[0]
    const newTask = {
      id: uid(),
      task: taskInput,
      option,
      displayText,
    }

    this.setState(prev => ({
      tasksList: [...prev.tasksList, newTask],
      taskInput: '',
      option: tagsList[0].optionId,
    }))
  }

  clickedTagButton = id => {
    this.setState({activeBtn: id})
  }

  render() {
    const {taskInput, option, activeBtn, tasksList} = this.state
    console.log(tasksList)

    let taggedTasks
    if (activeBtn === '') {
      taggedTasks = tasksList
    } else {
      taggedTasks = tasksList.filter(each => each.option === activeBtn)
    }

    return (
      <AppContainer>
        <TaskFormContainer onSubmit={this.onAddTask}>
          <FormHeading>Create a task!</FormHeading>
          <InputContainer>
            <Label htmlFor="input-bar">Task</Label>
            <Input
              placeholder="Enter the task here"
              value={taskInput}
              onChange={this.onChangeInput}
              id="input-bar"
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="select-bar">Tags</Label>
            <Select
              id="select-bar"
              as="select"
              onChange={this.onChangeOption}
              value={option}
            >
              {tagsList.map(each => (
                <OptionItem key={each.optionId} details={each} />
              ))}
            </Select>
          </InputContainer>
          <AddButton type="submit">Add Task</AddButton>
        </TaskFormContainer>
        <TasksDisplayContainer>
          <ShowHeading>Tags</ShowHeading>
          <TagsContainer>
            {tagsList.map(each => (
              <TagButtonItem
                key={each.optionId}
                details={each}
                activeBtn={activeBtn === each.optionId}
                clickedTagButton={this.clickedTagButton}
              />
            ))}
          </TagsContainer>
          <ShowHeading>Tasks</ShowHeading>
          {taggedTasks.length > 0 ? (
            <TasksContainer>
              {taggedTasks.map(each => (
                <TaskItem key={each.id} details={each} />
              ))}
            </TasksContainer>
          ) : (
            <NoTasksContainer>
              <NoTasksDescription>No Tasks Added Yet</NoTasksDescription>
            </NoTasksContainer>
          )}
        </TasksDisplayContainer>
      </AppContainer>
    )
  }
}

export default MyTask
