from django.shortcuts import render
from reserve_info.models import Reserve
from user_info.models import Profile
from django.http import HttpResponse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
# Create your views here.
@csrf_exempt
def reserve_list(request):
    
    if request.method == 'POST':
        
        data = json.loads(request.body)
        
        me = Profile.objects.get(user_name='park')
        booker = data["booker"]
        manager = data["manager"]
        start_time = data["start_time"]
        end_time = data["end_time"]
        cost = data["cost"]
        memo = data["memo"]

        Reserve.objects.create(name=me, booker=booker, manager=manager, start_time=start_time, end_time=end_time, cost=cost, memo=memo)
        
        response = HttpResponse('success')
        response["Access-Control-Allow-Origin"] = "*"
        response["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
        response["Access-Control-Max-Age"] = "1000"
        response["Access-Control-Allow-Headers"] = "X-Requested-With, Content-Type"
        return response


