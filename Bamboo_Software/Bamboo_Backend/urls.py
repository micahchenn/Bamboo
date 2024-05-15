from django.urls import path
from .views import index

urlpatterns = [
    path('', index), 
]

'''
from rest_framework.views import APIView
from rest_framework.response import Response

class MyAPIView(APIView):
    def get(self, request):
        # Add your logic here
        data = {
            'message': 'Hello, World!'
        }
        return Response(data)
        '''