import React, {useEffect, useState} from 'react';
import 'draft-js/dist/Draft.css';
// import BlogEditor from '../components/editor/BlogEditor';
import dynamic from 'next/dynamic'
const BlogEditor = dynamic(import('../components/editor/BlogEditor'), {ssr: false})

export default function Create() {
    return (
        <div className='flex flex-col items-center align-middle'>
            <BlogEditor />
        </div>
    )
}