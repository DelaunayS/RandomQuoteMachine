let colorA=Math.floor(Math.random() * Math.floor(255))
let colorB=Math.floor(Math.random() * Math.floor(255))
let colorC=Math.floor(Math.random() * Math.floor(255))


const app = new Vue({
    el:"#wrapper",
    data:{ 
        show:true,
        new_color:`rgb(${colorA},${colorB},${colorC})`,
        choiceNumber:Math.floor(Math.random() * Math.floor(7)),     
        quoteList:[
            {id:0,          
            quote: "Exige beaucoup de toi-même et attends peu des autres. Ainsi beaucoup d'ennuis te seront épargnés.",
            author:"Confucius"},

            {id:1,          
            quote: "Dans la vie on ne fait pas ce que l'on veut mais on est responsable de ce que l'on est.",
            author:"Jean-Paul Sartre"},

            {id:2,
            quote:"La vie est un mystère qu'il faut vivre, et non un problème à résoudre.",
            author:"Gandhi"},
            
            {id:3,
            quote:"La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.",
            author:"Albert Einstein"},
                        
            {id:4,
            quote:"La différence qu'il y a entre les oiseaux et les hommes politiques, c'est que de temps en temps les oiseaux s'arrêtent de voler !",
            author:"Coluche"},

            {id:5,
            quote:"Faites que le rêve dévore votre vie afin que la vie ne dévore pas votre rêve.",
            author:"Antoine De Saint-Exupéry"},

            {id:6,
            quote:"La beauté est dans les yeux de celui qui regarde.",
            author:"Oscar Wilde"},
        ]

    },
    methods:{
        newCitation() { 
            let test=this.choiceNumber
            while(test===this.choiceNumber){          
            this.choiceNumber= Math.floor(Math.random()* Math.floor(7))
            }
            let colorA=Math.floor(Math.random() * Math.floor(255))
            let colorB=Math.floor(Math.random() * Math.floor(255))
            let colorC=Math.floor(Math.random() * Math.floor(255))
            this.new_color=`rgb(${colorA},${colorB},${colorC})`
        }

    }
})