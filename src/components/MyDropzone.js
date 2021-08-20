import React, {useCallback} from 'react'
import axios from 'axios'
import { useDropzone } from 'react-dropzone'

function MyDropzone({portfolioID}) {

  const addImg = async (file) => {
      const response = await fetch (`http://localhost:5000/portfolio/newimg/${portfolioID}`, 
        {
          method: 'POST',
          body: file
      })

console.log(file)
  
      if (response.status === 201) {
          // setSavedRes(response)
          // setAddState(false)
          // setStatus("success")
          console.log("New project successfully created!")
      } else {
          // setSavedRes(response)
          // setStatus("error")
          console.log("New project could not be created.")
      }
    }

  const onDrop = useCallback((acceptedFiles) => {

    acceptedFiles.forEach((file) => {


      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      // Do whatever you want with the file contents
        const binaryStr = reader.result
      addImg(file)

      }
      reader.readAsArrayBuffer(file)
    })
    
  }, [])

  const {getRootProps, getInputProps} = useDropzone({onDrop, accept: 'image/jpeg, image/png', maxFiles:1})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  )
}

export default MyDropzone