import * as Velvet from 'ad-velvet'
import { Styles, Markup, Align, Effects } from 'ad-view'


export class Animation {
	static start() {
		console.log('Animation.start()')
		// show the main container
		global.removePreloader()
		Styles.setCss(View.main, { opacity: 1 })

Velvet.capture.adStart().then(() => {
	// do all animtion starting here

	// call after animation
	Animation.complete()
})

		TweenLite.from(View.main.logoContainer, 1, { y:-40 })
		TweenLite.from(View.main.txtGreeting, 1, { y:330 })


	}

	// IMPORTANT!!! Call this function when your animation is complete!
	static complete() {
		console.log('Animation.complete()')
		Velvet.capture.adComplete()

	}


}
