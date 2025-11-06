import { Command } from "./Command";

export class ShowNotificationCommand implements Command {
    constructor(private message: string) {}

    execute(): void {
        alert(`Command Notification: ${this.message}`);
    }
}
