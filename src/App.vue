<template>
  <div class="p-4 space-y-2">
    <button @click="testPrototype" class="p-2 bg-blue-500 text-white rounded">Prototype</button>
    <button @click="testProxy" class="p-2 bg-purple-500 text-white rounded">Proxy</button>
    <button @click="testCommand" class="p-2 bg-green-500 text-white rounded">Command</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Prototype
import { ConcreteNotification } from "./patterns/prototype/ConcreteNotification";

// Proxy
import { NotificationProxy } from "./patterns/proxy/NotificationProxy";

// Command
import { ShowNotificationCommand } from "./patterns/command/ShowNotificationCommand";
import { Invoker } from "./patterns/command/Invoker";

export default defineComponent({
  name: "App",
  setup() {
    // Prototype 테스트
    const testPrototype = () => {
      const original = new ConcreteNotification("Original message");
      const copy = original.clone();
      original.show();
      copy.show();
    };

    // Proxy 테스트
    const testProxy = () => {
      const proxy = new NotificationProxy("Proxy message");
      proxy.show();
    };

    // Command 테스트
    const testCommand = () => {
      const invoker = new Invoker();
      invoker.addCommand(new ShowNotificationCommand("Command 1"));
      invoker.addCommand(new ShowNotificationCommand("Command 2"));
      invoker.run();
    };

    return { testPrototype, testProxy, testCommand };
  },
});
</script>

<style scoped>
button {
  cursor: pointer;
}
</style>
