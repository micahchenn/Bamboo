import json
from django.http import JsonResponse
from django.shortcuts import redirect, render
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from django.contrib import messages

# Create your views here.
def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html') # This is the path to the index.html file it will go directly to the templates and search

from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def signup(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name')
        email = data.get('email')
        password = data.get('password')

        # Check if a user with the same username already exists
        if User.objects.filter(email=email).exists():
            return JsonResponse({'error': 'EMAILLL already exists'}, status=400)

        # Create a new user
        user = User(username=name, email=email)
        user.password = make_password(password)
        user.save()

        return JsonResponse({'message': 'User created successfully'}, status=201)

    return JsonResponse({'error': 'Invalid request'}, status=400)