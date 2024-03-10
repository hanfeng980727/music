import { shallowEqualApp, useAppSelector } from '@/store'
import { memo, useRef, useState } from 'react'
import React from 'react'
import type { FC, ReactNode, ElementRef } from 'react'
import { Carousel } from 'antd'
import classNames from 'classnames'
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
  /** 定义内部的数据 */
  const [currentIndex, setCurrentIndex] = useState(0)
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  //bannerRef.current ref是有类型的,undefined不能绑定
  //ElementRef<泛型<泛型>>
  //初始化为null

  /** 从store中获取数据 */
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqualApp
  )

  /** 事件处理函数 */
  function handleBeforeChange(from: number) {
    setTimeout(() => {
      setCurrentIndex(from)
    }, 0)
  }

  function handleAfterChange(current: number) {
    //console.log(current)
    setCurrentIndex(current)
  }

  function handlePrevClick() {
    bannerRef.current?.prev()
  }

  function handleNextClick() {
    bannerRef.current?.next()
  }

  /** 获取背景图片 */
  let bgImageUrl = banners[currentIndex]?.imageUrl
  // 第一次刷新页面获取不到
  if (bgImageUrl) {
    bgImageUrl = bgImageUrl + '?imageView&blur=40x20'
  }

  return (
    // 设置淡出效果 alpha 1.0->0.0->1.0...
    <BannerWrapper
      style={{ background: `url('${bgImageUrl}') center center / 6000px` }}
    >
      {/* <div>
        {banners.map((item) => {
          return <div key={item.imageUrl}>{item.imageUrl}</div>
        })}
      </div> */}
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            autoplay
            dots={false}
            autoplaySpeed={3000}
            ref={bannerRef}
            effect="fade"
            beforeChange={handleBeforeChange}
            afterChange={handleAfterChange}
          >
            {banners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              )
            })}
          </Carousel>
          <ul className="dots">
            {banners.map((item, index) => {
              return (
                <li key={item.imageUrl}>
                  <span
                    className={classNames('item', {
                      active: index === currentIndex
                    })}
                  ></span>
                </li>
              )
            })}
          </ul>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={handlePrevClick}></button>
          <button className="btn right" onClick={handleNextClick}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
