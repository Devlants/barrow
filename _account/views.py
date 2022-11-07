from django.contrib import auth
from django.shortcuts import render, redirect
from django.http import JsonResponse
import json

# Create your views here.

from _account.models import User


def login(request):
    if request.metod=='POST' :
        user = User.objects.filter(username=request.POST["username"])
        if (user.exists()):
            user = user[0]
            if user.password == request.POST["password"]:
                auth.login(request, user)
                return redirect("home")

        return render(request, "login.html")
    else:
        return render(request, "login.html")

def register(request):
    if request.method=='POST' :
        try:
            user = User()
            user.username = request.POST['username']
            user.password = request.POST['password']
            user.name = request.POST['name']
            user.birth = request.POST['birth']
            user.address = request.POST['address']
            user.phoneNum = request.POST['phoneNum']
            user.image = request.FILES['image']
            user.save()
            return redirect('login')
        except Exception as e:
            print(e)
            return render(request, 'register.html')
    return render(request, 'register.html')
