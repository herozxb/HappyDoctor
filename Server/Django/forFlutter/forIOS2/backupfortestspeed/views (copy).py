# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import json
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.decorators.csrf import csrf_exempt
import time
import sklearn
from forIOS2 import settings 
import os
import re


counter = 0
#@ensure_csrf_cookie
@csrf_exempt
def index(request):

	if request.method == 'POST':
		json_data = json.loads(request.body.decode('utf-8'))
		#print(json_data)
	image_feature = json.loads(json_data["List"])
	#print(image_feature)
	kmeans = settings.kmeans
	y_pred = kmeans.predict([image_feature])
	print(y_pred)
	global counter
	counter = counter + 1
	print(counter)

	cnx = settings.cnx

	cursor = cnx.cursor()
	cursor.execute('SET GLOBAL wait_timeout=31536000')
	cursor.execute('SET GLOBAL interactive_timeout=31536000')
	#cursor.execute('SET GLOBAL connection_timeout=31536000')

	query = ("SELECT name FROM IOSresult3 where id = %s" %(y_pred[0]+1))
	cursor.execute(query)

	#for (result) in cursor:
    		#print(result)
	cursor.close()
	return JsonResponse(result,safe=False)	
	#return HttpResponse("Hello, world. You're at the forKmeans index.")
# Create your views here.
