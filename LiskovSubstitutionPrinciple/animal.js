const reptile = {
    name: "Reptile",
    limbs: 4,
    wayOfMoving: ["running"],
    maxSpeed: {
        running: "22miles/h"
    },
    movingInfo: function(){
        let info = this.wayOfMoving.reduce((info,cur)=>{
            if(this.maxSpeed[cur] !==undefined){
                info ===""?
                info += `${cur} at speeds of ${this.maxSpeed[cur]}`:
                info += `,${cur} at speeds of ${this.maxSpeed[cur]}`;
            }
            return info;
        },'');
        console.log(`This ${this.name}: ${info}`);
    }
}
