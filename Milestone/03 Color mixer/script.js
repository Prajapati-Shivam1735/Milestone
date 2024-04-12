function colorMix(color1, color2) {
    let result;

    switch(true){
        case (color1 === "red"  && color2 === "blue") || (color1 === "blue" && color2 === "red"):
            result = "purple";
            break;

        case(color1 === "red" && color2 === "yellow")  || (color1 === "yellow" && color2 === "red"):
            result = "orange"
            break;
        
            case(color1 === "blue" && color2 === "yellow")  || (color1 === "yellow" && color2 === "blue"):
            result = "green"
            break;
        default:
            result = "Invalid color combination";
    }
    console.log(`Result: ${result}`);
}

colorMix("red", "blue"); 
colorMix("red", "yellow"); 
colorMix("blue", "yellow"); 
colorMix("green", "yellow");