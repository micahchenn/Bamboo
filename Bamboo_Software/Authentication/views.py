import json
from django.http import JsonResponse
from django.shortcuts import redirect, render
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from django.contrib import messages
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate
from Bamboo_Software import settings
from django.core.mail import send_mail


# Create your views here.
def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html') # This is the path to the index.html file it will go directly to the templates and search



@csrf_exempt #=> hopefully not needed at most times
def signup(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('email')
        first_name = data.get('firstName')
        last_name = data.get('lastName')
        email = data.get('email')
        password = data.get('password')

        # Check if a user with the same email already exists
        if User.objects.filter(email=email).exists():
            return JsonResponse({'error': 'Email already exists'}, status=400)

        # Create a new user
        user = User(first_name=first_name, last_name=last_name, email=email, username=username)
        user.password = make_password(password)
        user.save()




        #this it to send email
        subject = 'Welcome to Harbinger Software'
        message = 'Hello, This is Micah!\n' + first_name + 'We are glad to have you on board PLEASE BUY EVERYTHING AND GIVE US YOUR MONEY'
        from_email = settings.EMAIL_HOST_USER
        to_list = [email]
        num_sent = send_mail(subject, message, from_email, to_list, fail_silently=True)

        if num_sent:
            print("Email sent successfully")
        else:
            print("Failed to send email")


        return JsonResponse({'message': 'User created successfully'}, status=201)

    return JsonResponse({'error': 'Invalid request'}, status=400)


@csrf_exempt
def login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')

        if email is None or password is None:
            return JsonResponse({'error': 'Please provide both email and password'}, status=400)

        user = authenticate(request, username=email, password=password)

        if user is not None:
            # Login successful
            return JsonResponse({'message': 'Login successful'}, status=200)
        else:
            # Authentication failed
            return JsonResponse({'error': 'Invalid email or password'}, status=400)

    return JsonResponse({'error': 'Invalid request'}, status=400)