import classNames from 'classnames'
import {
  FC,
  ReactElement,
  ReactEventHandler,
  useCallback,
  useRef,
  useState,
} from 'react'
import { useDropzone } from 'react-dropzone'
import { FormattedMessage } from 'react-intl'
import { SvgImageData } from './SvgConverter'
import SpinnerIcon from './icons/SpinnerIcon'

interface FileNameDisplayProps {
  className?: string
  name: string
  size: number | undefined
}

const FileNameDisplay: FC<FileNameDisplayProps> = ({
  className,
  name,
  size,
}) => {
  const indexOfDot = name.indexOf('.', name.length - 9)
  const namePart = indexOfDot >= 0 ? name.slice(0, indexOfDot) : name
  const suffix = indexOfDot >= 0 ? name.slice(indexOfDot) : ''

  return (
    <div className={className}>
      <span className="tpg-caption text-center flex justify-center flex-wrap">
        <span className="flex-initial flex justify-center max-w-full">
          <span className="flex-initial block truncate">{namePart}</span>
          <span className="flex-none">{suffix}</span>
        </span>
        <span className="flex-none whitespace-nowrap">
          {typeof size !== 'undefined' ? ` (${readableSize(size)})` : ''}
        </span>
      </span>
    </div>
  )
}

interface SvgLoaderProps {
  onError?: (error: unknown) => void
  onLoad: (data: SvgImageData | undefined) => void
}

export default function SvgLoader(props: SvgLoaderProps): ReactElement {
  const { onError, onLoad } = props
  const [filePreview, setFilePreview] = useState<string | undefined>(undefined)
  const [svgData, setSvgData] = useState<Blob | undefined>(undefined)
  const [fileName, setFileName] = useState<string | undefined>(undefined)
  const [fileSize, setFileSize] = useState<number | undefined>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const htmlObjectRef = useRef<HTMLObjectElement>(null)

  const onDrop = useCallback(
    (acceptedFiles: File[] /*, rejectedFiles: FileRejection[] */): void => {
      if (acceptedFiles.length) {
        if (filePreview) {
          URL.revokeObjectURL(filePreview)
          setFilePreview(undefined)
        }
        const fReader = new FileReader()
        fReader.addEventListener('abort', () =>
          console.info('Resource upload aborted while reading file'),
        )
        fReader.addEventListener('error', () =>
          console.error('Resource upload has failed while reading file'),
        )
        fReader.addEventListener('loadstart', () => setIsLoading(true))
        // fReader.addEventListener('progress', function (e) {
        //   console.log('PROGRESS=', e)
        // })
        fReader.addEventListener('loadend', () => setIsLoading(false))
        fReader.addEventListener('load', () => {
          setFileName(acceptedFiles[0].name)
          setFileSize(acceptedFiles[0].size)
          const data = fReader.result
          if (data) {
            const svgBlob = new Blob([data], {
              type: 'image/svg+xml;charset=utf-8',
            })
            const blobUrl = window.URL.createObjectURL(svgBlob)
            setSvgData(svgBlob)
            setFilePreview(blobUrl)
          }
        })

        fReader.readAsBinaryString(acceptedFiles[0])
      }
    },
    [filePreview],
  )
  const {
    getRootProps,
    getInputProps,
    isDragAccept,
    isDragActive,
    isDragReject,
  } = useDropzone({
    accept: 'image/svg+xml',
    multiple: false,
    onDrop,
  })

  const onLoadObject = useCallback<ReactEventHandler<HTMLObjectElement>>(
    function () {
      // revoke BLOB's URL
      if (svgData) {
        const name = fileName ? renameImage(fileName) : undefined
        try {
          if (htmlObjectRef.current?.contentDocument) {
            const { contentDocument } = htmlObjectRef.current
            const svgSize = getSvgSize(contentDocument)

            if (!contentDocument.documentElement.getAttribute('viewBox')) {
              contentDocument.documentElement.setAttribute(
                'viewBox',
                `0 0 ${svgSize.width} ${svgSize.height}`,
              )
            }
            onLoad({
              content: svgData,
              height: svgSize.height,
              name,
              width: svgSize.width,
            })
          } else {
            throw new SvgNotLoadedException('Could not load SVG input')
          }
        } catch (ex) {
          if (onError) {
            onError(ex)
          } else {
            console.error('EXCEPTION=', ex)
          }
        }
      }
    },
    [fileName, onError, onLoad, svgData],
  )

  return (
    <div
      {...getRootProps({
        className: classNames(
          'focusable-wrapper',
          typeof filePreview === 'undefined'
            ? 'w-full sm:w-96 h-72'
            : 'min-w-max h-auto',
        ),
      })}
    >
      <div
        className={classNames(
          'focusable w-full h-full flex items-center justify-center p-6',
          'rounded-lg border-2 border-secondary border-opacity-70 border-dashed',
          'hover:bg-primary hover:bg-opacity-20',
          'ring-primary ring-opacity-80',
          'active:bg-primary active:bg-opacity-50 active:ring-0 active:shadow-none',
        )}
      >
        <input {...getInputProps()} />
        <div
          className={classNames(
            'w-full h-full flex items-center justify-center',
            'tpg-controller text-center',
          )}
        >
          {isLoading ? (
            <SpinnerIcon className="animate-spin -ml-1 mr-3 w-8 h-8 text-secondary" />
          ) : isDragAccept ? (
            <p>
              <FormattedMessage
                defaultMessage="Drop the file here!"
                id="app.upload-resource.message-body-drag-accept"
              />
            </p>
          ) : isDragReject ? (
            <p>
              <FormattedMessage
                defaultMessage="The file will be rejected due to invalid MIME type"
                id="app.upload-resource.message-body-drag-reject"
              />
            </p>
          ) : isDragActive ? (
            <p>
              <FormattedMessage
                defaultMessage="Drop a file here..."
                id="app.upload-resource.message-body-drag-active"
              />
            </p>
          ) : typeof filePreview !== 'undefined' ? (
            <div className="w-full h-full relative">
              <object
                className="preview-image-object max-w-screen-md mx-auto"
                data={filePreview}
                onLoad={onLoadObject}
                ref={htmlObjectRef}
                type="image/svg+xml"
              />
              {typeof fileName !== 'undefined' && (
                <div className="mt-4 pb-1 -mb-2 rounded-b-lg">
                  <div className="h-px mx-auto w-4/5 bg-gradient-to-r from-transparent via-secondary to-transparent" />
                  <FileNameDisplay
                    className=" mt-2"
                    name={fileName}
                    size={fileSize}
                  />
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <p>
                <FormattedMessage
                  defaultMessage="Drag and drop a file here, or click to select a file from your device"
                  id="app.upload-resource.message-body"
                />
              </p>
              <p className="tpg-controller-info">
                <FormattedMessage
                  defaultMessage="(The file will be processed in your device. It will not be sent anywhere)"
                  id="app.upload-resource.message-disclaimer"
                />
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function readableSize(bytes: number): string {
  let size = bytes
  const unitList = ['Bytes', 'KiB', 'MiB', 'GiB']
  for (const unit of unitList) {
    if (size / 1024 < 1) {
      return `${size.toFixed(1)} ${unit}`
    } else {
      size /= 1024
    }
  }
  return `${size.toFixed(1)} TiB`
}

function getSvgSize(svgDoc: Document): { height: number; width: number } {
  const heightAttr = svgDoc.documentElement.getAttribute('height')
  const height = heightAttr ? Number.parseInt(heightAttr) : undefined
  const widthAttr = svgDoc.documentElement.getAttribute('width')
  const width = widthAttr ? Number.parseInt(widthAttr) : undefined

  if (
    typeof height !== 'undefined' &&
    Number.isInteger(height) &&
    typeof width !== 'undefined' &&
    Number.isInteger(width)
  ) {
    return { height, width }
  }

  const viewBoxAttr = svgDoc.documentElement.getAttribute('viewBox')
  if (viewBoxAttr) {
    const numberRe = '[\\+\\-]?\\d*\\.?\\d+'
    const wsRe = '[\\s\\,]+'
    const re = new RegExp(
      `(?<x>${numberRe})${wsRe}(?<y>${numberRe})${wsRe}(?<w>${numberRe})${wsRe}(?<h>${numberRe})`,
      'gi',
    )
    const match = re.exec(viewBoxAttr)
    if (match) {
      const implicitWidth = Number(match.groups?.w) - Number(match.groups?.x)
      const implicitHeight = Number(match.groups?.h) - Number(match.groups?.y)
      if (!Number.isFinite(implicitHeight) || !Number.isFinite(implicitWidth)) {
        throw new InvalidViewBoxException(
          `Couldn't parse a valid viewBox attribute, found [viewBox="${viewBoxAttr}"]`,
        )
      }
      return {
        height: implicitHeight,
        width: implicitWidth,
      }
    }
  }
  throw new ExplicitSizeNotFoundException(
    `The SVG needs to specify some size information either with a "viewBox" attribute or with a pair of "width"/"height" attributes`,
  )
}

function renameImage(name: string): string {
  if (name.endsWith('.svg')) {
    return name.replace(/\.svg$/gi, '.png')
  }
  return `${name}.png`
}

export class InvalidViewBoxException extends Error {
  constructor(message?: string) {
    super(message)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, InvalidViewBoxException)
    }
    this.name = 'InvalidViewBoxException'
  }
}

export class ExplicitSizeNotFoundException extends Error {
  constructor(message?: string) {
    super(message)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ExplicitSizeNotFoundException)
    }
    this.name = 'ExplicitSizeNotFoundException'
  }
}

export class SvgNotLoadedException extends Error {
  constructor(message?: string) {
    super(message)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ExplicitSizeNotFoundException)
    }
    this.name = 'SvgNotLoadedException'
  }
}
