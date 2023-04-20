import Image from 'next/legacy/image'
import { ImageProps } from "next/dist/client/legacy/image";

interface IProps extends ImageProps {
  light?: boolean;

  [key: string]: any;
}

const toBase64 = (str: string): string =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

const shimmer = (w, h, isLight) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="${isLight ? '#352e44' : '#efedf0'}" offset="20%" />
          <stop stop-color="${isLight ? '#1f1b2d' : '#d8d7da'}" offset="50%" />
          <stop stop-color="${isLight ? '#352e44' : '#efedf0'}" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="${isLight ? '#352e44' : '#efedf0'}" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite" />
    </svg>`;


const ImageLoader = (props: IProps) => {
  return (
    <Image
      {...props}
      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(props.width, props.height, props.light))}`}
    />
  )
}

export default ImageLoader
