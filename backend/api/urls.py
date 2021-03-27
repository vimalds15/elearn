from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

urlpatterns = [
    path('course/', views.CourseView.as_view(), name='homepage'),
    path('course/<int:pk>/',views.CourseDetail.as_view(), name='detail'),
    
    path('users/login/',TokenObtainPairView.as_view(), name='token_obtain_pair')
]