$(document).keydown(function(e){
    const key = e.key;
    $(".text").text(key);
    if (["z", "x", "c", "v", "b", "n", "m", "a", "s", "d", "f", "g", "h", "j", "k", "l", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p"].includes(key)){
        $(".text").css("color","blueviolet");
    }
    else if ([1,2,3,4,5,6,7,8,9,0].includes(Number(key))){
        $(".text").css("color", "#353bba");
    }
    else if (["Meta", "AltGraph", "Control","Alt","Tab","Escape","Shift","Backspace","CapsLock","Enter"," "].includes(key)){
        $(".text").css("color", "crimson");
    }
    else if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(key)){
        $(".text").css("color", "#20da8b");
    }
    else if([".","/",";","'","[","]","\\","-","=","`",","].includes(key)){
        $(".text").css("color", "#20a6da");
    }
    else if (["!","@","#","$","%","^","&","*","(",")","_","+","{","}","|",":","\"","<",">","?"].includes(key)){
        $(".text").css("color", "#da20c1");
    }
    else{
        $(".text").css("color", "black");
    }
});