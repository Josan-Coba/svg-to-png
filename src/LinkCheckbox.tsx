import classNames from 'classnames'
import {
  CSSProperties,
  FocusEventHandler,
  HTMLProps,
  MouseEventHandler,
  ReactElement,
  useCallback,
  useRef,
  useState,
} from 'react'
import { usePopper } from 'react-popper'
import LinkIcon from './icons/LinkIcon'
import LinkOffIcon from './icons/LinkOffIcon'

interface LinkCheckboxProps extends HTMLProps<HTMLInputElement> {
  description: string
  label: string
  type?: 'checkbox'
}

export default function LinkCheckbox(props: LinkCheckboxProps): ReactElement {
  const {
    className,
    description,
    disabled,
    label,
    onBlur,
    onMouseDownCapture,
    onFocus,
    ...inputProps
  } = props
  const inputStyle: CSSProperties = {
    ...props.style,
    opacity: 0.00001,
  }

  const tooltipTimeout = useRef<NodeJS.Timeout | null>(null)
  const tooltipDelay = 600
  const [isTooltipShown, setIsTooltipShown] = useState<true | undefined>(
    undefined,
  )
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
    null,
  )
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null)
  const [arrowElement, setArrowElement] = useState<HTMLElement | null>(null)
  const { attributes, styles, update } = usePopper(
    referenceElement,
    popperElement,
    {
      modifiers: [
        { name: 'arrow', options: { element: arrowElement, padding: 8 } },
        { name: 'offset', options: { offset: [0, 8] } },
      ],
    },
  )
  const showTooltip = useCallback(() => {
    if (!tooltipTimeout.current) {
      tooltipTimeout.current = setTimeout(() => {
        setIsTooltipShown(true)
        if (update) {
          update().catch((err) => {
            console.error('Failed updating tooltip', err)
          })
        }
      }, tooltipDelay)
    }
  }, [update])

  const hideTooltip = useCallback(() => {
    if (tooltipTimeout.current) {
      clearTimeout(tooltipTimeout.current)
      tooltipTimeout.current = null
    }
    setIsTooltipShown(undefined)
  }, [])

  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [isClicked, setIsClicked] = useState<boolean>(false)
  const onMouseDownCaptureHandler = useCallback<
    MouseEventHandler<HTMLInputElement>
  >(
    (event) => {
      setIsClicked(true)
      if (onMouseDownCapture) {
        onMouseDownCapture(event)
      }
    },
    [onMouseDownCapture],
  )
  const onFocusHandler = useCallback<FocusEventHandler<HTMLInputElement>>(
    (event) => {
      setIsFocused(true)
      showTooltip()
      if (onFocus) {
        onFocus(event)
      }
    },
    [onFocus, showTooltip],
  )
  const onBlurHandler = useCallback<FocusEventHandler<HTMLInputElement>>(
    (event) => {
      setIsFocused(false)
      setIsClicked(false)
      hideTooltip()
      if (onBlur) {
        onBlur(event)
      }
    },
    [onBlur, hideTooltip],
  )

  return (
    <>
      <div
        aria-hidden="true"
        className={classNames(
          'tpg-tool-label text-sm mt-0.5 text-center w-full',
          disabled && 'text-opacity-50',
          isFocused && 'text-primary text-opacity-100',
        )}
      >
        {label}
      </div>
      <div className={className}>
        <label
          className={classNames(
            'relative flex flex-none justify-center',
            'w-full h-full tpg-menu-1 pt-6 text-center self-center',
            disabled ? 'text-opacity-50 cursor-not-allowed' : 'cursor-pointer',
            isFocused
              ? 'border-primary border-opacity-100 border-b-2 pb-0'
              : 'border-secondary border-opacity-30 border-b pb-px',
            !disabled && 'hover:bg-primary hover:bg-opacity-20',
            !disabled &&
              'active:bg-primary active:bg-opacity-50 active:shadow-none active:ring-0',
            !disabled &&
              'active:border-primary active:border-opacity-100 active:border-b-2 active:pb-0',
          )}
          onMouseEnter={showTooltip}
          onMouseLeave={hideTooltip}
          ref={setReferenceElement}
        >
          <input
            {...inputProps}
            className={classNames(
              'absolute h-full w-full -mt-6',
              disabled ? 'pointer-events-none' : 'cursor-pointer',
            )}
            disabled={disabled}
            type="checkbox"
            onBlur={onBlurHandler}
            onFocus={onFocusHandler}
            onMouseDownCapture={onMouseDownCaptureHandler}
            style={inputStyle}
          />
          {props.checked ? (
            <LinkIcon
              aria-hidden="true"
              className={isFocused && !isClicked ? 'outline-primary' : ''}
              focusable="false"
              height={props.height}
              style={props.style}
              width={props.width}
            />
          ) : (
            <LinkOffIcon
              aria-hidden="true"
              className={isFocused && !isClicked ? 'outline-primary' : ''}
              focusable="false"
              height={props.height}
              style={props.style}
              width={props.width}
            />
          )}
          <div
            className={classNames(
              'popper-container absolute z-10 bg-surface rounded-lg min-w-max p-2',
              'elevation-dp8 focus:outline-none tpg-prop-label text-center',
            )}
            data-show={isTooltipShown}
            ref={setPopperElement}
            style={styles.popper}
            tabIndex={-1}
            {...attributes.popper}
          >
            <span id="link-checkbox-description-tooltip">{description}</span>
            <div
              className="popper-arrow"
              ref={setArrowElement}
              style={styles.arrow}
            />
          </div>
        </label>
      </div>
    </>
  )
}
