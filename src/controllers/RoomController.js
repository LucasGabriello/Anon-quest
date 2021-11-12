const Database = require("../db/config")

module.exports = {
    async create(req,res){
        const db = await Database()
        const pass = req.body.password
        let roomId =""
        let isRoom = true

        while(isRoom){
            for( var i = 0 ; i < 6 ; i++){
                roomId += Math.floor(Math.random()*10).toString()
            }
            
            roomsExistIds = await db.all(`SELECT id FROM rooms`)

            isRoom = roomsExistIds.some(roomsExistIds => roomsExistIds === roomId)
        }

        roomsExistIds = await db.all(`SELECT id FROM rooms`)

        isRoom = roomsExistIds.some(roomsExistIds => roomsExistIds === roomId)
        

        if(! roomsExistIds){
            console.log(parseInt(roomId))   
            await db.run(`INSERT INTO rooms (
                id,
                pass
            ) VALUES (
                ${parseInt(roomId)},
                ${pass}
            )`)
        }

        await db.close()

        res.redirect(`/room/${roomId}`)
    },


    async open(req,res){
        const db = await Database()
        const roomId = req.params.room;
        const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId}and read = 0`)
        const questionRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and rear = 1`)

        res.render("room", {roomId: roomId, questions: questions, questionRead: questionRead})
    }
}