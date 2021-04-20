import { useState } from 'react';
import { useSpring, animated as a } from 'react-spring'
import Tick from '../../assets/tick.svg'

export default function Checkbox(props) {
  const { className, checked } = props;
  const [ isChecked, set ] = useState(checked)
  const handleOnClick = () => {
    set(state => (!state))
  }
  const springProps = useSpring({
    opacity: isChecked ? 1 : 0
  });
  return (
    <div
      onClick={handleOnClick}
      className={`${className} flex justify-center items-center h-[26px] w-[26px] bg-medium-purple bg-opacity-20 border border-medium-purple rounded cursor-pointer`}
    >
      <input type="checkbox" className="invisible w-0 h-0" />
      {isChecked && <a.span style={springProps}><Tick className="w-4" /></a.span>}
    </div>
  )
}
