<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <div
      v-color:background.gecikmeyap.flash="{
        firstColor: 'blue',
        secondColor: 'red',
        delay: 500
      }"
    >
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab velit hic
        perspiciatis recusandae voluptates dolores eaque ipsa incidunt
        excepturi, temporibus quaerat et eos? Iusto quidem corporis, laboriosam
        sint ipsa vero. Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Praesentium asperiores libero, possimus nesciunt modi mollitia
        officia. Blanditiis adipisci reprehenderit aut earum fugiat vero
        commodi, fuga perferendis voluptates, consequuntur sunt. Magnam. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Ex enim doloremque a
        quos accusamus? Atque architecto doloremque consequuntur ipsam facilis
        non doloribus possimus quaerat, magni sit expedita neque ea modi. Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Eum hic illo
        laudantium doloribus fuga at necessitatibus magnam, consequuntur
        dolores. Exercitationem quas sit, excepturi eveniet asperiores vitae
        vero nemo magni quaerat! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Minus, libero! Voluptas, voluptatibus perspiciatis.
        Dignissimos vel architecto officia impedit. Aut odio non quos rerum
        veniam cupiditate quod distinctio cumque quaerat veritatis. Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Labore omnis dolores
        beatae, quo deserunt obcaecati repellendus maxime illo neque, dolorem ad
        nemo quia impedit aliquam amet laudantium doloribus pariatur excepturi.
      </p>
    </div>
    <div v-color="'red'">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab velit hic
        perspiciatis recusandae voluptates dolores eaque ipsa incidunt
        excepturi, temporibus quaerat et eos? Iusto quidem corporis, laboriosam
        sint ipsa vero. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consequuntur itaque fuga, dolorum amet sit id debitis. Ut similique
        nostrum recusandae quam doloremque maxime facere earum error dignissimos
        reiciendis, repellat amet! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Beatae quia laborum minus at deleniti quis tempora
        ducimus a soluta in iste accusamus eligendi provident rerum, vero
        repudiandae eos voluptas consequuntur.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  directives: {
    color: {
      //el:element, binding: gönderilen değer: binding üç tip değer alır 1. value 2. arg 3.modifiers[array]
      bind(el, binding) {
        let delay = 0;
        if (binding.modifiers["gecikmeyap"]) {
          delay = 2000;
        }

        if (binding.modifiers["flash"]) {
          let firstColor = binding.value.firstColor;
          let secondColor = binding.value.secondColor;
          let currentColor = firstColor;
          setTimeout(() => {
            setInterval(() => {
              currentColor == secondColor
                ? (currentColor = firstColor)
                : (currentColor = secondColor);

              if (binding.arg == "background") {
                el.style.backgroundColor = currentColor;
                el.style.color='#fff';
              } else {
                el.style.color = currentColor;
              }
            }, binding.value.delay);
          }, delay);
        } else {
          setTimeout(() => {
            if (binding.arg == "background") {
              el.style.backgroundColor = binding.value;
            } else {
              el.style.color = binding.value;
            }
          }, delay);
        }
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
