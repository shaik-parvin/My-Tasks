import {ListItem, TaskDescription, TagContainer, Tag} from './styledComponents'

const TaskItem = props => {
  const {details} = props
  const {task, displayText} = details

  return (
    <ListItem>
      <TaskDescription>{task}</TaskDescription>
      <TagContainer>
        <Tag>{displayText}</Tag>
      </TagContainer>
    </ListItem>
  )
}

export default TaskItem
