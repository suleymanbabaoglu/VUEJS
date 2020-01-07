new Vue({
  el: "#app",
  data: {
    playerHeal: 100,
    enemyHeal: 100,
    gameIsOn: false,
    logs: [{ turn: "", text: "" }],
    healUpCount: 0
  },
  methods: {
    startGame() {
      this.gameIsOn = true;
      this.playerHeal = 100;
      this.enemyHeal = 100;
      this.logs.length = 0;
    },
    attack() {
      pLoseHeal = Math.floor((Math.random() * 10000) % 20);
      eLoseHeal = Math.floor((Math.random() * 10000) % 20);
      this.playerHeal -= pLoseHeal;
      this.enemyHeal -= eLoseHeal;
      this.addToLog({ "turn": "monster-turn", "text": pLoseHeal });
      this.addToLog({ "turn": "player-turn", "text": eLoseHeal });
    },
    specialAttack() {
      pLoseHeal = Math.ceil((Math.random() * 15000) % 15);
      eLoseHeal = Math.ceil((Math.random() * 15000) % 20);
      this.playerHeal -= pLoseHeal;
      this.enemyHeal -= eLoseHeal;
      this.addToLog({ "turn": "monster-turn", "text": pLoseHeal });
      this.addToLog({ "turn": "player-turn", "text": eLoseHeal });
    },
    healUp() {
      if (this.playerHeal < 50 && this.healUpCount < 2) {
        ekle = Math.ceil(Math.random() * 15);
        this.playerHeal += ekle;
        pLoseHeal = Math.ceil(Math.random() * 25);
        this.playerHeal -= pLoseHeal;
        this.healUpCount++;
       this.addToLog({ "turn": "monster-turn", "text": pLoseHeal });
       this.addToLog({ "turn": "player-turn", "text": 0 });
      }
    },
    giveUp() {
      this.playerHeal = 0;
    },
    addToLog(log) {
      this.logs.push(log);
    }
  },
  watch: {
    playerHeal(value) {
      if (value <= 0) {
        this.playerHeal = 0;
        if (confirm("Kaybettiniz. Tekrar denemek ister misiniz?"))
          this.startGame();
      } else if (value >= 100) {
        this.playerHeal = 100;
      }
    },
    enemyHeal(value) {
      if (value <= 0) {
        this.enemyHeal = 0;
        if (confirm("Tebrikler Kazandınız. Tekrar oynamak ister misiniz?"))
          this.startGame();
      }
    }
  }
});
