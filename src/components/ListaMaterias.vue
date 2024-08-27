<template>
  <div class="container">
    <div class="tabla">
        <h1>Lista de materias</h1>

        <div class="consultar">
            <button @click="consultar">Consultar</button>
        </div>

        <table>
            <thead>
                <tr>
                    <th>Codigo</th>
                    <th>Nombre</th>
                    <th>Accion</th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="materia in materias" :key="materia.codigo">
                    <td>{{materia.codigo}}</td>
                    <td>{{materia.nombre}}</td>
                    <td>
                        <button @click="ver(materia.links[0].href)">Actualizar</button>
                    </td>
                    <td>
                        <button @click="borrar(materia.codigo)">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="mensajeBorrado" v-if="borrado">
            <h1>Materia borrada exitosamente</h1>
        </div>

    </div>
    
  </div>
</template>

<script>
import {
    buscarTodosFachada,
    borrarFachada,
} from "../clientes/cliente.js";
export default {
    data(){
        return{
            materias:[],
            borrado:false,
        }
    },
    methods:{
        async consultar(){
            const data=await buscarTodosFachada();
            this.materias=data;
        },
        async borrar(codigo){
            await borrarFachada(codigo);
            this.borrado=true;
            this.consultar();
        },
        ver(url){
            this.$emit("selectMat",url);
            this.borrado=false;
        }
    }

}
</script>

<style>

</style>