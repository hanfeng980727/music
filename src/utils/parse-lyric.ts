export interface ILyric {
  time: number
  text: string
}

// [00:25.189]是的我看见到处是阳光
const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/

export function parseLyric(lyricString: string) {
  // 1.拿到一行行的歌词
  const lines: string[] = lyricString.split('\n')

  // 2.对每句歌词进行解析,解析成对应的对象
  const lyrics: ILyric[] = []
  for (const line of lines) {
    // 匹配结果
    const result = timeRegExp.exec(line)
    // console.log(result)
    if (!result) continue

    // 2.获取每一组的时间
    const time1 = Number(result[1]) * 60 * 1000
    const time2 = Number(result[2]) * 1000
    const time3 =
      result[3].length === 3 ? Number(result[3]) : Number(result[3]) * 10
    const time = time1 + time2 + time3

    // 3. 获取每一组的文本
    // 将正则替换成空字符串,剩下的就是文本
    const text = line.replace(timeRegExp, '')

    lyrics.push({ time, text })
  }

  return lyrics
}
