import React, { useState, Dispatch, SetStateAction } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CustomUploadAdapter } from 'components/ckeditor/CustomUploadAdapter';
import { FileLoader } from '@ckeditor/ckeditor5-upload';

type ProductEditorProps = {
    value: string | undefined;
    setValue: Dispatch<SetStateAction<string | undefined>>;
  }

export const ProductEditor = ({ value, setValue } : ProductEditorProps) => {

    const uploadPlugin = (editor: any) => {
        editor.plugins.get("FileRepository").createUploadAdapter = (loader:FileLoader) => {
            return new CustomUploadAdapter(loader);
        };
    }

    return (
        <>
            <CKEditor
                editor={ ClassicEditor }
                data={ value }
                onReady={ ( editor ) => {
                    // You can store the "editor" and use when it is needed.
                    uploadPlugin(editor);
                }}
                onChange={ ( event, editor ) => {
                    setValue( editor.getData() );
                }}
                onBlur={ ( event, editor ) => {
                    console.log( 'Blur.', editor );
                }}
                onFocus={ ( event, editor ) => {
                    console.log( 'Focus.', editor );
                }}
            />
        </>
    )
}
