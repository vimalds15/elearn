from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User
from .models import Course

class CourseSerializer(ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'