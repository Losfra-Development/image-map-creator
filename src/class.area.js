import { between, round } from "./utils";
import { Coord } from "./class.coord";
import p5 from "p5";

export class Area {
	/**
	 * @param {string} shape the type of area
	 * @param {Coord[]} coords the list of coordinates
	 * @param {string} href the link this area is going to point to
	 * @param {int} id the unique id
	 */
	constructor(shape, coords = [], href, title, id = 0) {
		this.setShape(shape);
		this.setCoords(coords);
		this.setTitle(href);
		this.setTitle(title);
		this.setId(id);
	}

	static fromObject(o) {
		switch (o.shape) {
			case 'rect':
				return new AreaRect(o.coords.map(Coord.fromObject), o.href, o.title, o.id);
			case 'circle':
				return new AreaCircle(o.coords.map(Coord.fromObject), o.radius, o.href, o.title, o.id);
			case 'poly':
				return new AreaPoly(o.coords.map(Coord.fromObject), o.href, o.title, o.id);
			case 'default':
				return new AreaDefault(o.href, o.title);
			default:
				throw 'Not an area'
		}
	}

	setShape(shape) {
		this.shape = shape;
	}

	/**
	 * Adds a coordinate to the coords array, and returns it's new length
	 * @param {number} x the x val of the coordinate
	 * @param {number} y the y val of the coordinate
	 */
	addCoord(x, y) {
		return this.coords.push(new Coord(x, y));
	}

	/**
	 * @param {Coord[]} coords 
	 */
	setCoords(coords) {
		this.coords = coords;
	}

	getCoords(mode = "default") {
		switch (mode) {
			case "default":
			default:
				return this.coords.slice();
		}
	}

	isEmpty() {
		return this.coords.length == 0;
	}

	copyCoords() {
		let copy = [];
		this.coords.forEach((val, index) => {
			copy[index] = new Coord(val.x, val.y);
		});
		return copy;
	}

	updateLastCoord(x, y) {
		this.coords[this.coords.length - 1] = new Coord(x, y);
	}

	move(coord) {
		let fcoord = this.firstCoord();
		if (coord != undefined) {
			fcoord.add(coord);
		}
	}

	isDrawable() {
		return this.coords.length >= 1;
	}

	isValidShape() {
		return this.isDrawable();
	}

	/**
	 * @param {Coord} coord 
	 */
	isHover(coord) {
		return false;
	}

	/**
	 * @param {Coord} coord 
	 * @param {number} tolerance
	 * @returns {Coord|false}
	 */
	isHoverPoint(coord, tolerance) {
		let point = this.coords.find(c => {
			return Coord.dist(coord, c) < tolerance;
		});
		return point ? point : false;
	}

	setHref(url) {
		this.href = url;
	}

	setTitle(title) {
		this.title = title;
	}

	setId(id) {
		this.id = id;
	}

	firstCoord() {
		return this.coords[0];
	}

	htmlCoords(dec) {
		return this.getCoords("html").map(c => {
			return c.toHtml(dec);
		}).join(',');
	}

	toHtml() {
		let htmlCoords = this.htmlCoords(0);
		let title = "";
		if (htmlCoords != "") {
			htmlCoords = `coords="${htmlCoords}"`;
		}
		if (this.title) {
			title = `title="${this.title}"`;
		}
		return `<area shape="${this.shape}" ${htmlCoords} href="${this.href}" alt="${this.href}" ${title} />`;
	}

	svgArea() { }

	toSvg() {
		return `<a xlink:href="${this.href}">${this.svgArea()}</a>`;
	}
}

export class AreaRect extends Area {
	/**
	 * @param {Coord[]} coords the list of coordinates
	 * @param {string} href the link this area is going to point to
	 * @param {int} id the unique id
	 */
	constructor(coords = [], href, title, id) {
		super("rect", coords, href, title, id);
	}

	setCoords(coords) {
		super.setCoords(coords.slice(0, 2));
	}

	updateLastCoord(x, y) {
		if (this.coords.length == 2) {
			let fCoord = this.firstCoord();
			this.coords[1] = new Coord(x - fCoord.x, y - fCoord.y);
		}
	}

	isDrawable() {
		return this.coords.length == 2 && !this.coords[1].oneIsEmpty();
	}

	/**
	 * @param {Coord} coord 
	 */
	isHover(coord) {
		let fCoord = this.firstCoord();
		let lCoord = this.coords[1].sum(fCoord);
		return between(coord.x, fCoord.x, lCoord.x) && between(coord.y, fCoord.y, lCoord.y);
	}

	/**
	 * draw the area to the given p5 instance
	 * @param {p5} p5 
	 */
	display(p5) {
		p5.rect(this.coords[0].x, this.coords[0].y, this.coords[1].x, this.coords[1].y);
	}

	getCoords(mode = "default") {
		switch (mode) {
			case "html":
				let coords = this.copyCoords();
				coords[1] = coords[1].sum(coords[0]);
				if (coords[0].x > coords[1].x) Coord.swap(coords[0], coords[1], "x")
				if (coords[0].y > coords[1].y) Coord.swap(coords[0], coords[1], "y")
				return coords;
			default:
				return super.getCoords(mode);
		}
	}

	svgArea() {
		let x = this.coords[0].toString(0, 'x');
		let y = this.coords[0].toString(0, 'y');
		let w = this.coords[1].toString(0, 'x');
		let h = this.coords[1].toString(0, 'y');
		return `<rect x="${x}" y="${y}" width="${w}" height="${h}" />`;
	}
}

export class AreaCircle extends Area {
	/**
	 * @param {Coord[]} coords the list of coordinates
	 * @param {number} radius radius of the circle
	 * @param {string} href the link this area is going to point to
	 * @param {int} id the unique id
	 */
	constructor(coords = [], radius = 0, href, title, id) {
		super("circle", coords, href, title, id);
		this.radius = radius;
	}

	getCenter() {
		return this.firstCoord();
	}

	isValidShape() {
		return super.isValidShape() && this.radius > 0;
	}

	/**
	 * @param {Coord} coord 
	 */
	isHover(coord) {
		let center = this.getCenter();
		return Coord.dist(coord, center) < this.radius;
	}

	updateLastCoord(x, y) {
		let center = this.getCenter();
		this.radius = Coord.dist(center, new Coord(x, y));
	}

	/**
	 * draw the area to the given p5 instance
	 * @param {p5} p5 
	 */
	display(p5) {
		p5.ellipse(this.getCenter().x, this.getCenter().y, this.radius * 2);
	}

	htmlCoords(dec) {
		return this.getCenter().toHtml(dec) + "," + round(this.radius, dec);
	}

	svgArea() {
		let x = this.coords[0].toString(0, 'x');
		let y = this.coords[0].toString(0, 'y');
		let r = round(this.radius, 0);
		return `<circle cx="${x}" cy="${y}" r="${r}" />`;
	}
}
export class AreaPoly extends Area {
	/**
	 * @param {Coord[]} coords the list of coordinates
	 * @param {string} href the link this area is going to point to
	 * @param {int} id the unique id
	 */
	constructor(coords = [], href, title, id, closed = false) {
		super("poly", coords, href, title, id);
		this.closed = closed;
	}

	isDrawable() {
		return this.coords.length >= 2;
	}

	isValidShape() {
		return super.isValidShape() && this.closed;
	}

	/**
	 * @param {Coord} coord 
	 */
	isHover(coord) {
		let x = coord.x;
		let y = coord.y;
		let cornersX = this.coords.map(c => { return c.x });
		let cornersY = this.coords.map(c => { return c.y });

		let i, j = cornersX.length - 1;
		let oddNodes = false;

		let polyX = cornersX;
		let polyY = cornersY;

		for (i = 0; i < cornersX.length; i++) {
			if ((polyY[i] < y && polyY[j] >= y || polyY[j] < y && polyY[i] >= y) && (polyX[i] <= x || polyX[j] <= x)) {
				oddNodes ^= (polyX[i] + (y - polyY[i]) / (polyY[j] - polyY[i]) * (polyX[j] - polyX[i]) < x);
			}
			j = i;
		}

		return oddNodes;
	}

	isClosable(coord, tolerance) {
		let dist = Coord.dist(coord, this.firstCoord());
		return this.coords.length >= 4 && dist < tolerance;
	}

	getCoords(mode = "default") {
		let coords = super.getCoords();
		switch (mode) {
			case "default":
			default:
				if (this.closed) {
					coords.push(this.firstCoord());
				}
				return coords;
		}
	}

	close() {
		this.closed = true;
		this.coords.pop();
	}

	move(coord) {
		this.coords.map(c => c.add(coord));
	}

	/**
	 * draw the area to the given p5 instance
	 * @param {p5} p5 
	 */
	display(p5) {
		p5.beginShape();
		this.getCoords().forEach(c => p5.vertex(c.x, c.y));
		p5.endShape();
	}

	svgArea() {
		let points = this.getCoords().map(c => {
			return c.toString(0, 'x') + ',' + c.toString(0, 'y');
		}).join(' ');
		return `<polygon points="${points}" />`;
	}
}

export class AreaDefault extends Area {
	/**
	 * Constructor
	 * @param {string} href the link this area is going to point to
	 */
	constructor(href, title) {
		super("default", [], href, title);
		this.isDefault = true;
	}

	isDrawable() {
		return true;
	}

	isHover() {
		return true;
	}

	/**
	 * draw the area to the given p5 instance
	 * @param {p5} p5 
	 */
	display(p5) {
		p5.rect(0, 0, p5.getMap().width - 1, p5.getMap().height - 1);
	}

	svgArea() {
		return '<rect x="0" y="0" width="100%" height="100%" />';
	}
}