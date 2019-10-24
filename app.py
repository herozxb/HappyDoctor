from __future__ import division, print_function
# coding=utf-8

import os
import io

import numpy as np
from PIL import Image
import tensorflow as tf
tf.enable_eager_execution()

from gevent.pywsgi import WSGIServer
from flask import Flask, request, render_template, jsonify


app = Flask('HappyDoctor')

# Model saved with Keras model.save()
MODEL_PATH = os.path.join(os.path.dirname(__file__), 'models', 'crack_detection.h5')

# Load trained model
#model = tf.keras.models.load_model(MODEL_PATH)
#model._make_predict_function()
print('Model loaded. Start serving...')

from docproduct.predictor import RetreiveQADoc

pretrained_path = '/home/deep/bio-bert/BioBertFolder/biobert_v1.0_pubmed_pmc/'
# ffn_weight_file = None
bert_ffn_weight_file = '/home/deep/bio-bert/newFolder/models/bertffn_crossentropy/bertffn'
embedding_file = '/home/deep/bio-bert/Float16EmbeddingsExpanded5-27-19.pkl'
doc = RetreiveQADoc(pretrained_path=pretrained_path,ffn_weight_file=None,bert_ffn_weight_file=bert_ffn_weight_file,embedding_file=embedding_file)

print('Model loaded. Check http://127.0.0.1:8080/')


def predict(img):

    question_text = "anxiety"

    search_similarity_by = 'answer'  #@param ['answer', "question"]

    number_results_toReturn=10 #@param {type:"number"}

    answer_only=True #@param ["False", "True"] {type:"raw"}

    returned_results = doc.predict( question_text ,
                      search_by=search_similarity_by, topk=number_results_toReturn, answer_only=answer_only)
    print('')
    for jk in range(len(returned_results)):
        print("Result ", jk+1)
        print(returned_results[jk])
        print('')
    return 0


@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')
    #return 0

@app.route('/predict', methods=['POST'])
def predict_image_class():
    img = request.files['file'].read()
    img = Image.open(io.BytesIO(img))
    prediction = predict(img)
    #class_name = "crack" if prediction[0] < 0.5 else "no_crack"
    #response = {"prediction": class_name}
    return jsonify(0)


if __name__ == '__main__':
    http_server = WSGIServer(('', 8080), app)
    http_server.serve_forever()
