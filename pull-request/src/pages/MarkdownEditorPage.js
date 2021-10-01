import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { light } from 'react-syntax-highlighter/dist/esm/styles/prism'
import TextareaAutosize from 'react-textarea-autosize';

import './style.css';

const Editor = ({ setMarkdown }) => {

    const handleChange = (e) => {
        setMarkdown(e.target.value);
    }

    return (
        <form name='markdown-editor-form'>
            <label id='markdown-editor-label' htmlFor='markdown-editor-input'>Markdown Editor</label>
            <TextareaAutosize id='markdown-editor-input' onChange={handleChange} className='w-100' placeholder='# Your markdown here...' autoFocus />
        </form>
    )
}

const MarkdownPreviewPage = () => {

    const [markdown, setMarkdown] = useState('');

    return (
        <div className="container mt-100">
            <div className="row">
                <div className="col">
                    <Editor setMarkdown={setMarkdown} />
                    <ReactMarkdown components={{
                        code({ node, inline, className, children, ...props }) {
                            const match = /language-(\w+)/.exec(className || '')
                            return !inline && match ? (
                                <SyntaxHighlighter
                                    children={String(children).replace(/\n$/, '')}
                                    style={light}
                                    language={match[1]}
                                    PreTag="div"
                                    {...props}
                                />
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            )
                        }
                    }}
                    >{markdown}</ReactMarkdown>
                </div>
            </div >
        </div >
    )
}

export default MarkdownPreviewPage;
