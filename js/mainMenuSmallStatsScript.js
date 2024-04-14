const duration = 3; //seconds
const frames = 60*3; // frames
const waitForFrame = (duration*1000)/frames; //miliseconds

const texts = document.querySelectorAll("#mainMenuSmallStats .big");

texts.forEach((element) => {
    recursiveFunction(0,element,element.innerText)
})


//the same as "for (let i = 0; i < frames; i++)"
function recursiveFunction(index,object,max) {

    if(index < frames){
        //every frame
        let progress = index/frames;
        object.innerText = "+ " + Math.floor(progress*max);
        setTimeout(recursiveFunction,waitForFrame,index+1,object,max);

    }else{
        //on execution ended
        object.innerText = "+ " + max;
    }
}