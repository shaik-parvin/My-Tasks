import {ListItem, Button} from './styledComponents'

const TagButtonItem = props => {
  const {details, activeBtn, clickedTagButton} = props
  const {optionId, displayText} = details

  const bgColor = activeBtn ? '#f3aa4e' : 'transparent'

  const onClickTag = () => {
    clickedTagButton(optionId)
  }

  return (
    <ListItem>
      <Button bgColor={bgColor} type="button" onClick={onClickTag}>
        {displayText}
      </Button>
    </ListItem>
  )
}

export default TagButtonItem