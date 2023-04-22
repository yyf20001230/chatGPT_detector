from transformers import DistilBertForSequenceClassification, DistilBertTokenizer
from transformers import AutoModelForSequenceClassification, AutoTokenizer

import torch.nn.functional as F
import os
import torch

class classifier():
    def __init__(self, model_path):
        self.tokenizer = DistilBertTokenizer.from_pretrained(model_path)
        self.model = DistilBertForSequenceClassification.from_pretrained(model_path)
    
    def predict(self, text):
        
        inputs = self.tokenizer(text, return_tensors='pt')
        outputs = self.model(**inputs)
        logits = outputs.logits
        probabilities = logits.softmax(dim=1)
        prediction = torch.argmax(probabilities, dim=1)
        
        if prediction == 1:
            return 'human'
        else:
            return 'chatgpt'
        
mymodel = classifier(model_path="./backend/model")

text = """
Qasr Ibrahim (Ibrahim Palace) is a historical castle and fort that is located in the north of Alqoat neighborhood, Hofuf, Al-Ahsa, Eastern Province, Saudi Arabia. Besides, it is called the dome Palace, AlQoat Palace or Ibrahim Castle. Ibrahim palace is the main architectural heritage from the Ottoman period of Al-Hofuf that was a Turkish military barracks. After that, the palace was taken and seized by King Abdul-Aziz Al Saud in April 13, 1913 (5th of First Jumada 1331 AH). The palace was constructed with a mosque that has a dome in 1555 (963 AH). During the next century, the palace was enlarged into a castle, prison and Turkish bath. In 2019, the Saudi Commission for Tourism and National Heritage has announced that the procedures of renovation of all parts of the palace have finished. This restoration process included rebuilding the fallen parts, painting the buildings and preparing a main square for the tourism activities and festivals."""
print(mymodel.predict(text)
)