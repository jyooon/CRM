from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.conf import settings
from user_info.models import Profile
# Create your models here.

class Reserve(models.Model):
    name = models.ForeignKey(Profile, on_delete=models.CASCADE)
    booker = models.CharField(max_length=20, null=False, blank=False)
    # manager = models.CharField(max_length=20, null=False, blank=False)
    start_time = models.DateTimeField(auto_now=False, auto_now_add=False, null=False, blank=False)
    end_time = models.DateTimeField(auto_now=False, auto_now_add=False, null=False, blank=False)
    cost = models.IntegerField(null=False, blank=False)
    memo = models.TextField(max_length=100, null=False, blank=False)
    
    class Meta:
        ordering = ('-name',)

