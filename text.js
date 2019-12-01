const jimp = require('jimp')

const outputFile = './output/text.jpg'

let font = null
jimp.loadFont(jimp.FONT_SANS_32_BLACK)
	.then((loadedFont) => {
		font = loadedFont
		return jimp.read(500, 500, 0xeeeeeeff)
	})
	.then((src) => {
		src
			.print(font, 10, 10, 'Hello World!')
			.writeAsync(outputFile)
			.then(() => {
				console.log(`Done! Check ${outputFile}`)
			})
	})
	.catch((err) => {
		console.log('Error', err);
	})
