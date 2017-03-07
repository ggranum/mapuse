import { Coordinate } from 'ol';

export interface SearchResult {
  name: string;
  zoomLevel: number;
  point: Coordinate;
}
