import classNames from 'classnames'
import {
  ChangeEventHandler,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { FormattedMessage, defineMessages, useIntl } from 'react-intl'
import LinkCheckbox from './LinkCheckbox'
import DownloadIcon from './icons/DownloadIcon'

const messages = defineMessages({
  height: {
    defaultMessage: 'Height',
    id: 'app.size-controls.height-label',
  },
  keepRatio: {
    defaultMessage: 'Keep aspect ratio?',
    id: 'app.size-controls.aspect-ratio-label',
  },
  width: {
    defaultMessage: 'Width',
    id: 'app.size-controls.width-label',
  },
})

export interface SvgImageData {
  content: Blob
  height: number
  name?: string
  width: number
}

interface SvgConverterProps {
  data: SvgImageData | undefined
}

export default function SvgConverter(props: SvgConverterProps): ReactElement {
  const { data } = props
  const aspectRatio = data ? data.width / data.height : NaN
  const [size, setSize] = useState<Dimensions | undefined>(
    data
      ? {
          height: data.height,
          width: data.width,
        }
      : undefined,
  )
  const downloadHref = useRef<string | null>(null)

  const onDownloadClick = useCallback(async () => {
    if (data && size) {
      const pngBlob = await convertToPng(data.content, size.height, size.width)
      const contentUrl = URL.createObjectURL(pngBlob)
      if (downloadHref.current) {
        URL.revokeObjectURL(downloadHref.current)
      }
      downloadHref.current = contentUrl

      triggerDownload(contentUrl, data?.name ?? 'image.png')
    }
  }, [data, size])
  const onSizeChange = useCallback((nextSize: Dimensions) => {
    setSize(nextSize)
  }, [])

  useEffect(() => {
    if (data) {
      setSize({ height: data.height, width: data.width })
    } else {
      setSize(undefined)
    }
  }, [data])

  return (
    <div className="flex-none -mx-2 sm:mx-auto my-4 flex flex-wrap justify-center gap-y-4 gap-x-2">
      <SizeInput
        aspectRatio={aspectRatio}
        onChange={onSizeChange}
        size={size}
      />
      <button
        className={classNames(
          'w-max h-full tpg-controller flex flex-none justify-center rounded-lg',
          'bg-white p-0 pt-2.5 pb-2.5 px-4',
          'focus:outline-primary',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'disabled:border disabled:border-secondary disabled:border-opacity-50',
          typeof data !== 'undefined' &&
            'elevation-dp2 hover:bg-primary hover:bg-opacity-20',
          typeof data !== 'undefined' &&
            'active:bg-primary active:bg-opacity-50 active:shadow-none active:ring-0',
        )}
        disabled={!data}
        onClick={onDownloadClick}
      >
        <div className="h-7 flex justify-center items-center">
          <DownloadIcon className="h-6 w-6 m-0.5 mr-2" />
          <FormattedMessage
            defaultMessage="Download"
            id="app.download-button.label"
          />
        </div>
      </button>
    </div>
  )
}

interface Dimensions {
  height: number
  width: number
}

interface SizeInputProps {
  aspectRatio: number
  onChange: (size: Dimensions) => void
  size: Dimensions | undefined
}

function SizeInput(props: SizeInputProps): ReactElement {
  const { aspectRatio, size, onChange } = props

  const intl = useIntl()
  const [keepAspectRatio, setKeepAspectRatio] = useState<boolean>(true)

  const linkCheckboxDescription = intl.formatMessage(messages.keepRatio)

  const onChangeHeight = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (ev) => {
      if (typeof size?.width !== 'undefined') {
        const height = Number(ev.target.value)
        onChange({
          height,
          width: keepAspectRatio ? height * aspectRatio : size.width,
        })
      }
    },
    [aspectRatio, keepAspectRatio, onChange, size?.width],
  )
  const onChangeWidth = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (ev) => {
      if (typeof size?.height !== 'undefined') {
        const width = Number(ev.target.value)
        onChange({
          height: keepAspectRatio ? width / aspectRatio : size.height,
          width,
        })
      }
    },
    [aspectRatio, keepAspectRatio, onChange, size?.height],
  )
  const onChangeKeepAspectRatio = useCallback<
    ChangeEventHandler<HTMLInputElement>
  >(
    (ev) => {
      setKeepAspectRatio(ev.target.checked)
      if (ev.target.checked && typeof size !== 'undefined') {
        onChange({
          height: size.width / aspectRatio,
          width: size.width,
        })
      }
    },
    [aspectRatio, onChange, size],
  )

  return (
    <div className="card-dimensions-grid w-48 flex-none">
      <DimensionInput
        align="right"
        disabled={typeof size === 'undefined'}
        onChange={onChangeWidth}
        prop="width"
        value={size?.width}
      />
      <LinkCheckbox
        checked={keepAspectRatio}
        className="w-8 h-full"
        description={linkCheckboxDescription}
        disabled={typeof size === 'undefined'}
        label="&times;"
        name="keep-original-aspect-ratio"
        onChange={onChangeKeepAspectRatio}
        width="1.5rem"
      />
      <DimensionInput
        align="left"
        disabled={typeof size === 'undefined'}
        onChange={onChangeHeight}
        prop="height"
        value={size?.height}
      />
    </div>
  )
}

interface DimensionInputProps {
  align: 'left' | 'right'
  disabled?: boolean
  onChange?: ChangeEventHandler<HTMLInputElement>
  prop: keyof Dimensions
  value: number | undefined
}
function DimensionInput({
  align,
  disabled = false,
  onChange,
  prop,
  value,
}: DimensionInputProps) {
  const intl = useIntl()
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const onFocus = useCallback(() => {
    setIsFocused(true)
  }, [])
  const onBlur = useCallback(() => {
    setIsFocused(false)
  }, [])
  return (
    <>
      <label
        className={classNames(
          'tpg-controller-label mt-1 mr-0 mb-0 px-1',
          isFocused && 'text-primary text-opacity-100',
          disabled && 'text-opacity-50',
          {
            'ml-auto text-right': align === 'right',
            'mr-auto text-left': align === 'left',
          },
        )}
        htmlFor={`card-size-${prop}-input`}
      >
        {intl.formatMessage(messages[prop])}
      </label>
      <input
        className={classNames(
          'w-full h-full tpg-controller no-spinner',
          'bg-transparent p-0 pt-5 px-1 border-0',
          disabled && 'text-opacity-50 cursor-not-allowed',
          !disabled && 'hover:bg-primary hover:bg-opacity-20',
          !disabled &&
            'active:bg-primary active:bg-opacity-50 active:shadow-none active:ring-0',
          'focus:outline-none focus:ring-0',
          'focus:border-primary focus:border-opacity-100 focus:border-b-2 focus:pb-0',
          'pb-px border-b border-secondary border-opacity-30',
          {
            'ml-auto text-right': align === 'right',
            'mr-auto text-left': align === 'left',
          },
        )}
        disabled={disabled}
        id={`card-size-${prop}-input`}
        name={`card-size-${prop}-input`}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        type="number"
        value={Number.isFinite(value) ? value : ''}
      />
    </>
  )
}

function convertToPng(
  content: Blob,
  height: number,
  width: number,
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const image = new Image()
    const canvas = document.createElement('canvas')
    image.height = height
    canvas.height = height
    image.width = width
    canvas.width = width

    const url = URL.createObjectURL(content)
    image.addEventListener('load', function () {
      URL.revokeObjectURL(url)
      const ctx = canvas.getContext('2d')
      if (!ctx) {
        reject(new Error('Could not retrieve canvas context'))
      } else {
        ctx.drawImage(image, 0, 0, width, height)
        canvas.toBlob((blob) => {
          if (!blob) {
            reject(new Error('Could not retrieve canvas content blob'))
          } else {
            resolve(blob)
          }
        }, 'image/png')
      }
    })

    image.src = url
  })
}

function triggerDownload(contentUrl: string, fileName: string) {
  const event = new MouseEvent('click', {
    bubbles: false,
    cancelable: true,
    view: window,
  })

  const anchor = document.createElement('a')
  anchor.setAttribute('download', fileName)
  anchor.setAttribute('href', contentUrl)
  anchor.setAttribute('rel', 'noreferrer')
  anchor.setAttribute('target', '_blank')

  anchor.dispatchEvent(event)
}
