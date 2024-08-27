<template>
  <div class="container">
    <h3 v-if="mostrarMensaje">{{mensaje}}</h3>
    <div class="formulario">
        <h1>Formulario Materia</h1>

        <div class="grupoFormulario">
            <label for="codigo">Codigo</label>
            <input type="text"
            v-model="codigo"
            @click="mensajeOculto"
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
        <button @click="guardar">Guardar</button>
        </div>

    </div>

  </div>
</template>

<script>
import{guardarFachada} from "../clientes/cliente.js";
export default {
    data(){
        return{
            codigo:null,
            nombre:null,
            descripcion:null,
            numeroCreditos:null,
            mostrarMensaje:false,
            mensaje:"Materia guardada exitosamente"
        }
    },
    methods:{
        async guardar(){
            const materia={
                codigo:this.codigo,
                nombre:this.nombre,
                descripcion:this.descripcion,
                numeroCreditos:this.numeroCreditos,
            }
            const data= await guardarFachada(materia);
            this.mostrarMensaje=true;
            this.reset();
        },
        reset(){
            this.codigo=null;
            this.nombre=null;
            this.descripcion=null;
            this.numeroCreditos=null;
        },
        mensajeOculto(){
            this.mostrarMensaje=false;
        }
        

    }

}
</script>

<style>

</style>