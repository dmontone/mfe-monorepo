type MFE = React.FC

declare module 'mfe-remote/*' {
  const Component: MFE
  export default Component
}
