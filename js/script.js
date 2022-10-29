// Descrizione:
// Rifare l'esercizio della to do list argomento dell to-do list a piacere
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto 
// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa,
// il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": 
// cliccando sul pulsante, il testo digitato viene letto e utilizzato 
// per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente 
// (se done era uguale a false, impostare true e viceversa)
const {createApp} = Vue;

const app = createApp({
    data(){
        return {
            newTodo: '',
            todos:[
                {testo : "studiare inglese",done :false},
                {testo : "fare la spesa",done :false},
                {testo : "riordinare camera",done :false},
                {testo : "comprare regalo per l'anniversario",done :false},
                {testo : "scegliere la meta delle vacanze",done :false},
                {testo : "restituire il dvd al nolleggio",done :false},
                {testo : "comprare i cioccolatini per l'amante",done :false},
                {testo : "aperitivo con amici",done :false},
                {testo : "disdire appuntamento dal dentista",done :false}
            ],
            alarm : false,
            colors :['#ff000080','#ff870080','#ffd30080','#a1ff0a80','#0aff9980','#0aefff80','#147df580','#580aff80','#be0aff80'],
            colorsCircle :['#ff0000','#ff8700','#ffd300','#a1ff0a','#0aff99','#0aefff','#147df5','#580aff','#be0aff']
        }
    },
    methods:{
        taskDone(i){
            this.todos[i].done = !this.todos[i].done;
        },
        addTask(){
            if(this.newTodo.length >= 3){
                this.todos.unshift({testo : this.newTodo, done : false});
                this.newTodo = '';
                this.alarm = false;
            }else{
                this.alarm = true;
                setTimeout(()=> this.alarm=false,1500)
            }
            
        },
        removeTask(todo){
            this.todos = this.todos.filter((element)=> element != todo);
        },
        mod(i){
            return i%this.colors.length
        }
    }
}).mount('#app');