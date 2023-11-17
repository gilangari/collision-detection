function pointToCircle(pointX, pointY, circleX, circleY, radius){
    let distance = Math.sqrt((circleX - pointX)**2 + (circleY - pointY)**2);
    
    if(distance <= radius){
        return true;
    }
    else{
        return false;
    }
}