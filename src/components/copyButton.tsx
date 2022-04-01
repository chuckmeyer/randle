import React, { useState } from 'react'
import useCopyToClipboard from '../hooks/useCopyToClipboard';

interface ButtonProps {
  text: string;
}
const CopyButton: React.FC<ButtonProps> = (props) => {
  const [value, copy] = useCopyToClipboard()
  const [message, setMessage]  = useState('Share');

  console.log(value);
  return (
    <>
      <div style={{ display: 'flex' }}>
        <button onClick={() => {setMessage('Copied to clipboard!'); copy(props.text);}}>{message}</button>
      </div>
    </>
  )
}

export default CopyButton;