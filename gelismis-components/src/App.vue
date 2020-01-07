<template>
  <div>
    <button @click="selectedComp = 'memory'">Memory</button>
    <button @click="selectedComp = 'mem1'">MEM1</button>
    <button @click="selectedComp = 'mem2'">MEM2</button>

    <keep-alive>
    <!-- Keep alive içinde barındırdığı componenti destroyed işlemine sokmadan deaktif ediyor.-->
    <!-- dinamik componentlerde yeni lifecycle hook ları geliyor. Bunlar activated ve deactivated. bu iki hook destroyed işlemi yerine aktif pasif durumu ayarlıyor -->
    
    <component :is="selectedComp">
      <h1 slot="header">GÜZEL BİR GÜN</h1>
      <p slot="paragraph">Güzel Bir Gündü güzel bir anıydı...</p>
    </component>

    </keep-alive>


    <!-- <memory>
      

      <br />
      <hr />
      <br />

      <h1 slot="header">GÜZEL BİR GÜN</h1>
      <p slot="paragraph">Güzel Bir Gündü güzel bir anıydı...</p>
      <div slot="divDetay">
        <h1>Detaylar Detaylar</h1>
        <p>Merhaba Ben Detay</p>
      </div>
      <div slot="tablePerson">
        <table>
          <thead>
            <th>AD</th>
            <th>SOYAD</th>
            <th>YAŞ</th>
          </thead>
          <tbody>
            <tr>
              <td>HASAN</td>
              <td>OLTU</td>
              <td>32</td>
            </tr>
          </tbody>
        </table>
      </div>
    </memory> -->
  </div>
</template>

<script>
import Memory from "./components/memory";
import Mem1 from "./components/mem1";
import Mem2 from "./components/mem2";
export default {
  components: {
    memory: Memory,
    mem1: Mem1,
    mem2: Mem2
  },
  data() {
    return {
      selectedComp: "memory"
    };
  }
};
</script>
