
    //Me traigo mi db firestore
    import { getTasks, insertTask, deleteTask, updateTask } from "../utils.js";
    //console.log(db);
    //Extraigo todos los documentos de tasks y creo tarjetas con ellos
    getTasks();


    //Obtenemos el form y capturamos el submit
    const form = document.getElementById("task-form");
    form.addEventListener("submit", e => {
        e.preventDefault();
        const task = {
            title: form["task-title"].value,
            description: form["task-description"].value
        }

        insertTask(task);
    })

    const modTitle = document.getElementsByClassName("modTitle");
    const modText = document.getElementsByClassName("modText");
    const modificar = document.getElementsByName("modificar");
    

    //MODIFICAR TAREA Y CONFIRMAR ANTES DE MODIFICAR
     modificar.forEach((element, index) => {
         
     element.addEventListener('click', e =>{
         let confirmarM = prompt('Escriba M o m para confirmar');
         if(confirmarM == "m" || confirmarM == "M"){

        
        e.preventDefault();
        
        let valorT = modTitle[index].value;
        let valorD = modText[index].value;
        
        console.log(valorT);
        console.log(valorD);
        const task = {
            title: valorT,
            description: valorD
        }
        updateTask(element.id, task);
    }else{
        console.log('No se ha modificado la tarea');
    }


      })
        
     });
    
   
   
  

//BORRAR TAREA Y CONFIRMAR ANTES DE BORRAR
    const buttonsCardD = document.getElementsByName("delete");
    buttonsCardD.forEach(element => {
        element.addEventListener("click",  () => {
            var divDelete = element.parentNode.parentNode;
            
            let confirmarD = prompt('Escriba D o d para confirmar');
            if(confirmarD == "d" || confirmarD == "D"){
                document.body.removeChild(divDelete);
            deleteTask(element.id);
        }else{
            console.log('no se ha borrado la tarea');
        }
        })
    });

// modTitle.forEach((element, index)=>{
//         let a=element[index].value;
//         console.log(a)
//           })

