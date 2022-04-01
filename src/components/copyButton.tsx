import React from 'react'
import useCopyToClipboard from '../hooks/useCopyToClipboard';

interface ButtonProps {
  text: string;
}
const CopyButton: React.FC<ButtonProps> = (props) => {
  const [value, copy] = useCopyToClipboard()
  console.log(value);
  return (
    <>
      <div style={{ display: 'flex' }}>
        <button onClick={() => copy(props.text)}>Share</button>
      </div>
    </>
  )
}

export default CopyButton;