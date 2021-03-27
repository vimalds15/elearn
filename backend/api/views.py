from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser,FormParser
from rest_framework.response import Response
from .serializers import CourseSerializer,UserSerializer
from .models import Course
from rest_framework import status
# Create your views here.

class CourseView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args,**kwargs):
        courses = Course.objects.all()
        serializer = CourseSerializer(courses, many=True)
        return Response(serializer.data)
    
    def post(self, request, *args, **kwargs):
        serializer = CourseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        else:
            print('error', serializer.errors)
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class CourseDetail(APIView):

    def get(self, request, pk):
        course = Course.objects.get(_id=pk)
        serializer = CourseSerializer(course)
        return Response(serializer.data)
