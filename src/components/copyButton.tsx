import React, { useState } from 'react'
import useCopyToClipboard from '../hooks/useCopyToClipboard';
import useAnalyticsEventTracker from '../hooks/useAnalyticsEventTracker';

interface ButtonProps {
  text: string;
}
const CopyButton: React.FC<ButtonProps> = (props) => {
  const gaEventTracker = useAnalyticsEventTracker('Copy Button');
  const [value, copy] = useCopyToClipboard()
  const [message, setMessage]  = useState('Share');

  console.log(value);
  return (
    <>
      <div style={{ display: 'flex' }}>
        <button onClick={() => {setMessage('Copied to clipboard!'); copy(props.text); gaEventTracker('share');}}>{message}</button>
      </div>
    </>
  )
}

export default CopyButton;