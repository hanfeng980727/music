import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  // children?: React.ReactNode
  children?: ReactNode
  name: string
  age: number
  height?: number
}
//const Download: React.FC<IProps> = (props) => {
const Download: FC<IProps> = (props) => {
  return (
    <div>
      <div> name:{props.name}</div>
      <div> name:{props.age}</div>
      <div> name:{props.height}</div>
      <div> name:{props.children}</div>
    </div>
  )
}

// Download.defaultProps = {
//   name: 'www',
//   height: 1.88
// }

// Download.displayName = 'download'

// 直接对props进行约束
// const Download = (props: IProps) => {
//   return (
//     <div>
//       <div> name:{props.name}</div>
//       <div> name:{props.age}</div>
//       <div> name:{props.height}</div>
//     </div>
//   )
// }

export default memo(Download)
