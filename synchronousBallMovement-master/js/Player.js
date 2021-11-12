class Player{
    constructor(){
        this.index = null
        this.distance = 0
        this.name = null

    }

    getCount(){
        var playerCountRef = database.ref("playerCount")
        playerCountRef.on("value",(data) =>{
            playerCount = data.val()
        })

    }
    updateCount(Count){
        database.ref("/").update({
            playerCount:Count
        })
    }
    update(){
        var playerIndex = "Players/Player" + this.index
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance,
        })
    }
    static getPlayerInfo(){
        var playerInfoRef = database.ref("Players")
        playerInfoRef.on("value", (data)=>{
           allPlayers = data.val()
        })
    }

}
