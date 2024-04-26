'use client'

import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { LuBold, LuHeading1, LuHeading2, LuHeading3, LuList, LuListOrdered } from 'react-icons/lu'
import { FileHandler } from '@tiptap-pro/extension-file-handler'
import { Image } from '@tiptap/extension-image'
import { API_URL } from '@/src/shared/constants/api'
import { http } from '@/src/shared/lib/http'
import Cookies from 'js-cookie'

export const Editor = () => {
  console.log(Cookies.get('accessToken'))
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Image,
      FileHandler.configure({
        allowedMimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp'],
        onDrop: (currentEditor, files, pos) => {
          files.forEach((file) => {
            const fileReader = new FileReader()

            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
              currentEditor
                .chain()
                .insertContentAt(pos, {
                  type: 'image',
                  attrs: {
                    src: fileReader.result,
                  },
                })
                .focus()
                .run()
            }
          })
        },
        onPaste: (currentEditor, files, htmlContent) => {
          files.forEach(async (file) => {
            if (htmlContent) {
              return false
            }
            const formData = new FormData()
            formData.append('file', file)

            const result = await http.post(API_URL.FILES, {
              file: formData,
            })

            console.log(result)

            currentEditor
              .chain()
              .insertContentAt(currentEditor.state.selection.anchor, {
                type: 'image',
                attrs: {
                  src: '',
                },
              })
              .focus()
              .run()
          })
        },
      }),
    ],
  })

  if (!editor) {
    return null
  }
  return (
    <div className="w-full">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        <LuBold />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
        <LuList />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      >
        <LuListOrdered />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
      >
        <LuHeading1 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
      >
        <LuHeading2 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
      >
        <LuHeading3 />
      </button>
      <div className="w-lvw flex flex-col justify-center px-20">
        <input
          type="text"
          placeholder="제목을 입력하세요"
          className="w-full p-1 resize-none h-16 border-b-2 text-2xl border-b-neutral-900"
        />
        <EditorContent editor={editor} className="w-full" />
      </div>
    </div>
  )
}
