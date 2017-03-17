export enum DmEventType {
  SEARCH,
  OTHER,
}

export interface DmSearchEvent {
  type: DmEventType.SEARCH;
  x: number;
  y: number;
}

export interface DmOtherEvent {
  type: DmEventType.OTHER;
  z: number;
}

export type DmEvent = DmSearchEvent | DmOtherEvent;

export function eventCastingAdapter<T extends DmEvent>(type: DmEventType, event: DmEvent): T {
  if (event.type === type) {
    return event as T;
  }

  throw `Event type ${event.type} does not match requested type ${type}`;
}
