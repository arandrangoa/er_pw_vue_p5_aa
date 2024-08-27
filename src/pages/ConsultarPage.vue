<template>
  <lista-materias @selectMat="consultar"/>
  <visualizar-materia :materia="this.materia" v-if="this.materia"/>
</template>

<script>
import ListaMaterias from '@/components/ListaMaterias.vue';
import VisualizarMateria from '@/components/VisualizarMateria.vue';
import {buscarPorCodigoFachada} from "../clientes/cliente.js";

export default {
  components: { ListaMaterias,
   VisualizarMateria 
   },
   data(){
    return{
      materia:null,
    }
   },
   methods:{
    async consultar(url){
      const data=await buscarPorCodigoFachada(url);
      this.materia={
        codigo:data.codigo,
        nombre:data.nombre,
        descripcion:data.descripcion,
        numeroCreditos:data.numeroCreditos
      }
    }
   }


}
</script>

<style>

</style>