import { JSGameManager } from "./JSGameManager.mjs";
import { JSBallBehaviour } from "./JSBallBehaviour.mjs";
function makeFactory(cls) {
    return function (...args) {
        return new cls(...args);
    };
}
const JSBallBehaviourFactory = makeFactory(JSBallBehaviour);
const JSGameManagerFactory = makeFactory(JSGameManager);
export { JSBallBehaviourFactory as JSBallBehaviour, JSGameManagerFactory as JSGameManager };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnkubWpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vQmFza2V0YmFsbERlbW8vVHlwZXNjcmlwdHMvZW50cnkubXRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFeEQsU0FBUyxXQUFXLENBQUMsR0FBUTtJQUN6QixPQUFPLFVBQVMsR0FBRyxJQUFXO1FBQzFCLE9BQU8sSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDLENBQUE7QUFDTCxDQUFDO0FBRUQsTUFBTSxzQkFBc0IsR0FBRyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUE7QUFDM0QsTUFBTSxvQkFBb0IsR0FBRyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUE7QUFDdkQsT0FBTyxFQUNILHNCQUFzQixJQUFJLGVBQWUsRUFDekMsb0JBQW9CLElBQUksYUFBYSxFQUN4QyxDQUFBIn0=