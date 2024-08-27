<template>
  <div class="navbar">
    <router-link to="/crear">Crear Materia</router-link>
    <router-link to="/consultar">Consultar Materia</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.navbar{
    display: flex;
    background: greenyellow;
    padding: 10px;
}

.navbar a{
    color: black;
    font-size: 15px;
    text-decoration: none;
    padding: 20px;

}

</style>