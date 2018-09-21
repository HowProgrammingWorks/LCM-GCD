euclideanAlgorithm = (val1, val2) => {
    console.log(val1 + " : " + val2);
    if(val1 <= 0) return Math.max(val1, val2);
    return euclideanAlgorithm(Math.abs(val1 - val2), Math.min(val1, val2));
}






liveMode = () => {
    console.log("LIVE MODE");
    //now is not realized
    process.exit(0);
}

showHelp = () => {
    console.log("Help:\nThis is Euclidean algorithm.\nIt is used to find greatest common divisor of two walues.\nTo use it print values as separated arguments.");
    process.exit(0);
}

argsMode = (val1, val2) => {
    console.log("Finding greatest common divisor by Euclidean algorithm.");
    console.log("value 1: " + val1);
    console.log("value 2: " + val2);
    console.log("GCD = " + euclideanAlgorithm(val1, val2));
    process.exit(0);  
}

if(process.argv.length > 1) {
    for(let argument of process.argv) {
        if(argument == "--help") {showHelp(); break;}
    }
    argsMode(Number(process.argv[2]), Number(process.argv[3]));
}
else liveMode();