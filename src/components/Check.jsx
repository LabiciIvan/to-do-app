import { useState } from 'react';

export default function Check() {

  const [isChecked, setIsChecked] = useState(false);


  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <input type='checkbox' />
  )
}