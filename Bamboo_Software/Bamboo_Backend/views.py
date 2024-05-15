from django.shortcuts import render
from .models import Student

def index(request):
    obj = Student.objects.all()
    contex = {
        'obj': obj
    }
    return render(request, 'index.html', contex)  # pass the dictionary, not the string