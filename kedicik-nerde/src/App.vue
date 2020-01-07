<template>
    <transition-group mode="out-in">
        <component
                key="main"
                class="animated fadeIn"
                :is="activeComponent"
                @componentEvent="activeComponent=$event">
        </component>
        <canvas
                v-show="activeComponent=='app-celebrate'"
                id="canvas"
                key="canvas">
        </canvas>
    </transition-group>
</template>
<script>
    import GameCards from "./components/GameCards";
    import Failure from "./components/Failure";
    import Celebrate from "./components/Celebrate";

    export default {
        data() {
            return {
                activeComponent: "app-game-cards",
            }
        },
        components: {
            appGameCards: GameCards,
            appFailure: Failure,
            appCelebrate: Celebrate
        }
    }
</script>
<style>
    body {
        font-family: sans-serif;
    }
</style>
