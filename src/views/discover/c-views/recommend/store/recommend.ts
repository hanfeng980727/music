import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getArtistList,
  getBanners,
  getHotRecommend,
  getNewAlbum,
  getPlaylistDetail
} from '../service/recommend'

// 在没有参数的情况下
export const fetchRecommendDataAction = createAsyncThunk(
  'fetchdata',
  (_, { dispatch }) => {
    // 1.获取轮播图数据
    getBanners().then((res) => {
      dispatch(changeBannersAction(res.banners))
    })
    getHotRecommend(8).then((res) => {
      dispatch(changeHotRecommendAction(res.result))
    })
    getNewAlbum().then((res) => {
      dispatch(changeNewAlbumAction(res.albums))
    })
    getArtistList(5).then((res) => {
      // console.log(res)
      dispatch(changeSettleSingerAction(res.artists))
    })
  }
)

const rankingIds = [19723756, 3779629, 2884035]
// 飙升榜 19723756  新歌榜  3779629   原创榜  2884035
export const fetchRankingDataAction = createAsyncThunk(
  'rankingData',
  (_, { dispatch }) => {
    // 获取榜单的数据

    // 1.每一个请求单独处理
    // for (const id of rankingIds) {
    //   getPlaylistDetail(id).then((res: any) => {
    //     switch (id) {
    //       case 19723756:
    //         console.log('飙升榜', res)
    //         break
    //       case 3779629:
    //         console.log('新歌榜', res)
    //         break
    //       case 2884035:
    //         console.log('原创榜', res)
    //         break
    //     }
    // })
    // }

    // 2. 将三个结果都拿到,统一放到一个数组中管理
    // 保障一: 获取到所有的结果后, 进行dispatch操作
    // 保障二: 获取到的结果一定是有正确的顺序
    const promises: Promise<any>[] = []
    for (const id of rankingIds) {
      promises.push(getPlaylistDetail(id))
    }

    Promise.all(promises).then((res) => {
      // console.log(res)
      // const playlists = res.map((item) => item.playlist)   // 服务器有时候不返回数据
      const playlists = res
        .filter((item) => item.playlist)
        .map((item) => item.playlist)
      dispatch(changeRankingsAction(playlists))
    })
  }
)

interface IRecommendState {
  banners: any[]
  hotRecommends: any[]
  newAlbum: any[]

  rankings: any[]
  // upRanking: any
  // newRanking: any
  // originRanking: any

  settleSingers: any[]
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbum: [],

  rankings: [],
  // upRanking: {},
  // newRanking: {},
  // originRanking: {}

  settleSingers: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    },

    changeHotRecommendAction(state, { payload }) {
      state.hotRecommends = payload
    },

    changeNewAlbumAction(state, { payload }) {
      state.newAlbum = payload
    },

    changeRankingsAction(state, { payload }) {
      state.rankings = payload
    },

    changeSettleSingerAction(state, { payload }) {
      state.settleSingers = payload
    }
  }
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchBannerDataAction.pending, () => {
  //       console.log('pending')
  //     })
  //     .addCase(fetchBannerDataAction.fulfilled, (state, { payload }) => {
  //       state.banners = payload
  //     })
  //     .addCase(fetchBannerDataAction.rejected, () => {
  //       console.log('rejected')
  //     })
  // }
})

export const {
  changeBannersAction,
  changeHotRecommendAction,
  changeNewAlbumAction,
  changeRankingsAction,
  changeSettleSingerAction
} = recommendSlice.actions
export default recommendSlice.reducer
