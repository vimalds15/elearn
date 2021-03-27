from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator

# Create your models here.
class Course(models.Model):
    _id = models.AutoField(unique=True,primary_key=True,editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=500, null=False, blank=False)
    courseby = models.CharField(max_length=200, blank=False, null=False)
    description = models.TextField(blank=True,null=True)
    features = models.CharField(max_length=200, blank=True, null=True)
    thumbnail = models.ImageField(upload_to='images/',null=False,blank=False)
    video = models.FileField(upload_to='videos/',null=True,blank=True)
    rating = models.FloatField(null=True,blank=True,validators=[MaxValueValidator(5)])
    published_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title