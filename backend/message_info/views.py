from django.shortcuts import render
from message_info.models import Message
from user_info.models import Profile
from django.http import HttpResponse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
# Create your views here.
@csrf_exempt
def message_list(request):
    
    if request.method == 'POST':
        
        data = json.loads(request.body)
        
        me = Profile.objects.get(user_name='park')
        msg1 = data["msg1"]
        msg2 = data["msg2"]
        msg3 = data["msg3"]
        msg4 = data["msg4"]
        msg5 = data["msg5"]
        msg6 = data["msg6"]
        msg7 = data["msg7"]
        msg8 = data["msg8"]
        msg9 = data["msg9"]
        msg10 = data["msg10"]

        Message.objects.create(name=me, msg1=msg1, msg2=msg2, msg3=msg3, msg4=msg4, msg5=msg5, msg6=msg6, msg7=msg7, msg8=msg8, msg9=msg9, msg10=msg10)
        
        response = HttpResponse('success')
        response["Access-Control-Allow-Origin"] = "*"
        response["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
        response["Access-Control-Max-Age"] = "1000"
        response["Access-Control-Allow-Headers"] = "X-Requested-With, Content-Type"
        return response


