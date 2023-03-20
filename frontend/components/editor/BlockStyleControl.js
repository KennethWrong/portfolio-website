import React from 'react'
import {Map} from 'immutable'

export const styleMap = {
    CODE: {
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
      fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
      fontSize: 16,
      padding: 2,
    },
  };

export  function getBlockStyle(block) {
    switch (block.getType()) {
      case 'blockquote': return 'RichEditor-blockquote';
      default: return null;
    }
  }

  export function StyleButton(props) {
    const onToggle = (e) => {
      e.preventDefault();
      props.onToggle(props.style);
    };
  
    let className = 'RichEditor-styleButton';
    if (props.active) {
      className += ' RichEditor-activeButton';
    }
  
    return (
      <span className={className} onMouseDown={onToggle}>
        {props.label}
      </span>
    );
  }

  const CustomH1 = (props) => {
    return (
        <div className=" text-7xl">
            {props.children}
        </div>
    )
  }
  const CustomH2 = (props) => {
    return (
        <div className=" text-5xl">
            {props.children}
        </div>
    )
  }
  const CustomH3 = (props) => {
    return (
        <div className=" text-3xl">
            {props.children}
        </div>
    )
  }

  const CustomH4 = (props) => {
    return (
        <div className=" text-2xl">
            {props.children}
        </div>
    )
  }

  const CustomH5 = (props) => {
    return (
        <div className=" text-xl">
            {props.children}
        </div>
    )
  }

  const CustomH6 = (props) => {
    return (
        <div className=" text-lg">
            {props.children}
        </div>
    )
  }

  const CustomUnstyled = (props) => {
    return (
        <div className=" text-md">
            {props.children}
        </div>
    )
  }

  const BLOCK_TYPES = [
    {label: 'H1', style: 'CustomH1'},
    {label: 'H2', style: 'CustomH2'},
    {label: 'H3', style: 'CustomH3'},
    {label: 'H4', style: 'CustomH4'},
    {label: 'H5', style: 'CustomH5'},
    {label: 'H6', style: 'CustomH6'},
    {label: 'Blockquote', style: 'blockquote'},
    {label: 'UL', style: 'unordered-list-item'},
    {label: 'OL', style: 'ordered-list-item'},
    {label: 'Code Block', style: 'code-block'},
  ];

  export const blockRenderMap = Map({
    'CustomH1': {
      element: 'h1',
      wrapper: <CustomH1 />
    },
    'CustomH2': {
      element: 'h2',
      wrapper: <CustomH2 />
    },
    'CustomH3': {
      element: 'h3',
      wrapper: <CustomH3 />
    },
    'CustomH4': {
      element: 'h4',
      wrapper: <CustomH4 />
    },
    'CustomH5': {
      element: 'h5',
      wrapper: <CustomH5 />
    },
    'CustomH6': {
      element: 'h6',
      wrapper: <CustomH6 />
    },
    'CustomUnstyled': {
      element: 'p',
      wrapper: <CustomUnstyled/>
    },
  });

  const BlockStyleControls = (props) => {
    const {editorState} = props;
    const selection = editorState.getSelection();
    const blockType = editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType();

    return (
      <div className="RichEditor-controls">
        {BLOCK_TYPES.map((type) =>
          <StyleButton
            key={type.label}
            active={type.style === blockType}
            label={type.label}
            onToggle={props.onToggle}
            style={type.style}
          />
        )}
      </div>
    );
  };

  export default BlockStyleControls;