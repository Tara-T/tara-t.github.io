const installer = require('electron-installer-debian')

const options = {
  src: './build/deb/tara-t.github.io-linux-x64/',
  dest: './dist/debInstaller/',
  arch: 'amd64',
  name: 'Tara-T App',
  productName: 'Tara-T App',
  description: "Tara's website, now an app!",
  icon: './media/frisk_512.png'
}

async function main (options) {
  console.log('Creating package (this may take a while)')
  try {
    await installer(options)
    console.log(`Successfully created package at ${options.dest}`)
  } catch (err) {
    console.error(err, err.stack)
    process.exit(1)
  }
}
main(options)
