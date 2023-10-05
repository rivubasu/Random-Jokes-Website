let joke=[`what do you call a boomerang that won't come back? A stick.`,

`What does a cloud wear under his raincoat? Thunderwear.`,

`Two pickles fell out of a jar onto the floor. What did one say to the other? Dill with it.`,

`What times it when the clock strikes 13? Time to get a new clock.`,

`How does a cucumber beme a pickle? It goes through a jarring experience.`];


let index= Math.floor(Math.random()*5);
let ele= document.querySelector(".joke-container");
ele.innerHTML=joke[index];


