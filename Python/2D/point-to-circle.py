from math import dist
def point_to_circle(pointX, pointY, circleX, circleY, radius):
    distance = dist((pointX, pointY), (circleX, circleY))

    if(distance <= radius):
        return True
    else:
        return False