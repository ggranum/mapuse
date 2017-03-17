import { DmEvent, DmEventType } from './event';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class EventManagerService {

  private eventListeners: Map<DmEventType,EventEmitter<DmEvent>>;

  constructor() {
    this.eventListeners = new Map();
  }

  subscribe(eventType: DmEventType, callback: (payload: DmEvent) => void): any {
    let eventListener = this.eventListeners.get(eventType);

    if (!eventListener) {
      eventListener = new EventEmitter<DmEvent>();
      this.eventListeners.set(eventType, eventListener);
    }

    return eventListener.subscribe(callback);
  }

  publish(eventType: DmEventType, payload: DmEvent): void {
    let eventListener = this.eventListeners.get(eventType);

    if (!eventListener) {
      console.warn(`No listeners for event ${eventType.toString}`);
      return;
    }

    eventListener.emit(payload);
  }
}
