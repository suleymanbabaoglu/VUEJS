<template>
  <div id="hhh">
    <slot name="header"></slot>
    <slot name="paragraph"></slot>

    <div id="hhh">
      <slot name="divDetay"></slot>
    </div>

    <hr />
    <div id="hhh">
      <slot name="tablePerson">
        <table>
          <thead>
            <th>AD</th>
            <th>SOYAD</th>
            <th>YAŞ</th>
          </thead>
          <tbody>
            <tr>
              <td>SÜLEYMAN</td>
              <td>BABAOĞLU</td>
              <td>26</td>
            </tr>
          </tbody>
        </table>
      </slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
div#hhh {
  border: 2px solid;
  box-shadow: 7px 14px 4px #ccc;
  margin: 5%;
  padding: 10px 20px;
  text-align: center;
}
table {
  border: 2px solid green;
  padding: 5px 10px;  
}
table > thead > th {
  border: 2px solid green;
  padding: 15px 30px;
}
table > tbody > tr>td {
  border: 2px solid green;
  padding: 50px 50px;
}
</style>
