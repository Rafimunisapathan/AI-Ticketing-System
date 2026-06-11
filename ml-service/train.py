import pandas as pd
import pickle

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB

data = pd.read_csv("tickets.csv")

vectorizer = TfidfVectorizer()

X = vectorizer.fit_transform(data["text"])

model = MultinomialNB()

model.fit(X, data["category"])

pickle.dump(model, open("model.pkl", "wb"))
pickle.dump(vectorizer, open("vectorizer.pkl", "wb"))

print("Model Trained Successfully")
