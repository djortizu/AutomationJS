const { I } = inject();

module.exports = {

  elements: {
    title: '//h1[contains(.,"Welcome")]',
    heading: '//p[@class="lead"]',
    homeButton: '#home',
    formButton: '#form',
    errorButton: '//a[text()="Error"]',
    siteButton: '#site',
    dhlogo: '#dh_logo'
  }
}
