let tamagotchi = {
    name: 'Charlie',
    weight: 73,
    age: 1,
    birthday: "February 1st",
    description: "he's a big baby",
    hungerLever: "only if it's not his food",
    happinessLevel: "loves life",
    attentionLevel: "depends on what it is",
    lifeStage: "Teen",
    isHungry: true,
    wantsToPlay: true,
    isHappy: true,
    needsAttention: true,
     speak: function() {
       console.log(`Charlie says he's a ${this.lifeStage} and he can do what he wants...`);
     },
     play: function() {
       if(this.wantsToPlay === true){
         newWeight = this.weight--;
         console.log(`From ${this.name} playing his new weight is ${newWeight}!`);
       } else {
         console.log(`he's a lazy tamagotchi.`)
       }
     },
       eat: function() {
        const question = prompt(`Is it Charlie's food? `);
        // const (this.isHungry) === 'yes';
        let answer = question;
        if (question === 'yes'){ console.log(`He's hungry!!`)
        } else {
         console.log(this.description)}
     }


}

tamagotchi.age
tamagotchi.birthday

tamagotchi.speak()
tamagotchi.play()
tamagotchi.eat()