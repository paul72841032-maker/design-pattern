export interface NotificationPrototype {
    message: string;
    show(): void;
    clone(): NotificationPrototype;
}
