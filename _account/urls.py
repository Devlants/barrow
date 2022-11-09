from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.register, name='index'),
    path('find_username/', views.find_username, name='find_username'),
    path('find_password/', views.find_password, name='find_password'),
    path('login/', views.login, name='login')
]