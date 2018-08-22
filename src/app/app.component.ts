import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'carousel';
	public items = [
		{
			imgUrl: '/src/assets/images/1.png',
			current: true
		}, 
		{
			imgUrl: '/src/assets/images/2.png',
			current: false
		}, 
		{
			imgUrl: '/src/assets/images/3.png',
			current: false
		}, 
		{
			imgUrl: '/src/assets/images/4.png',
			current: false
		}, 
		{
			imgUrl: '/src/assets/images/5.png',
			current: false
		}, 
		{
			imgUrl: '/src/assets/images/6.png',
			current: false
		}
	];
	public currentSlide = 0;

	constructor() {
		// this.autoCarousel();
	}

	changeImg(index) {
		this.items.forEach((val) => {
			val.current = false;
		});
		this.currentSlide = index < 0 ? this.items.length - 1  : (index > this.items.length - 1 ? 0 : index) ;
		this.items[this.currentSlide].current = true;
		
	}
	
}