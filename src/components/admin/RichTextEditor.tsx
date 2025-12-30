'use client'

import { useState, useEffect, useRef } from 'react'
import { EditorState, convertToRaw, ContentState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

interface RichTextEditorProps {
  value: string
  onChange: (html: string) => void
  placeholder?: string
  className?: string
}

export default function RichTextEditor({
  value,
  onChange,
  placeholder = 'Start typing...',
  className = '',
}: RichTextEditorProps) {
  const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty())
  const isInternalChange = useRef(false)
  const previousValue = useRef(value)

  useEffect(() => {
    // Only update if value changed from outside (not from our own onChange)
    if (value !== previousValue.current && !isInternalChange.current) {
      if (value) {
        try {
          const contentBlock = htmlToDraft(value)
          if (contentBlock) {
            const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks)
            const newEditorState = EditorState.createWithContent(contentState)
            setEditorState(newEditorState)
          }
        } catch (error) {
          console.error('Error converting HTML to draft:', error)
        }
      } else {
        setEditorState(EditorState.createEmpty())
      }
      previousValue.current = value
    }
    isInternalChange.current = false
  }, [value])

  const onEditorStateChange = (newEditorState: EditorState) => {
    setEditorState(newEditorState)
    isInternalChange.current = true
    const html = draftToHtml(convertToRaw(newEditorState.getCurrentContent()))
    previousValue.current = html
    onChange(html)
  }

  const toolbarOptions = {
    options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'link', 'emoji', 'image', 'history'],
    inline: {
      options: ['bold', 'italic', 'underline', 'strikethrough'],
    },
    blockType: {
      options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'Blockquote'],
    },
    fontSize: {
      options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
    },
    list: {
      options: ['unordered', 'ordered'],
    },
    textAlign: {
      options: ['left', 'center', 'right', 'justify'],
    },
    link: {
      options: ['link'],
    },
    image: {
      uploadCallback: () => Promise.resolve({ data: { link: '' } }),
      alt: { present: false, mandatory: false },
      defaultSize: {
        height: 'auto',
        width: 'auto',
      },
    },
  }

  return (
    <div className={`rich-text-editor ${className}`} dir="ltr">
      <Editor
        editorState={editorState}
        wrapperClassName="border border-[#233554] rounded-lg bg-[#0a192f]"
        editorClassName="px-4 py-3 min-h-[300px] text-[#ccd6f6] bg-[#0a192f]"
        toolbarClassName="bg-[#112240] border-b border-[#233554] px-4 py-2"
        onEditorStateChange={onEditorStateChange}
        placeholder={placeholder}
        toolbar={toolbarOptions}
        editorStyle={{ direction: 'ltr', textAlign: 'left' }}
      />
      <style jsx global>{`
        .rich-text-editor .rdw-editor-toolbar {
          background-color: #112240;
          border-bottom: 1px solid #233554;
          direction: ltr;
        }
        .rich-text-editor .rdw-option-wrapper {
          border: 1px solid transparent;
          padding: 5px;
          min-width: 30px;
          height: 30px;
          border-radius: 2px;
          margin: 0 1px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          background: transparent;
          text-transform: capitalize;
          direction: ltr;
        }
        .rich-text-editor .rdw-option-wrapper:hover {
          box-shadow: 1px 1px 0px #233554;
          background-color: #0a192f;
        }
        .rich-text-editor .rdw-option-active {
          background-color: #0a192f;
          box-shadow: 1px 1px 0px #233554 inset;
        }
        .rich-text-editor .rdw-dropdown-wrapper {
          height: 30px;
          background: transparent;
          border: 1px solid transparent;
          border-radius: 2px;
          margin: 0 1px;
          direction: ltr;
        }
        .rich-text-editor .rdw-dropdown-wrapper:hover {
          box-shadow: 1px 1px 0px #233554;
          background-color: #0a192f;
        }
        .rich-text-editor .rdw-dropdown-selectedtext {
          color: #ccd6f6;
        }
        .rich-text-editor .rdw-editor-main {
          color: #ccd6f6;
          direction: ltr;
          text-align: left;
        }
        .rich-text-editor .rdw-editor-main::placeholder {
          color: #8892b0;
        }
        .rich-text-editor .public-DraftEditorPlaceholder-root {
          color: #8892b0;
          direction: ltr;
          text-align: left;
        }
        .rich-text-editor .public-DraftStyleDefault-block {
          margin: 0.5em 0;
          direction: ltr;
          text-align: left;
        }
        .rich-text-editor .public-DraftEditor-content {
          direction: ltr;
          text-align: left;
        }
        .rich-text-editor .rdw-link-modal {
          background-color: #112240;
          border: 1px solid #233554;
          color: #ccd6f6;
        }
        .rich-text-editor .rdw-link-modal-input {
          background-color: #0a192f;
          border: 1px solid #233554;
          color: #ccd6f6;
        }
        .rich-text-editor .rdw-link-modal-label {
          color: #8892b0;
        }
      `}</style>
    </div>
  )
}

