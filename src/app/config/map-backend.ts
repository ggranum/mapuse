
/*
 * Backend map config which matches the current Roam format.
 */

export interface LayerPrintDao {
  cliveProduct: string;
  swd: string;
  scaleRange: { min: number , max: number };
}

export interface LayerMetadataDao {
  productId: string;
  legendName: string;
  themeDisplayName: string;
  mapInfoDisplayName: string[];
  logName: string;
  date: string;
  licence: string;
  copyright: string;
  help: string[];
  print: LayerPrintDao;
}

export interface LayerDao {
  mapproxyProduct: string;
  visibility: boolean;
  resolutions: number[];
  bounds: number[];
  cachedLayers: string[];
  metadata: LayerMetadataDao;
}

export interface PrintingDao {
  printScales: string[];
  paperSizes: string[];
  printFormats: string[];
  printTemplatePrefix: string;
}

export interface OverviewDao {
  mapproxyProduct: string;
  visibility: boolean;
  bounds: number[];
  resolutions: number[];
  copyright: string;
  cachedLayers: string[];
}

export interface MapConfigDao {
  projection: { code: string, displayName: string };
  bounds: number[];
  layers: LayerDao[];
  zoomLevelNamesDescending: string[];
  printing: PrintingDao;
  searchResultResolutions: { [name: string]: number };
  overview: OverviewDao;
}
