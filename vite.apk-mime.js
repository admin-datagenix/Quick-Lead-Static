import fs from 'node:fs'
import path from 'node:path'

const APK_MIME = 'application/vnd.android.package-archive'

function apkMiddleware(rootDir) {
  return (req, res, next) => {
    const urlPath = req.url?.split('?')[0] ?? ''
    if (!urlPath.toLowerCase().endsWith('.apk')) {
      next()
      return
    }

    const rel = decodeURIComponent(urlPath).replace(/^\//, '')
    const filePath = path.join(rootDir, rel)

    if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
      next()
      return
    }

    const filename = path.basename(filePath)
    res.statusCode = 200
    res.setHeader('Content-Type', APK_MIME)
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`)
    res.setHeader('X-Content-Type-Options', 'nosniff')
    fs.createReadStream(filePath).pipe(res)
  }
}

/** Serve .apk with Android MIME so phones do not save as .zip */
export function apkMimePlugin() {
  const publicRoot = path.join(process.cwd(), 'public')
  const distRoot = path.join(process.cwd(), 'dist')

  return {
    name: 'apk-mime-type',
    enforce: 'pre',
    configureServer(server) {
      server.middlewares.use(apkMiddleware(publicRoot))
    },
    configurePreviewServer(server) {
      server.middlewares.use(apkMiddleware(distRoot))
    },
  }
}