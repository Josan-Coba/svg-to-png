import type {
  Options as HtmlPluginOptions,
  HtmlTagObject,
  TemplateParameter,
} from 'html-webpack-plugin'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

type TemplateOptions = HtmlPluginOptions & {
  appMountId?: string
  appMountIds?: string[]
  googleAnalytics?: { measurementId: string }
  lang?: string
  links?: (string | React.LinkHTMLAttributes<HTMLLinkElement>)[]
  metaTags?: React.MetaHTMLAttributes<HTMLMetaElement>[]
  mobile?: boolean
  scripts?: (string | React.ScriptHTMLAttributes<HTMLScriptElement>)[]
  title?: string
}

const HtmlPage: React.FC<TemplateParameter> = ({
  htmlWebpackPlugin,
}: TemplateParameter) => {
  const { bodyTags, headTags } = htmlWebpackPlugin.tags
  const {
    appMountId,
    appMountIds = [],
    googleAnalytics,
    lang = 'en',
    links = [],
    metaTags = [],
    mobile,
    scripts = [],
    title,
  } = htmlWebpackPlugin.options as TemplateOptions

  const mountIdsArray = appMountId
    ? [appMountId, ...appMountIds]
    : [...appMountIds]

  let googleAnalyticsScript = ''
  if (googleAnalytics) {
    if (!googleAnalytics.measurementId) {
      throw new Error('required googleAnalytics.measurementId config')
    } else {
      googleAnalyticsScript = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${googleAnalytics.measurementId}');
      `
    }
  }

  return (
    <html lang={lang}>
      <head>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="x-ua-compatible" />
        <title>{title}</title>

        {mobile && (
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        )}

        {!!metaTags?.length &&
          metaTags.map((metaAttributes) => {
            // eslint-disable-next-line react/jsx-key
            return <meta {...metaAttributes} />
          })}

        {!!links?.length &&
          links.map((linkAttributes) => {
            if (typeof linkAttributes === 'string') {
              return <link href={`${linkAttributes}`} rel="stylesheet" />
            } else {
              return <link {...linkAttributes} />
            }
          })}

        {googleAnalytics && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalytics.measurementId}`}
            ></script>
            <script
              type="text/javascript"
              dangerouslySetInnerHTML={{ __html: googleAnalyticsScript }}
            ></script>
          </>
        )}

        {headTags.map(mapHtmlTagObject)}
      </head>
      <body>
        {mountIdsArray.map((id) => (
          <div id={id} key={id} />
        ))}

        {scripts.map((scriptAttributes) => {
          if (typeof scriptAttributes === 'string') {
            return (
              <script src={scriptAttributes} type="text/javascript"></script>
            )
          } else {
            return <script {...scriptAttributes}></script>
          }
        })}

        {bodyTags.map(mapHtmlTagObject)}
      </body>
    </html>
  )
}

export default function template(
  templateParameters: TemplateParameter,
): string {
  const element = React.createElement(HtmlPage, templateParameters)
  const pageMarkup: string = renderToStaticMarkup(element)

  return `<!DOCTYPE html>\n${pageMarkup}`
}

function mapHtmlTagObject({
  attributes,
  innerHTML,
  tagName,
  voidTag,
}: HtmlTagObject) {
  return React.createElement(tagName, {
    ...attributes,
    dangerouslySetInnerHTML:
      !voidTag && innerHTML ? { __html: innerHTML } : undefined,
  })
}
