function startResizeUI(size, query) {
  var startElement =document.querySelectorAll(query)
  setSize()

  window.addEventListener('resize', () => setSize())

  function setSize() {
    var FontSize = document.documentElement.offsetWidth * (size / 1440)
    for (let item of startElement) {
      item.style.fontSize = FontSize + 'px'
    }
  }
}

function init() {
  startResizeUI(30, '#start')
  startResizeUI(60, '#title h1')
}

init()