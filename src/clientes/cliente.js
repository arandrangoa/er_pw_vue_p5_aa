import axios from "axios";

const guardar= async(materia)=>{
    const data=axios.post(`http://localhost:8082/API/v1.0/Matricula/materias`,materia)
    .then(r=>r.data)
    return data;
}

const buscarTodos= async()=>{
    const data=axios.get(`http://localhost:8082/API/v1.0/Matricula/materias`)
    .then(r=>r.data)
    return data;
}

const borrar= async(codigo)=>{
    const data=axios.delete(`http://localhost:8082/API/v1.0/Matricula/materias/${codigo}`)
    .then(r=>r.data)
    return data;
}

const buscarPorCodigo= async(url)=>{
    const data= axios.get(`${url}`)
    .then(r=>r.data)
    return data;
}

const actualizar= async(materia, codigo)=>{
    const data=axios.put(`http://localhost:8082/API/v1.0/Matricula/materias/${codigo}`,materia)
    .then(r=>r.data)
    return data;
}

//Metodos fachada
export const guardarFachada= async(materia)=>{
    return await guardar(materia);
}

export const buscarTodosFachada= async()=>{
    return await buscarTodos();
}

export const borrarFachada= async(codigo)=>{
    return await borrar(codigo);
}

export const buscarPorCodigoFachada= async(url)=>{
    return await buscarPorCodigo(url);
}

export const actualizarFachada= async(materia, codigo)=>{
    return await actualizar(materia,codigo);
}