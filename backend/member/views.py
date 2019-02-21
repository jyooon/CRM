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
                member['id'] = person.id
                member['name'] = person.user_name
                member['state'] = member['status']
                del member['status']
                talk_infos = Talk.objects.filter(name=person)
                
                talk_json = []
                for talk_info in talk_infos:
                    talk = model_to_dict(talk_info)
                    del talk['name']
                    talk_json.append(talk)
                member['talkList'] = talk_json

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
        p1 = Profile.objects.create(user=n1, user_name=name)
        age = data['data']['age']
        sex = data['data']['sex']
        telegramID = data['data']['telegramID']
        kakaoID = data['data']['kakaoID']
        lineID = data['data']['lineID']
        address = data['data']['address']
        latitude = data['data']['latitude']
        hardness = data['data']['hardness']
        id = Profile.objects.filter(id=p1.id).get().id
        Info.objects.create(
            name=Profile.objects.get(id=id),
            age=age,
            sex=sex,
            telegramID=telegramID,
            kakaoID=kakaoID,
            lineID=lineID,
            address=address,
            latitude=latitude,
            hardness=hardness)
        
        talks = data['data']['talkList']
        for talk in talks:
            Talk.objects.create(
                name=Profile.objects.get(id=id),
                talk_type=talk['talk_type'],
                talk_name=talk['talk_name'],
                talk_age=talk['talk_age'],
                deviceID=talk['deviceID'])    

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
        print(Profile.objects.filter(user=User.objects.get(id=id), id=memberID).get().user_name)
        Profile.objects.filter(user=User.objects.get(id=id), id=memberID).delete()
        response = HttpResponse('delete success')
        response["Access-Control-Allow-Origin"] = "*"
        response["Access-Control-Allow-Methods"] = "GET, POST, DELETE, OPTIONS"
        response["Access-Control-Max-Age"] = "1000"
        response["Access-Control-Allow-Headers"] = "X-Requested-With, Content-Type"
        return response
@csrf_exempt
def updateInfo(request):
    if request.method =='PUT':
        data = json.loads(request.body)
        pprint.pprint(data)

        userID = data['id']
        name = data['data']['name']
        id = data['data']['id']
        p1 = Profile.objects.get(user=userID, id=id)
        p1.user_name = name
        p1.save()

        info = Info.objects.get(id=id)
        
        info.age = data['data']['age']
        info.sex = data['data']['sex']
        info.telegramID = data['data']['telegramID']
        info.kakaoID = data['data']['kakaoID']
        info.lineID = data['data']['lineID']
        info.address = data['data']['address']
        info.latitude = data['data']['latitude']
        info.hardness = data['data']['hardness']
        info.save()
        
        talks = data['data']['talkList']

        for talk in talks:
            print(talk)
            if 'id' in talk:
                talkID = talk['id']
                talk_get = Talk.objects.get(id=talkID)
                talk_get.talk_type = talk['talk_type']
                talk_get.talk_name = talk['talk_name']
                talk_get.talk_age = talk['talk_age']
                talk_get.deviceID = talk['deviceID']
                talk_get.save()
            else:
                Talk.objects.create(
                    name=Profile.objects.get(id=id),
                    talk_type=talk['talk_type'],
                    talk_name=talk['talk_name'],
                    talk_age=talk['talk_age'],
                    deviceID=talk['deviceID'])   
            
        response = HttpResponse('update success')
        response["Access-Control-Allow-Origin"] = "*"
        response["Access-Control-Allow-Methods"] = "GET, POST, PUT, OPTIONS"
        response["Access-Control-Max-Age"] = "1000"
        response["Access-Control-Allow-Headers"] = "X-Requested-With, Content-Type"
        return response


@csrf_exempt
def updateStatus(request):
    if request.method == 'PUT' :
        data = json.loads(request.body)

        #data 에 오는건 Info id 와 status
        id = data['id']

        info = Info.objects.get(id=id)
        info.status = data['status']
        info.save()
        response = HttpResponse('success')
        response["Access-Control-Allow-Origin"] = "*"
        response["Access-Control-Allow-Methods"] = "GET, POST, PUT, OPTIONS"
        response["Access-Control-Max-Age"] = "1000"
        response["Access-Control-Allow-Headers"] = "X-Requested-With, Content-Type"
        return response
