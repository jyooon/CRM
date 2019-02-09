from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.conf import settings
# from user_list.models import Profile
# Create your models here.

class Profile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    user_name = models.TextField(max_length=20, null=True, blank=False) # 관리자 이름
    
    class Meta:
        ordering = ('-user_name',)

    def __str__(self):
        return self.user_name

class Info(models.Model):
    name = models.OneToOneField(Profile, on_delete=models.CASCADE)
    age = models.IntegerField(null=False, blank=False)
    sex = models.CharField(max_length=5, null=False, blank=False)
    address = models.CharField(max_length=20, null=False, blank=False)
    latitude = models.FloatField(null=False, blank=False)
    hardness = models.FloatField(null=False, blank=False)
    class Meta:
        ordering = ('-name',)
    
    


# @receiver(post_save, sender=User)
# def create_user_profile(sender, instance, created, **kwargs):
#     if created:
#         Profile.objects.create(user=instance, user_name="jong")

# @receiver(post_save, sender=User)
# def save_user_profile(sender, instance, **kwargs):
#     instance.profile_set.first().save()