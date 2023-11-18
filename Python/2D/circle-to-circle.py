from math import dist
def circle_to_circle(cx1, cy1, cx2, cy2, radius1, radius2):
    distance = dist((cx1, cy1), (cx2, cy2))

    if(distance <= radius1 + radius2):
        return True
    else:
        return False