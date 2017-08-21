/// <reference types="react" />

declare module 'zent/lib/copy-button' {
  interface ICopyButtonProps {
    text: string
    onCopySuccess?: Function | string
    onCopyError?: Function | string
  }

  export class CopyButton extends React.Component<ICopyButtonProps, any> {}
}
