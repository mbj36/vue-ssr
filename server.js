const fs = require('fs')
const express = require('express')
console.log("Mohit")

const { createBundleRenderer } = require('vue-server-renderer')

const bundleRenderer = createBundleRenderer(
    require('./dist/vue-ssr-bundle.json'), {
        template: fs.readFileSync('./index.html', 'utf-8')
    }
)

const app = express()

app.use('/dist', express.static('dist'))

app.get('*', (req, res) => {
    bundleRenderer
        .renderToStream({ url: req.path })
        .pipe(res)
})

app.listen(8000)