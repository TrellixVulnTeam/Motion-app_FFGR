import { PageComponent } from "./components/page/page.js";
import { ImageComponent } from "./components/page/item/image.js";
class App {
	private readonly page: PageComponent;
	constructor(appRoot: HTMLElement) {
		this.page = new PageComponent();
		this.page.attachTo(appRoot);

		const image = new ImageComponent(
			"image title",
			"https://picsum.photos/600/300"
		);
		image.attachTo(appRoot, "beforeend");
	}
}

new App(document.querySelector(".document")! as HTMLElement);
