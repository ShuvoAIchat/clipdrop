const form = new FormData()
form.append('prompt', 'shot of vaporwave fashion dog in miami')

fetch('https://clipdrop-api.co/text-to-image/v1', {
  method: 'POST',
  headers: {
    'x-api-key': 945b4b3a92571b59529c2a10f03b0adb6775cc6a6062ab460ccc3d9fdf9b2cfb228cce23fb69b95af291dba14d97f1ec,
  },
  body: form,
})
  .then(response => response.arrayBuffer())
  .then(buffer => {
    // buffer here is a binary representation of the returned image
  })
