const img = document.getElementById('imgDiv')
const imgbtn = document.getElementById('btnImg')
const secbtn = document.getElementById('sec')
const sechero = document.querySelector('#input-area')
const stats = document.getElementById('stats')
const urll = 'https://www.superheroapi.com/api.php/3132488430414691'

const getDetail = (details) => {
  const detail = Object.keys(details.powerstats).map(stats => {
    return `<p>${stats.toUpperCase()} : ${details.powerstats[stats]}</p>`
  })
  console.log(detail.join())
  return detail.join('')
}

const searchHero = (urll) => {
  fetch(`${urll}/search/${sechero.value}`)
  .then(response => response.json())
  .then(json => {
    console.log(json)
    let take = getDetail(json.results[0])
    img.innerHTML = `<h2>${json.results[0].name}</h2><img src='${json.results[0].image.url}' width=300 height=300/>${take}`
})
  sechero.value = ''
}

const getimage = (urll) => {
  let rand = Math.floor(Math.random() * 732)
  fetch(`${urll}/${rand}`)
  .then(response => response.json())
  .then(json => {
    console.log(json.powerstats)
    let take = getDetail(json)
    img.innerHTML = `<h2>${json.name}</h2><img src='${json.image.url}'width=300 height=300/> ${take}`
  })
}

getimage(urll)
imgbtn.onclick = () => getimage(urll)
secbtn.onclick = () => searchHero(urll)