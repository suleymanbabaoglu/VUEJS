import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// Vue.directive("color", { //el:element, binding: gönderilen değer: binding üç tip değer alır 1. value 2. arg 3.modifiers[array] 
//   bind(el, binding) {
//     if(binding.modifiers["gecikmeyap"]){
//       setTimeout(() => {
//         if (binding.arg == "background") {
//           el.style.backgroundColor = binding.value;
//         } else {
//           el.style.color = binding.value;
//         }
//       }, 2000);
//     }else{
//       if (binding.arg == "background") {
//         el.style.backgroundColor = binding.value;
//       } else {
//         el.style.color = binding.value;
//       }
//     }
//   }
// }); // GLOBAL DIRECTIVE TANIMLAMA

new Vue({
  render: h => h(App)
}).$mount("#app");
