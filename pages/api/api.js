export const genreList = ["애니메이션", "액션", "어드벤처","환타지", "코미디", "드라마", "미스터리", "스릴러"]

export const changeDate = (getDate) => {
  const d = new Date(getDate)
  return `${d.getFullYear()}.${d.getMonth()+1}.${d.getDate()}`
}