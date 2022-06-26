new Vue ({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsOn: false,
        logs:[]
    },
    methods: {
        startGame : function() {
            this.gameIsOn = true;
        },
        attack: function(){
            let point = Math.ceil (Math.random()*10);
            this.monsterHealth -= point;
            this.monsterAttack();
            this.addToLog({turn:"player", text:`Player hits monster for ${point}`});
            console.log(`Player: ${this.playerHealth} - Monster: ${this.monsterHealth}`);
        },
        specialAttack: function(){
            let point = Math.ceil (Math.random()*25);
            this.monsterHealth -= point;
            this.monsterAttack();
            this.addToLog({turn:"player", text:`Special Player hits monster for ${point}`});
            console.log(`Player: ${this.playerHealth} - Monster: ${this.monsterHealth}`);

        },
        healthUp: function(){
            let point = Math.ceil (Math.random()*15);
            this.playerHealth += point;
            this.monsterAttack();
            this.addToLog({turn:"player", text:`Player heal up for ${point}`});
            console.log(`Healed player: + ${point}, ${this.playerHealth}- Monster: ${this.monsterHealth}`);
            // maximum 3 defa heale basabilir. ayarla onu.
        },
        giveUp: function(){
            this.playerHealth = 0;
            this.addToLog({turn:"player", text:`Player gave up`});


        },
        monsterAttack: function(){
            let point = Math.ceil (Math.random()*15);
            this.playerHealth -= point;
            this.addToLog({turn:"monster", text:`Monster hits player for ${point}`});

        },
        reset:function(){
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.logs = [];
        },
        addToLog: function(log){
            this.logs.push(log);
        }
    },
    watch:{
        playerHealth: function(value){
            if(value <= 0){
                this.playerHealth = 0;
                if(confirm('You Lose! Are you want to play again?')){
                    this.reset();
                    this.logs = [];
                }
            }else if(value>=100){
                this.playerHealth=100;
            }
        },
        monsterHealth: function(value){
            if(value <= 0){
                this.monsterHealth = 0;
                if(confirm('You Win! Are you want to play again?')){
                    this.reset();
                    this.logs = [];
                }
            }else if(value>=100){
                this.monsterHealth=100;
            }
        }
    }


})