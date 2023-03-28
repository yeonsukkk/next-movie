export const genreList = ["애니메이션", "액션", "어드벤처","환타지", "코미디", "드라마", "미스터리", "스릴러"]

export const changeDate = (getDate) => {
  const d = new Date(getDate)
  return `${d.getFullYear()}.${d.getMonth()+1}.${d.getDate()}`
}

export const dday = (getDate) => {
  const now = new Date().getTime()
  if(now - getDate >= 0){
    return `상영중`
  }else {
    const diff = getDate - now
    const diffDay = Math.ceil(diff / (1000 * 60 * 60 * 24))
    return `D-${diffDay}`
  }
}