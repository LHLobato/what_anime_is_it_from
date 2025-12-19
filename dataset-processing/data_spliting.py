import splitfolders
import os

input_folder = "../images/"
os.makedirs("../images-final/", exist_ok=True)

splitfolders.ratio(input_folder, output="../images-final", seed=42, ratio=(.7, .2, .1), group_prefix=None)
