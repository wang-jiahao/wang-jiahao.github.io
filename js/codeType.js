const languageStyle = (str) => {
    /* 单独优化 */
    if (['js', 'javascript'].includes(str)) return 'JavaScript'
    if (['ts', 'typescript'].includes(str)) return 'TypeScript'
    /* 曲线救国(Highlight不支持vue) */
    if (str === 'xml') return 'Vue'
    
    // return str
    /* 全小写风格 */
    return str.toUpperCase()
    /*全大写风格 */
    // return str[0].toUpperCase() + str.substring(1)
    /*首字母大写风格 */
  }
  
  document.querySelectorAll('figure.highlight').forEach((item) => {
    item.setAttribute('data-type', languageStyle(item.getAttribute('class').substring(10)))
  })