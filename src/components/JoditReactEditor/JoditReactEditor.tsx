import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';

const config = {
  readonly: false, 
  placeholder: 'Start typings...'
}

type Props = {
  defaultValue?: string
}

const JoditReactEditor = ({ defaultValue = '' }: Props) => {
	const editor = useRef(null);
	const [content, setContent] = useState(defaultValue);

	return (
		<JoditEditor
			ref={editor}
			value={content}
			config={config}
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent => {}}
		/>
	)
}

export default JoditReactEditor