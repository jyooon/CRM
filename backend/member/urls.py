from django.conf.urls import url
from . import views

urlpatterns = [
    url("^all", views.getMembers, name='getMembers'),
    # url("^change", views.changeInfo, name="changeInfo"),
    url("^add", views.addMember, name="addMember"),
    url("^delete", views.deleteMember, name="deleteMember"),
]