<template>
  <div class="container">
    <h3 v-if="mostrarMensaje">{{mensaje}}</h3>
    <div class="formulario">
        <h1>Actualizar Materia</h1>

        <div class="grupoFormulario">
            <label for="codigo">Codigo</label>
            <input type="text"
            v-model="codigo"
            disabled
            />
        </div>
        <div class="grupoFormulario">
            <label for="nombre">Nombre</label>
            <input type="text"
            v-model="nombre"
            @click="mensajeOculto"
            />
        </div>
        <div class="grupoFormulario">
            <label for="descripcion">Descripcion</label>
            <input type="text"
            v-model="descripcion"
            @click="mensajeOculto"
            />
        </div>
        <div class="grupoFormulario">
            <label for="numeroCreditos">Numero de creditos</label>
            <input type="number"
            v-model="numeroCreditos"
            @click="mensajeOculto"
            />
        </div>
        <div class="boton">
        <button @click="actualizar">Actualizar</button>
        </div>

    </div>

  </div>
</template>

<script>
import {actualizarFachada} from "../clientes/cliente.js";
export default {
    props:{
        materia:Object,
        
    },
    data(){
        return{
            codigo:this.materia.codigo,
            nombre:this.materia.nombre,
            descripcion:this.materia.descripcion,
            numeroCreditos:this.materia.numeroCreditos,
            mostrarMensaje:false,
            mensaje:"Materia actualizada con exito"
        }
    },
    methods:{
        async actualizar(){
            const materiaActualizar={
                nombre:this.nombre,
                descripcion:this.descripcion,
                numeroCreditos:this.numeroCreditos,
            }
            await actualizarFachada(materiaActualizar,this.materia.codigo)
            this.mostrarMensaje=true;
        }
    }

}
</script>

<style>

</style>