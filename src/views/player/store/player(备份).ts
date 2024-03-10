import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getSongDetail, getSongLyric } from '../service/player'
import { ILyric, parseLyric } from '@/utils/parse-lyric'

export const fetchCurrentSongAction = createAsyncThunk(
  'currentSong',
  (id: number, { dispatch }) => {
    // 1.获取歌曲信息
    getSongDetail(id).then((res: any) => {
      //console.log(res)
      // 1.获取song
      if (!res.songs.length) return
      const song = res.songs[0]

      // 2.将song放到currentSong中
      dispatch(changeCurrentSongAction(song))
    })

    // 2. 获取歌词数据
    getSongLyric(id).then((res) => {
      // console.log(res)
      // 1.获取歌词的字符串
      const lyricString = res.lrc.lyric

      // 2.对歌词进行解析(一个个对象)
      const lyrics = parseLyric(lyricString)
      // console.log(lyrics)

      // 3.将歌词放入到state中
      dispatch(changeLyricsAction(lyrics))
    })
  }
)

interface IPlayerState {
  currentSong: any
  lyrics: ILyric[]
  lyricIndex: number
  playSongList: any[]
  playSongIndex: number
}

const initialState: IPlayerState = {
  currentSong: {},
  lyrics: [],
  lyricIndex: -1,
  playSongList: [
    {
      name: 'CHINA-芽',
      id: 2131298702,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 1142042,
          name: '徐梦圆',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 0,
      v: 2,
      crbt: null,
      cf: '',
      al: {
        id: 187488318,
        name: 'CHINA-芽',
        picUrl:
          'https://p1.music.126.net/bI4p6dIyLhFEKN4755qEoQ==/109951169377306776.jpg',
        tns: [],
        pic_str: '109951169377306776',
        pic: 109951169377306780
      },
      dt: 220423,
      h: {
        br: 320000,
        fid: 0,
        size: 8820027,
        vd: -9650,
        sr: 44100
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5292034,
        vd: -7012,
        sr: 44100
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3528037,
        vd: -5221,
        sr: 44100
      },
      sq: {
        br: 621920,
        fid: 0,
        size: 17135714,
        vd: -10428,
        sr: 44100
      },
      hr: null,
      a: null,
      cd: '01',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 131200,
      originCoverType: 0,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 2,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 0,
      publishTime: 0
    },
    {
      name: '鼓楼',
      id: 447926067,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 6731,
          name: '赵雷',
          tns: [],
          alias: []
        }
      ],
      alia: ['The Drum Tower'],
      pop: 100,
      st: 0,
      rt: null,
      fee: 8,
      v: 54,
      crbt: null,
      cf: '',
      al: {
        id: 35069014,
        name: '无法长大',
        picUrl:
          'https://p1.music.126.net/-noYXenVuiTrlcxrCqNPjQ==/109951169213362679.jpg',
        tns: [],
        pic_str: '109951169213362679',
        pic: 109951169213362670
      },
      dt: 281002,
      h: {
        br: 320001,
        fid: 0,
        size: 11243146,
        vd: -38077,
        sr: 44100
      },
      m: {
        br: 192001,
        fid: 0,
        size: 6745905,
        vd: -35420,
        sr: 44100
      },
      l: {
        br: 128001,
        fid: 0,
        size: 4497284,
        vd: -33615,
        sr: 44100
      },
      sq: {
        br: 923481,
        fid: 0,
        size: 32437614,
        vd: -38187,
        sr: 44100
      },
      hr: null,
      a: null,
      cd: '1',
      no: 4,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 2,
      s_id: 0,
      mark: 17179877376,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 54,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 22036,
      publishTime: 1482249600007
    }
  ],
  playSongIndex: -1
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    },
    changeLyricsAction(state, { payload }) {
      state.lyrics = payload
    },
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload
    }
  }
})

export const {
  changeCurrentSongAction,
  changeLyricsAction,
  changeLyricIndexAction
} = playerSlice.actions

export default playerSlice.reducer
