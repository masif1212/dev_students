import { useState } from 'react';

export const useToggleConfPasswordVisibility = () => {
  // password will not be initially visible
  // set the initial value to true because this will be the value fo secureTextEntry prop
  const [ConfpasswordVisibility, setConfPasswordVisibility] = useState(true);
  const [righticon, setRightIcon] = useState('eye');

  // function that toggles password visibility on a TextInput component on a password field
  const handleConfPasswordVisibility = () => {
    if (righticon === 'eye') {
      setRightIcon('eye-off');
      setConfPasswordVisibility(!ConfpasswordVisibility);
    } else if (righticon === 'eye-off') {
      setRightIcon('eye');
      setConfPasswordVisibility(!ConfpasswordVisibility);
    }
  };

  return {
    ConfpasswordVisibility,
    righticon,
    handleConfPasswordVisibility
  };
};