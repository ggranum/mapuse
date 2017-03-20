import { SearchResult } from '../tools/search/search-result';
export enum DmEventType {
  SEARCH,
  OTHER,
}

export class DmSearchEvent {
  type: DmEventType.SEARCH;
  searchResult: SearchResult;
  constructor() {
    this.type = DmEventType.SEARCH;
  }
}

export class DmOtherEvent {
  type: DmEventType.OTHER;
  z: number;
  constructor() {
    this.type = DmEventType.OTHER;
  }
}

export type DmEvent = DmSearchEvent | DmOtherEvent;
