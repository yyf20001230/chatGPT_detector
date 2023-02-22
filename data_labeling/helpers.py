import os
import nltk
nltk.download('punkt')
from nltk.tokenize import sent_tokenize
from statistics import mean 

def read_text(src = None, filetype = 'txt'):
    """
    this function reads all txt files under specified dir
    and does some corresponding feature engineering (see readme for an exhaustive list) 
    output is a list of dicts, with each dict containing relevant features
    """
    
    def word_count(str):
        """
        turns a string into counts, return a dict
        """
        counts = dict()
        words = str.split()
        for word in words:
            counts[word] = counts.get(word, 0) + 1
        return counts

    wd = os.getcwd() if src != None else src
    files = [f for f in os.listdir(wd) if f.endswith(filetype)]
    extracted = [{} for f in files]

    for i in range(len(files)):
        
        f = files[i]
        
        with open(f) as t:
            
            text = t.read()
            d = word_count(text)
            tokens = sent_tokenize(text)
            special_char = [c for c in text if not c.isalpha() and not c.isdigit() and c != '\n' and c!=' ']
    
            extracted[i]['total word counts'] = sum(d.values())
            extracted[i]['unique word counts'] = len(d.values())
            extracted[i]['number of sentences'] = len(tokens)
            extracted[i]['average length of sentences (characters)'] = sum(map(len, tokens))/len(tokens)
            extracted[i]['special characters'] = len(special_char)
    
    return files, extracted