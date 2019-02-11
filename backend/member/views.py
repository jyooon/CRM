#-*- coding: utf-8 -*-
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.forms.models import model_to_dict
from django.views.decorators.csrf import csrf_exempt
import json
import pprint

from django.contrib.auth.models import User
from user_info.models import *
from talk_info.models import *
@csrf_exempt
def getMembers(request):
    if request.method == 'GET':
        id = request.GET.get('id')
        
        p1 = Profile.objects.all()
        # 현재 로그인 되어있는 관리자의 가상 id 값
        u1 = User.objects.get(id=id)
        members_json = []
        for person in p1:
            if person.user == u1:
                member = model_to_dict(Info.objects.get(name=person))
                member['name'] = person.user_name
                talk_infos = Talk.objects.filter(name=person)
                member['telegram'] = ''
                member['kakao'] = ''
                member['line'] = ''
                for talk_info in talk_infos:
                    talk = model_to_dict(talk_info)
                    talk_type = talk['talk_type']
                    del talk['id']
                    del talk['name']
                    del talk['talk_type']
                    member[talk_type] = talk     
                members_json.append(member)

                pprint.pprint(member)
                print("---------------------------------------------------------")
        
        response = JsonResponse(members_json, safe=False)
        response["Access-Control-Allow-Origin"] = "*"
        response["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
        response["Access-Control-Max-Age"] = "1000"
        response["Access-Control-Allow-Headers"] = "X-Requested-With, Content-Type"
        return response
@csrf_exempt
def addMember(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        pprint.pprint(data)

        userID = data['id']
        name = data['data']['name']
        
        n1 = User.objects.get(id=userID)
        print(Profile.objects.create(user=n1, user_name=name))
    
        age = data['data']['age']
        sex = data['data']['sex']
        address = data['data']['address']
        latitude = data['data']['latitude']
        hardness = data['data']['hardness']

        id = Profile.objects.filter(user_name=name).get().id

        Info.objects.create(
            name=Profile.objects.get(id=id),
            age=age,
            sex=sex,
            address=address,
            latitude=latitude,
            hardness=hardness)
        
        telegram = data['data']['telegram']
        kakao = data['data']['kakao']
        line = data['data']['line']

        if telegram != '':
            Talk.objects.create(
                name=Profile.objects.get(id=id),
                talk_type='telegram',
                talk_name=telegram['talk_name'],
                talk_age=telegram['talk_age'],
                deviceID=telegram['deviceID'])
        if kakao != '':
            Talk.objects.create(
                name=Profile.objects.get(id=id),
                talk_type='kakao',
                talk_name=kakao['talk_name'],
                talk_age=kakao['talk_age'],
                deviceID=kakao['deviceID'])
        if line != '':
            Talk.objects.create(
                name=Profile.objects.get(id=id),
                talk_type='line',
                talk_name=line['talk_name'],
                talk_age=line['talk_age'],
                deviceID=line['deviceID'])
        response = HttpResponse('add success')
        response["Access-Control-Allow-Origin"] = "*"
        response["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
        response["Access-Control-Max-Age"] = "1000"
        response["Access-Control-Allow-Headers"] = "X-Requested-With, Content-Type"
        return response
@csrf_exempt
def deleteMember(request):
    if request.method == 'DELETE':
        data = json.loads(request.body)
        id = data['id']
        memberID = data['memberID']
        print(id, memberID)
        p1 = Info.objects.get(id=memberID)
        p2 = Profile.objects.get(id=memberID)
        print((model_to_dict(p1)))
        print(p2)
        # Info.objects.filter(id=id).delete()
        response = HttpResponse('delete success')
        response["Access-Control-Allow-Origin"] = "*"
        response["Access-Control-Allow-Methods"] = "GET, POST, DELETE, OPTIONS"
        response["Access-Control-Max-Age"] = "1000"
        response["Access-Control-Allow-Headers"] = "X-Requested-With, Content-Type"
        return response