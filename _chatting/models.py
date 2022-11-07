from django.db import models

# Create your models here.
from _account.models import User
from _product.models import Product


class Room (models.Model):
    product = models.ForeignKey(Product)
    prod = models.ForeignKey(User)
    cons = models.ForeignKey(User)




class Message (models.Model):
    room_id = models.ForeignKey(Room.Id)
    image = models.ImageField()
    text = models.TextField()
    user_id = models.ForeignKey(User)
    read = models.BooleanField()
    date = models.DateTimeField()




