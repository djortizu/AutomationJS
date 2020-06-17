const { I, XMLHttpRequest } = inject();

module.exports = {

  elements: {
    fourOhFour: '//h1'
  },

  responseGetter(url) {
    const http = new XMLHttpRequest()
    http.open("GET", url)
    http.send()
    http.onload = () => console.log(http.responseText)
  },
  
}
