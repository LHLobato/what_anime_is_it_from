import cv2 
import os 

paths = ["bluelock_2", "bluelock_3", "bluelock_4","bluelock_5", "bluelock_6", "bluelock_7", "bluelock_8", "bluelock_9", "bluelock_10"]

for dir_vid in paths:
    vid = cv2.VideoCapture(f"../videos/{dir_vid}.mp4")
    count = 0

    os.makedirs("../images", exist_ok=True)
    os.makedirs(f"../images/{dir_vid}", exist_ok=True)

    while(True):
        if count % 15 == 0:
            success, frame = vid.read()
            if not success: break 
            cv2.imshow("Output", frame)
            cv2.imwrite(f'../images/{dir_vid}/' + str(int(count/20)) + '.jpg', frame)
        else:
            success = vid.grab()
            if not success: break

        count +=1

        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    vid.release()

cv2.destroyAllWindows()