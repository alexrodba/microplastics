import fs from 'fs'
import path from 'path'
import yaml from 'yaml'

export function getContent() {
  const filePath = path.join(process.cwd(), 'content/ca/labels.yaml')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  return yaml.parse(fileContents)
}
