from django.urls import path
from .views import *

app_name = 'barrow'

urlpatterns = [
   path("",home,name = "home"),
   path("best/<int:page_num>",best,name = "best"),
   path("category/<str:category>/<str:sort>/",category_view,name = "category"),
   path("near_products",near_products,name = "near_products"),
]