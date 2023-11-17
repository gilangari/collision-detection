function circleToCircle(cx1, cy1, cx2, cy2, radius1, radius2){
    let distance = Math.sqrt((cx2 - cx1)**2 + (cy2 - cy1)**2);

    if(distance <= radius1 + radius2){
        return true;
    }
    else{
        return false;
    }
}