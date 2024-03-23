import './styles.scss'

import { EditorProvider } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'

// import HeadingPrefixExtension from '@src/utils/HeadingPlugin'

const extensions = [
  StarterKit.configure(),
  // HeadingPrefixExtension.configure(),
]

const content = `
<h2>
  Hi there,
</h2>
`

export default () => {
  return (
    <EditorProvider extensions={extensions} content={content}></EditorProvider>
  )
}