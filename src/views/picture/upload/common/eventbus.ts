import mitt from 'mitt';

interface EventBus {
  on(event: string, handler: (data: any) => void): void;
  emit(event: string, data: any): void;
}

interface MessageData {
  title?: string;
  content: string;
  type?: MessageType;
}

export type MessageType = 'info' | 'error' | 'warn' | 'success' | 'toast';

export const eventBus: EventBus = new (mitt as any)();
export const message = (data: MessageData) => {
  eventBus.emit('message', data);
};
