import { Component, Type } from '@angular/core';

export interface Layer {
  type: string;             // Current set to 'WMS'
  urls: string[];           // URLs of the 'WMS'
  version: string;          // WMS version (e.g. 1.1.1, OpenLayers defaults to 1.3.0)
  product: string;          // Mapproxy product identifier
  sublayers: string[];      // List of sublayer names
  extent: number[];         // Layer extent (formally called bounds in OpenLayers 2)
  attributions: string[];   // Layer copyright information
  format: string;           // Format passed to the WMS, e.g. image/png
  resolutions: number[];    // Resolutions this layer should be used at
  opacity: number;
}

export interface Crs {
  code: string;
}

export interface MapConfig {
  id: string;
  extent: number[];
  resolutions: number[];
  center: [number, number];
  crs: Crs;
  layers: Layer[];
}

export interface ClientConfig {
  id: string;
  tools: Tool[];
  components: MenuItem[];
}

export interface Tool {
  type: Type<Component>;
  tooltip?: string;
}

export interface MenuItem {
  title: string;
  type: Type<Component>;
}
