from django.db import models

# Create your models here.
from _account.models import User
from _product.models import Product


class Room (models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    prod = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_prod')
    cons = models.ForeignKey(User,  on_delete=models.CASCADE, related_name='user_cons')




class Message (models.Model):
    room_id = models.ForeignKey(Room, on_delete=models.CASCADE)
    image = models.ImageField()
    text = models.TextField()
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    read = models.BooleanField()
    date = models.DateTimeField()




