import { PageComponent } from "./components/page/page.js";
import { ImageComponent } from "./components/page/item/image.js";
import { VideoComponent } from "./components/page/item/video.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
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

		const video = new VideoComponent(
			"healing music",
			"https://youtu.be/ArQvRDWulns"
		);
		video.attachTo(appRoot, "beforeend");

		const note = new NoteComponent("Hey!", "hello!");
		note.attachTo(appRoot, "beforeend");

		const todo = new TodoComponent("Todo", "netflix");
		todo.attachTo(appRoot, "beforeend");
	}
}

new App(document.querySelector(".document")! as HTMLElement);
