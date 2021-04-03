from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser,FormParser
from rest_framework.response import Response
from .serializers import CourseSerializer,GetFullUserSerializer
from .models import Course
from rest_framework import status, permissions
from rest_framework.decorators import api_view
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

class CreateUserView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        user = request.data.get('user')
        if not user:
            return Response({'response': 'error', 'message': 'No data found'})
        serializer = UserSerializerWithToken(data=user)
        
        if serializer.is_valid():
            saved_user = serializer.save()
        else:
            return Response({'response': 'error', 'message': serializer.errors})
            
        return Response({'response': 'success', 'message': 'user created successfully'})
        
@api_view(['GET'])
def get_current_user(request):
    serializer = GetFullUserSerializer(request.user)
    return Response(serializer.data)