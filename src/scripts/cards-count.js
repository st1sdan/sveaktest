const grid = document.querySelector('.cards')
const control = document.querySelector('.count')
const range = document.querySelector('.count__range')
const counter = document.querySelector('.count__value')
const hint = document.querySelector('.count__hint')

const isVisible = (card) => getComputedStyle(card).display !== 'none'

if (grid && control && range && counter && hint) {
  const detached = []

  const detachTo = (total) => {
    while (grid.children.length > total) {
      detached.push(grid.removeChild(grid.lastElementChild))
    }
  }

  const attachTo = (total) => {
    while (grid.children.length < total && detached.length) {
      const card = detached.pop()
      card.style.setProperty('--i', 0)
      grid.appendChild(card)
    }
  }

  const render = () => {
    const total = Number(range.value)

    detachTo(total)
    attachTo(total)

    const shown = [...grid.children].filter(isVisible).length
    const trimmed = total - shown

    counter.textContent = total
    hint.textContent = trimmed
      ? `видно ${shown}, скрыт неполный ряд из ${trimmed}`
      : 'все ряды заполнены полностью'
  }

  control.hidden = false
  range.addEventListener('input', render)
  window.addEventListener('resize', render)
  render()
}
