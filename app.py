#!/usr/bin/python3

#from flask import Flask
from flask import Flask, request, render_template, jsonify
app = Flask(__name__)
import tensorflow as tf
tf.enable_eager_execution()


from docproduct.predictor import RetreiveQADoc

pretrained_path = '/home/deep/bio-bert/BioBertFolder/biobert_v1.0_pubmed_pmc/'
# ffn_weight_file = None
bert_ffn_weight_file = '/home/deep/bio-bert/newFolder/models/bertffn_crossentropy/bertffn'
embedding_file = '/home/deep/bio-bert/Float16EmbeddingsExpanded5-27-19.pkl'
doc = RetreiveQADoc(pretrained_path=pretrained_path,ffn_weight_file=None,bert_ffn_weight_file=bert_ffn_weight_file,embedding_file=embedding_file)

def predict(question):

    question_text = question

    search_similarity_by = 'answer'  #@param ['answer', "question"]

    number_results_toReturn=10 #@param {type:"number"}

    answer_only=True #@param ["False", "True"] {type:"raw"}

    returned_results = doc.predict( question_text ,
                      search_by=search_similarity_by, topk=number_results_toReturn, answer_only=answer_only)
    print('')
    print(returned_results[0])
    return returned_results
'''
    for jk in range(len(returned_results)):
        print("Result ", jk+1)
        print(returned_results[jk])
        print('')

    return 0
'''


@app.route("/")
def index():
    predict()
    return jsonify("num:1")

@app.route("/hello")
def hello():
    predict()
    return jsonify("num:1")


@app.route('/predict', methods=['POST'])
def predict_image_class():

    if request.method == 'POST':
        """modify/update the information for <user_id>"""
        # you can use <user_id>, which is a str but could
        # changed to be int or whatever you want, along
        # with your lxml knowledge to make the required
        # changes
        print("========1.0========")
        data = request.get_json()
        print(data["apikey"])
        question = data["apikey"]
        
    prediction = predict(question)
    #print("========1.0========")
    #print(prediction)
    
    return jsonify(prediction)

if __name__ == '__main__':
    # Will make the server available externally as well
    app.run(host='0.0.0.0')
