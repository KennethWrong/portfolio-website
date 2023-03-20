import React, {useEffect, useState, useRef} from 'react';
import ReactDOM from 'react-dom';
import {EditorState, convertFromRaw, RichUtils, AtomicBlockUtils,
    getDefaultKeyBinding, KeyBindingUtil, DefaultDraftBlockRenderMap} from 'draft-js';

import 'draft-js/dist/Draft.css';
import InlineStyleControls from './InlineStyleControls';
import BlockStyleControls, {styleMap, getBlockStyle, blockRenderMap} from './BlockStyleControl';
import { mediaBlockRenderer } from '../entities/mediaBlockRenderer';

import Editor from '@draft-js-plugins/editor';
import createImagePlugin from '@draft-js-plugins/image';
import encodeImageFileAsURL from '../../helper/misc';

const imagePlugin = createImagePlugin();
const plugins = [imagePlugin];


const emptyContentState = convertFromRaw({
    entityMap: {},
    blocks: [
      {
        text: '',
        key: 'foo',
        type: 'styled',
        entityRanges: [],
      },
    ],
  });


export default function BlogEditor() {
    const [editorState, setEditorState] = useState(
        () => EditorState.createWithContent(emptyContentState),
    );
    const [title, setTitle] = useState("")
    
    const {hasCommandModifier} = KeyBindingUtil;

    function myKeyBindingFn(e) {
        if (e.keyCode === 83 /* `S` key */ && hasCommandModifier(e)) {
          return 'myeditor-save';
        }
        return getDefaultKeyBinding(e);
      }
    
    const handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command)
        // This is for saving
        if(command === 'myeditor-save') {
            console.log("JMAO")
        }
        if(newState) {
            setEditorState(newState)
            return 'handled';
        }
        return 'not-handled';
    }

    const toggleBlockType = (blockType) => {
        setEditorState(RichUtils.toggleBlockType(editorState, blockType))
    }

    const toggleInlineStyle = (inlineStyle) => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle))
    }

    const onAddImage = (e) => {
        e.preventDefault();
        const urlValue = window.prompt("Paste Image Link");
        const contentState = editorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity(
         "image",
         "IMMUTABLE",
         { src: urlValue }
        );
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        const newEditorState = EditorState.set(
         editorState,
         { currentContent: contentStateWithEntity },
         "create-entity"
        );
        setEditorState(
          AtomicBlockUtils.insertAtomicBlock(
           newEditorState,
           entityKey,
           " "
          ))
       };
    
    const handlePastedFiles = ( files) => {
        const formData = new FormData();
        formData.append('file',files[0]) 
        fetch('/api/uploads', 
        {method: 'POST', body: formData})
        .then(res => res.json())
        .then(data => {
          if (data.file) { 
             setEditorState(insertImage(data.file)) //created below
          }
        }).catch(err => {
            console.log(err) 
        })
    }

    const insertImage = ( url) => {
        const contentState = editorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity(
            'IMAGE',
            'IMMUTABLE',
            { src: url },)
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set( editorState, { currentContent: contentStateWithEntity });
    return AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' ');
    };

    const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);

    return (
        <div className='flex flex-col justify-start p-3'>
            <header className="App-header text-center text-6xl font-bold font-mono mb-7 text-gray-700">
                Write new blog
            </header>

            <input type="text" placeholder='Title' 
            className='shadow text-xl appearance-none border rounded w-full p-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline h-14 font-bold'
            value={title} onChange={(e) => {e.preventDefault();setTitle(e.target.value)}}
            />

            <div className="RichEditor-root w-screen p-3">
                <BlockStyleControls editorState={editorState} onToggle={toggleBlockType} />
                <InlineStyleControls editorState={editorState} onToggle={toggleInlineStyle}/>
            
                <button className="styleButton" onClick={onAddImage}>
                    image
                </button>
                <div className='RichEditor-editor' onClick={focus}>
                    <Editor 
                        editorState={editorState}
                        placeholder="Write Something..."
                        blockStyleFn={getBlockStyle}
                        customStyleMap={styleMap}
                        handleKeyCommand={handleKeyCommand}
                        keyBindingFn = {myKeyBindingFn}
                        onChange={setEditorState}
                        blockRenderMap={extendedBlockRenderMap}
                        blockRendererFn={mediaBlockRenderer}
                        spellCheck={true}
                        plugins={plugins}
                        handlePastedFiles={handlePastedFiles}
                    />
                </div>
            </div>
        </div>
    )
}