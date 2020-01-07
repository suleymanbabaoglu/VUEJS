<template>
    <div class="game-area">
        <h1 class="title">Kedicik <span> Nerede</span><strong>?</strong></h1>
        <h4 class="description">Açık Kartlardan Birini Seçtikten Sonra, Kapalı olan karta tıklayınız!</h4>
        <div class="container">
            <transition-group class="container" appear>
                <app-card
                        :class="{'shadow': selectedCard === card.id}"
                        @click.native="selectedCard=card.id"
                        v-for="(card,index) in cards"
                        :key="index"
                        :card="card"
                        class="animated heartBeat">
                </app-card>
            </transition-group>
        </div>
        <div class="container">
            <transition mode="out-in">
                <component
                        @click.native="showCard(answer)"
                        :is="activeCard"
                        :card="answer"
                        class="animated rotateIn"                >
                </component>
            </transition>
        </div>
    </div>
</template>

<script>
    import Card from "./Card";
    import DefaultCard from "./DefaultCard";
    import img1 from '../assets/card-1.jpg';
    import img2 from '../assets/card-2.jpg';
    import img3 from '../assets/card-3.jpg';
    import img4 from '../assets/card-4.jpg';
    import img5 from '../assets/card-5.jpg';

    export default {
        components: {
            appCard: Card,
            appDefaultCard: DefaultCard
        },
        data() {
            return {
                selectedCard: null,
                answer: {},
                activeCard: "app-default-card",
                cards: [
                    {id: 1, component: "app-card", image: img1},
                    {id: 2, component: "app-card", image: img2},
                    {id: 3, component: "app-card", image: img3},
                    {id: 4, component: "app-card", image: img4},
                    {id: 5, component: "app-card", image: img5}
                ]
            }
        },
        methods: {
            showCard(answer) {
                if (this.selectedCard == null) {
                    alert("İlk Olarak Kart Seçmeniz Gerekmektedir !!!");
                } else {
                    this.activeCard = answer.component;
                    setTimeout(() => {
                        if (answer.id === this.selectedCard) {
                            this.$emit("componentEvent", "app-celebrate")
                        } else {
                            this.$emit("componentEvent", "app-failure")
                        }
                    }, 3000)
                }
            }
        },
        created() {
            let answer = Math.ceil(Math.random() * this.cards.length);
            this.answer = this.cards[answer - 1];
        },

    }
</script>

<style scoped>

    .title {
        text-align: center;
        color: rosybrown;
    }

    .title span {
        color: mediumpurple;
    }

    .title strong {
        color: darkred;
    }

    .description {
        color: gray;
        text-align: center;
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
    }

    .shadow {
        box-shadow: 0 5px 48px #30969f !important;
        transition: box-shadow .5s;
    }
</style>