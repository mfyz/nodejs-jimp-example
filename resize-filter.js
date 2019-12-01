const jimp = require('jimp')

const inputFile = './source/world.png'
const outputFile = './output/world-small-bw.jpg'

jimp.read(inputFile)
	.then((src) => {
		src
			.scaleToFit(300, 300)
			.brightness(0.2)
			.sepia()
			.quality(60)
			.writeAsync(outputFile)
			.then(() => {
				console.log(`Done! Check ${outputFile}`)
			})
	})
	.catch((err) => {
		console.log('Error', err);
	})
