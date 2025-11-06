import { Command } from "./Command";

export class Invoker {
    private commands: Command[] = [];

    addCommand(cmd: Command) {
        this.commands.push(cmd);
    }

    run(): void {
        this.commands.forEach(cmd => cmd.execute());
    }
}
