import { DmEvent, DmEventType } from './event';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class EventManagerService {

  private eventListeners: Map<DmEventType,EventEmitter<DmEvent>>;

  constructor() {
    this.eventListeners = new Map();
  }

  subscribe<T extends DmEvent>(eventType: { new(): T }, callback: (payload: T) => void): any {
    let eventTypeKey = new eventType().type;

    let eventListener = this.eventListeners.get(eventTypeKey);
    if (!eventListener) {
      eventListener = new EventEmitter<DmEvent>();
      this.eventListeners.set(eventTypeKey, eventListener);
    }

    return eventListener.subscribe(callback);
  }

  publish(payload: DmEvent): void {
    let eventListener = this.eventListeners.get(payload.type);

    if (!eventListener) {
      console.warn(`No listeners for event ${DmEventType[payload.type]}`);
      return;
    }

    eventListener.emit(payload);
  }
}
