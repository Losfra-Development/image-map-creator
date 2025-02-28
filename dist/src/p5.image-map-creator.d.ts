import { ImageMap } from "./class.image-map";
import { BgLayer } from "./p5.bg-layer";
import { Area, AreaEmpty } from "./class.area";
import { Coord } from "./class.coord";
import { Selection } from "./class.selection";
import "../lib/contextmenu/contextmenu.css";
import p5 = require("p5");
export declare type Tool = "Polygon" | "Rectangle" | "Circle" | "Select" | "Delete" | "Test an area";
export declare type Image = {
    data: p5.Image | null;
    file: p5.File | null;
};
export declare type ToolLabel = {
    key: string;
    value: Tool;
};
export declare type View = {
    scale: number;
    transX: number;
    transY: number;
};
export declare type Zoom = {
    min: number;
    max: number;
    sensativity: number;
};
export declare class Save {
    version: string;
    map: ImageMap;
    constructor(version: string, map: ImageMap);
}
/**
 */
export declare class imageMapCreator {
    protected width: number;
    protected height: number;
    protected tool: Tool;
    protected drawingTools: Tool[];
    protected settings: any;
    protected menu: {
        SetUrl: {
            onSelect: (target: Element, key: any, item: HTMLElement, area: Area) => void;
            label: string;
        };
        SetTitle: {
            onSelect: (target: Element, key: any, item: HTMLElement, area: Area) => void;
            label: string;
        };
        Delete: (target: Element, key: any, item: HTMLElement, area: Area) => void;
        MoveFront: {
            onSelect: (target: Element, key: any, item: HTMLElement, area: Area) => void;
            enabled: boolean;
            label: string;
        };
        MoveBack: {
            onSelect: (target: Element, key: any, item: HTMLElement, area: Area) => void;
            enabled: boolean;
            label: string;
        };
    };
    protected tempArea: AreaEmpty;
    protected selection: Selection;
    protected hoveredArea: Area | null;
    protected hoveredPoint: Coord | null;
    map: ImageMap;
    protected undoManager: any;
    protected img: Image;
    view: View;
    protected zoomParams: Zoom;
    protected magnetism: boolean;
    protected fusion: boolean;
    protected tolerance: number;
    protected bgLayer: BgLayer;
    p5: p5;
    /**
     * Constructor
     * @param {string} elementId id of the html container
     * @param {number} width
     * @param {number} height
     */
    constructor(elementId: string, width?: number, height?: number);
    /**
     * Override p5 methods
     * @param {p5} p5
     */
    private sketch;
    private setup;
    private draw;
    private mousePressed;
    private mouseDragged;
    private mouseReleased;
    private mouseWheel;
    private keyPressed;
    trueX(coord: number): number;
    trueY(coord: number): number;
    mX(): number;
    mY(): number;
    /**
     * Get the true coordinate of the mouse relative to the imageMap
     */
    mCoord(): Coord;
    /**
     * Get the coordinate of the mouse for drawing
     */
    drawingCoord(): Coord;
    mouseIsHoverSketch(): boolean;
    /**
     * Sets hoveredPoint and hoveredArea excluding currently selected Areas
     */
    updateHovered(): void;
    onClick(event: MouseEvent): void;
    onOver(evt: MouseEvent): void;
    onLeave(): void;
    handeFile(file: p5.File): void;
    resetView(img: p5.Image): void;
    zoom(coef: number): void;
    drawImage(): void;
    drawAreas(): void;
    setTool(value: Tool): void;
    setCursor(): void;
    setOutput(): void;
    setBackground(): void;
    /**
     * Set the title of the canvas from an area
     */
    setTitle(area: Area | null): void;
    setAreaStyle(area: Area): void;
    setTempArea(coord: Coord): void;
    updateTempArea(): void;
    exportMap(): string;
    save(): void;
    importMap(json: string): void;
    /**
     * Add an area to the imageMap object
     */
    createArea(area: Area): void;
    /**
     * remove an area from the imageMap object
     */
    deleteArea(area: Area): void;
    /**
     * Move an area forward or backward
     */
    moveArea(area: Area, direction: number): void;
    /**
     * Set the url of an area
     */
    setAreaUrl(area: Area): void;
    /**
     * Set the title of an area
     */
    setAreaTitle(area: Area): void;
    setDefaultArea(bool: boolean): void;
    clearAreas(): void;
    reset(): void;
}
