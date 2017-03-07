import { Component, Type } from '@angular/core';
export interface Layer {
  type: string;
  url: string;
  attributions: string[];
  sublayers: string[];
  format: string;
  opacity: number;
}

export interface MapConfig {
  id: string;
  extent: number[];
  resolutions: number[];
  center: [number, number];
  crs: any;
  layers: Layer[];
  tools: Tool[];
  components: MenuItem[];
}

export interface Tool {
  id: string;
  name: string;
  icon: string;
  tooltip: string;
}

export interface MenuItem {
  title: string;
  type: string;
}
