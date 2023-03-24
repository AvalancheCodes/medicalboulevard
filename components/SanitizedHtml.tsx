import { Fragment, useMemo } from "react";
import sanitizeHtml from 'sanitize-html';

interface IProps {
  html: string;
}

// See https://www.npmjs.com/package/sanitize-html
const SanitizedHtml = ({ html }: IProps) => {

  const sanitizedHtml = useMemo<string>(() => {
    return sanitizeHtml(html);
  }, [html])

  return (<div dangerouslySetInnerHTML={{ __html: sanitizedHtml }}></div>)
}

export default SanitizedHtml;
