import { createReadStream } from 'fs'
import { readdir } from 'fs/promises'
import { relative, resolve } from 'path'
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'

const client = new S3Client({ region: 'eu-west-1' })
const BUCKET_NAME = process.env['BUCKET_NAME']
const DIST_PATH = process.env['DIST_PATH']
const CWD = process.cwd()

if (!DIST_PATH) {
  throw new Error('Required env variable "DIST_PATH" not found')
}
if (!BUCKET_NAME) {
  throw new Error('Required env variable "BUCKET_NAME" not found')
}

async function uploadFolder(folderName: string, prefix = ''): Promise<void> {
  const dirents = await readdir(folderName, { withFileTypes: true })
  for (const dirEntry of dirents) {
    const filePath = resolve(folderName, dirEntry.name)
    if (dirEntry.isFile()) {
      const fileStream = createReadStream(filePath)
      const command = new PutObjectCommand({
        Body: fileStream,
        Bucket: BUCKET_NAME,
        ContentType: dirEntry.name.endsWith('.html')
          ? 'text/html'
          : dirEntry.name.endsWith('.js')
          ? 'text/javascript'
          : dirEntry.name.endsWith('.css')
          ? 'text/css'
          : 'application/octet-stream',
        Key: prefix ? `${prefix}/${dirEntry.name}` : dirEntry.name,
      })
      try {
        const data = await client.send(command)

        console.log(
          `Sending '${relative(CWD, filePath)}'... Responded with code "${
            data.$metadata.httpStatusCode ?? '?'
          }" (ETAG=${data.ETag ?? ''})`,
        )
      } catch (err) {
        console.error('ERROR:', err)
      }
    } else if (dirEntry.isDirectory()) {
      await uploadFolder(filePath, dirEntry.name)
    }
  }
}

void uploadFolder(DIST_PATH)
