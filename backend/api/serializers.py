from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User
from .models import Course

class CourseSerializer(ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'


class GetFullUserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'is_superuser', 'first_name', 'last_name')
        
class UserSerializerWithToken(ModelSerializer):
    pass