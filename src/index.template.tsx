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
  googleAnalytics?: { pageViewOnLoad: boolean; trackingId: string }
  lang?: string
  links?: (string | React.LinkHTMLAttributes<HTMLLinkElement>)[]
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
    mobile,
    scripts = [],
    title,
  } = htmlWebpackPlugin.options as TemplateOptions

  const mountIdsArray = appMountId
    ? [appMountId, ...appMountIds]
    : [...appMountIds]

  let googleAnalyticsScript = ''
  if (googleAnalytics) {
    if (!googleAnalytics.trackingId) {
      throw new Error('required googleAnalytics.trackingId config')
    } else {
      googleAnalyticsScript = `
        window.GoogleAnalyticsObject='ga';
        window.ga=function(){ga.q.push(arguments)};
        ga.q=[];
        ga.l=+new Date;
        ga('create','${googleAnalytics.trackingId}','auto');
        ${googleAnalytics.pageViewOnLoad ? "ga('send','pageview');" : ''}`
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

        {!!links?.length &&
          links.map((linkAttributes) => {
            if (typeof linkAttributes === 'string') {
              return <link href={`${linkAttributes}`} rel="stylesheet" />
            } else {
              return <link {...linkAttributes} />
            }
          })}

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

        {googleAnalytics && (
          <>
            <script
              type="text/javascript"
              dangerouslySetInnerHTML={{ __html: googleAnalyticsScript }}
            ></script>
            <script
              async
              defer
              src="https://www.google-analytics.com/analytics.js"
              type="text/javascript"
            ></script>
          </>
        )}
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
