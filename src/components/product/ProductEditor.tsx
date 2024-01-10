import React, { Dispatch, SetStateAction } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CustomUploadAdapter } from 'components/ckeditor/CustomUploadAdapter'
import { FileLoader } from '@ckeditor/ckeditor5-upload'

type ProductEditorProps = {
    value: string | undefined;
    setValue: (value: string) => void;
  }

export const ProductEditor = ({ value, setValue } : ProductEditorProps) => {
    const uploadPlugin = (editor: any) => {
        editor.plugins.get("FileRepository").createUploadAdapter = (loader:FileLoader) => {
            return new CustomUploadAdapter(loader);
        };
    }

    const attrPlugin = (editor: any) => {
        // 이미지 업로드가 완료되었을 때의 event 를 감지
        editor.plugins.get('ImageUploadEditing').on('uploadComplete', (evt: any, { data, imageElement }: { data: any, imageElement: any}) => {
    
            editor.model.change((writer: any) => {
                writer.setAttribute('dataId', data.dataId, imageElement)
            })
            
            // block
            editor.model.schema.extend('imageBlock', { allowAttributes: 'dataId' })

            // inline
            editor.model.schema.extend('imageInline', {
                allowAttributes: 'dataId',
            });
            
            // block
            editor.conversion.for('upcast').attributeToAttribute({
                view: 'data-id',
                model: 'dataId',
            })

            // inline
            editor.conversion.for('dataDowncast').attributeToAttribute({
                model: 'dataId',
                view: 'data-id',
            })
        
            //block
            editor.conversion.for('downcast').add((dispatcher: any) => {
                dispatcher.on('attribute:dataId:imageBlock', (evt: any, data: any, conversionApi: any) => {
                if (!conversionApi.consumable.consume(data.item, evt.name)) {
                    return
                }
                const viewWriter = conversionApi.writer
                const figure = conversionApi.mapper.toViewElement(data.item)
                const img = figure.getChild(0)
        
                if (data.attributeNewValue !== null) {
                    viewWriter.setAttribute('data-id', data.attributeNewValue, img)
                } else {
                    viewWriter.removeAttribute('data-id', img)
                }
                })
            })

            // inline
            editor.conversion.for('editingDowncast').add((dispatcher: any) => {
                dispatcher.on('attribute:dataId:imageInline', (evt: any, data: any, { writer, consumable, mapper }: { writer: any, consumable: any, mapper: any }) => {
                  if (!consumable.consume(data.item, evt.name)) {
                    return
                  }
                  const imageContainer = mapper.toViewElement(data.item)
                  const imageElement = imageContainer.getChild(0)
                  if (data.attributeNewValue !== null) {
                    writer.setAttribute('data-id', data.attributeNewValue, imageElement)
                  } else {
                    writer.removeAttribute('data-id', imageElement)
                  }
                })
              })
        })
    }

    return (
        <>
            <CKEditor
                editor={ ClassicEditor }
                data={ value }
                onReady={ ( editor ) => {
                    // You can store the "editor" and use when it is needed.
                    uploadPlugin(editor);
                    attrPlugin(editor);
                }}
                onChange={ ( event, editor ) => {
                    setValue( editor.getData() );
                }}
                onBlur={ ( event, editor ) => {
                }}
                onFocus={ ( event, editor ) => {
                }}
            />
        </>
    )
}
