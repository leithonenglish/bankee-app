import { useState } from 'react';

export default function OTPCode(props) {
  const { className, onChange } = props;
  const [valueState, set] = useState([null, null, null, null])
  const handleKeyDown = (event, index) => {
    const value = parseInt(event.key);
    if (event.key == 'Backspace' || event.key == 'Delete' || event.key == 'Tab') {
      return;
    }
    event.preventDefault();
    if (!isNaN(value)) {
      event.target.value = value;
      updateValue(index, value);
      const nextElement = event.target.nextSibling;
      if (nextElement) {
        nextElement.focus();
      }
    }
  };
  const handleKeyUp = (event, index) => {
    if (event.key == 'Backspace' || event.key == 'Delete') {
      const previousElement = event.target.previousSibling;
      updateValue(index);
      if (previousElement) {
        previousElement.focus();
      }
    }
  };

  const updateValue = (index, value = null) => {
    const values = [...valueState];
    if (value) {
      values.splice(index, 1, value);
    } else {
      values.splice(index, 1);
    }
    set(values);
    onChange(values.join(''));
  }
  const inputElements = [...Array(4)].map((e, i) => {
    return (
      <input
        type="text"
        key={i}
        className="border-b-2 border-port-gore w-16 h-14 mx-2 pb-4 text-center text-3xl font-bold focus:border-medium-purple focus:text-medium-purple focus:outline-none"
        onKeyDown={(event) => handleKeyDown(event, i)}
        onKeyUp={(event) => handleKeyUp(event, i)}
      />
    );
  });
  return (
    <div className={`${className} flex`}>
      {inputElements}
    </div>
  )
}
