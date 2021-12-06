var myPlayer = {
    pName: "Wizardman",
    pHealth : 100,
    pMagic : 100,
    pQuestsCompleted : ["intro", "SecretBanana"],
    
    pMagicAttack : function( magicUsed ) {
        this.pMagic = this.pMagic - magicUsed;
        consol.log("new magic level: " + this.pMagic);
    },
    pCompleteQuests : function( questName) {
        if( this.pQuestsCompleted.indexOf( questName ) == -1 ){
            this.pQuestsCompleted.push( questName);
            console.log(questName + " has alreadt been added to Quests")
        }
        else {
            console.log(questName + " is already in quests completed.");
        }
    }
}