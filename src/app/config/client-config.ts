import { Component, Type } from '@angular/core';

export interface Tool {
  type: Type<Component>;
  tooltip?: string;
}

export interface MenuItem {
  title: string;
  type: Type<Component>;
}

export interface ClientConfig {
  id: string;
  tools: Tool[];
  components: MenuItem[];
}