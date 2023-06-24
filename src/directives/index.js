const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      const el = entry.target
      el.src = el.dataset['src']
      observer.unobserve(el)
    }
  })
})
export const lazyloadPlugin = {
  install(app, config) {
    app.directive('lazy', {
      mounted(el, bindings) {
        const src = bindings.value
        // const src = el.src
        el.setAttribute('data-src', src)
        // console.log({el}, src);
        // el.src = defaultImg
        observer.observe(el)
      }
    })
  }
}