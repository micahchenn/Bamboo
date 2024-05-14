from django.shortcuts import render

# Create your views here.
def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html') # This is the path to the index.html file it will go directly to the templates and search
