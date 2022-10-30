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
            newTitle: '',
            todos:[[
                {testo : "studiare inglese",done :false},
                {testo : "passare in farmacia",done :false},
                {testo : "riordinare camera",done :false},
                {testo : "comprare regalo per l'anniversario",done :false},
                {testo : "scegliere la meta delle vacanze",done :false},
                {testo : "restituire il dvd al nolleggio",done :false},
                {testo : "comprare i cioccolatini per l'amante",done :false},
                {testo : "aperitivo con amici",done :false},
                {testo : "fare copia delle chiavi di casa",done :false}
            ],[
                {testo : "pasta",done :false},
                {testo : "sugo",done :false},
                {testo : "mozzarelle",done :false},
                {testo : "marmellata",done :false},
                {testo : "fette biscottate",done :false},
                {testo : "patatine",done :false}
            ],[
                {testo : "dentista",done :false},
                {testo : "medico di base",done :false},
                {testo : "banca",done :false},
                {testo : "poste italiane",done :false},
                {testo : "psicologo",done :false}
            ]],
            titleTodos:[{titolo : 'generico',finished : false, alarm : false,inputTask : false,newTodo: ''},
                        {titolo : 'spesa',finished : false, alarm : false,inputTask : false,newTodo: ''},
                        {titolo : 'appuntamenti',finished : false, alarm : false,inputTask : false,newTodo: ''}
                    ],
            alarmTitle : false,
            inputTitle : false,
            colors :['#ff000080','#ff870080','#ffd30080','#a1ff0a80','#0aff9980','#0aefff80','#147df580','#580aff80','#be0aff80'], //colori per i todo
            colorsCircle :['#ff0000','#ff8700','#ffd300','#a1ff0a','#0aff99','#0aefff','#147df5','#580aff','#be0aff'] //colori per i pallini iniziali
        }
    },
    methods:{
        addTasks(){
            if(this.newTitle.length >= 3){
                this.titleTodos.unshift({titolo : this.newTitle, finished : false, alarm : false,inputTask : false});
                this.todos.unshift([]);
                this.newTitle = '';
                this.alarmTitle = false;
            }else{
                this.alarmTitle = true;
                setTimeout(()=> this.alarmTitle=false,1500);
                this.newTitle = '';
            }
        },
        removeTasks(title,j){
            this.titleTodos = this.titleTodos.filter((element)=> element != title);
            this.todos = this.todos.filter((element)=> element != this.todos[j]);
        },
        taskDone(j,i){
            this.todos[j][i].done = !this.todos[j][i].done;
        },
        addTask(j){
            if(this.titleTodos[j].newTodo.length >= 3){
                this.todos[j].unshift({testo : this.titleTodos[j].newTodo, done : false});
                this.titleTodos[j].newTodo = '';
                this.titleTodos[j].alarm = false;
            }else{
                this.titleTodos[j].alarm = true;
                setTimeout(()=> this.titleTodos[j].alarm=false,1500)
                this.titleTodos[j].newTodo = '';
            }
        },
        removeTask(todo,j){
            this.todos[j] = this.todos[j].filter((element)=> element != todo);
        },
        toggleInput(j){
            this.titleTodos[j].newTodo = '';
            this.titleTodos[j].inputTask = !this.titleTodos[j].inputTask
        },
        toggleInputTitle(){
            this.newTitle = '';
            this.inputTitle = !this.inputTitle
        },
        mod(i){  //funzione per ciclare l'array dei colori 
            return i%this.colors.length
        }
    }
}).mount('#app');