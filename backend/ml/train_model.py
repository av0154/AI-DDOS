import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
import joblib


data = pd.read_csv(r"C:\Users\abhir\Downloads\archive\dataset_sdn.csv")


X = data.drop(columns=["attack"])  # Features
y = data["attack"]  # Labels (0 = normal, 1 = attack)


X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)


model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)


joblib.dump(model, "attack_model.pkl")
print("Model trained and saved as attack_model.pkl ✅")
