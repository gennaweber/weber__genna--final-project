import { promises as fs } from 'fs'
import path from 'path'


const write = async (file, data) => {
  const filePath = path.resolve(`./data/${file}.json`)
  await fs.writeFile(filePath, JSON.stringify(data))
}

//check if file exists async
const exists = async (file) => {
  try {
    await fs.access(`./data/${file}.json`)
    return true
  } catch {
    return false
  }
}

const add = async (file, data) => {
  try {
    if (await exists(file)){
        //update existing contents if file already exists
        let content = await getAll(file)
        content.push(data)
        await write(file, content)
    } else {
        //initialize array if file does not already exist
        await write(file, [data])
    }
  } catch (err) {
      console.log(err)
      throw err
  }
}

const getAll = async (file) => {
    const filePath = path.resolve(`./data/${file}.json`)

    try {
      let content = await fs.readFile(filePath)
      return JSON.parse(content)
  } catch(err) {
      console.log("module error", err)
      throw err
  }
}

const getOne = async (file, id) => {
  let content = await getAll(file)
  const itemLocaton = content.findIndex(item => item.id === id)
  if(itemLocaton != -1) {
    return content[itemLocaton]
  }
  else {
    throw new Error(`ID: ${id} not found`)
  }
}

const update = async (file, id, data) => {
  let content = await getAll(file)
  
  const itemLocaton = content.findIndex(item => item.id === id)

  if (itemLocation != -1) {
      content[itemLocaton] = data
  } else {
      throw new Error(`ID: ${id} not found`)
  }

  await write(content)

}

export {
  add,
  getAll,
  getOne,
  update
}