import React, {useCallback} from 'react'
import { useDropzone } from 'react-dropzone'

function MyDropzone({upload, setPreviewImg, previewImg, preview}) {

  const onDrop = useCallback((acceptedFiles) => {

    acceptedFiles.forEach((file) => {

      upload(file)

      const reader = new FileReader()
      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      const useableUpload = reader.result
      setPreviewImg({src: useableUpload, alt: file.name})
      }
      reader.readAsDataURL(file)
    })
    
  }, [setPreviewImg, upload])

  const {getRootProps, getInputProps} = useDropzone({onDrop, accept: 'image/jpeg, image/png', maxFiles:1})

  return (
    <>
    {!preview ?
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
    :
    <div>
      <img height="100" width="100" src={previewImg.src} alt={previewImg.alt}/>
    </div>
    }
  </>
  )
}

export default MyDropzone