import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './c-cpns/nav-bar'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <div>
      {/* <div className="nav">
        <Link to="recommend">推荐</Link>
        <Link to="ranking">排行榜</Link>
        <Link to="songs">歌单</Link>
        <Link to="djradio">主播电台</Link>
        <Link to="artist">歌手</Link>
        <Link to="album">新碟上架</Link>
      </div> */}
      <NavBar />
      <React.Suspense fallback="">
        <Outlet />
      </React.Suspense>
    </div>
  )
}

export default memo(Discover)
