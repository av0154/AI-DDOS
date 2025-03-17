import joblib
import numpy as np


model = joblib.load("attack_model.pkl")

def detect_attack(features):
    prediction = model.predict(np.array(features).reshape(1, -1))
    return "Attack detected " if prediction == 1 else "Normal traffic "


