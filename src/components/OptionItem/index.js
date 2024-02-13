import {Option} from './styledComponents'

const OptionItem = props => {
  const {details} = props
  const {optionId, displayText} = details

  return <Option value={optionId}>{displayText}</Option>
}

export default OptionItem