from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    context = {
        'name': 'TUSHAR VASHISTA',
        'title': 'Software Developer | Cloud Computing Specialist',
        'mobile': '+44 7587490519',
        'email': 'info.vashistatushaar@gmail.com',
        'uni_email': '2994712V@student.gla.ac.uk'
    }
    return render(request, 'home.html', context)

def about(request):
    return render(request, 'about.html')

def experience(request):
    return render(request, 'experience.html')

def projects(request):
    return render(request, 'projects.html')

def skills(request):
    return render(request, 'skills.html')

def contact(request):
    return render(request, 'contact.html')
