import path from 'node:path'
import pug from 'pug'

export default function pugPlugin({ entry, locals = {} }) {
  const entryPath = path.resolve(entry)
  const basedir = path.dirname(entryPath)

  return {
    name: 'sveak:pug',

    transformIndexHtml: {
      order: 'pre',
      handler() {
        return pug.renderFile(entryPath, { basedir, ...locals })
      }
    },

    handleHotUpdate({ file, server }) {
      if (path.extname(file) !== '.pug') return
      ;(server.hot ?? server.ws).send({ type: 'full-reload', path: '*' })
      return []
    }
  }
}
