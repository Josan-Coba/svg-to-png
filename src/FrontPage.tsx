import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import SvgConverter, { SvgImageData } from './SvgConverter'
import SvgLoader from './SvgLoader'

const FrontPage: React.FC = () => {
  const [svgData, setSvgData] = useState<SvgImageData | undefined>(undefined)
  return (
    <div className="text-center">
      <div className="my-8">
        <h1 className="tpg-title text-center">
          <FormattedMessage defaultMessage="SVG 🡒 PNG" id="app.title" />
        </h1>
        <div className="my-8 tpg-body-1">
          <FormattedMessage
            defaultMessage="Just a simple converter from SVG to PNG, because I needed one that provided correct conversions."
            id="app.description"
          />
        </div>
      </div>
      <div className="mx-auto my-8 flex flex-col items-center">
        <SvgConverter data={svgData} />
        <SvgLoader onLoad={setSvgData} />
      </div>
    </div>
  )
}

export default FrontPage
