import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HeaderV2Wrapper } from './style'

interface IProps {
  children?: ReactNode
  title?: string
  moreText?: string
  moreLink?: string
}

const AreaHeaderV2: FC<IProps> = (props) => {
  const { title = '默认标题', moreText = '查看全部', moreLink } = props

  return (
    <HeaderV2Wrapper>
      {/* <h3 className="title">
        <span>入驻歌手</span>
        <a href="#/discover/artist">查看全部 &gt;</a>
      </h3> */}
      <h3 className="title">{title}</h3>
      {moreText && moreLink && <a href={moreLink}>{moreText}</a>}
    </HeaderV2Wrapper>
  )
}

export default memo(AreaHeaderV2)
