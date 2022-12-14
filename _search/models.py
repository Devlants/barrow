from django.db import models
from datetime import datetime

class Keyword(models.Model):
    count = models.IntegerField(null = True, default = 0)
    date = models.DateTimeField(auto_now_add = True)
    content = models.CharField(null = False, max_length = 100)

    def get_date(self):
        str = self.date.strftime("%m.%d")
        
        return str
    
    def searched(self):
        self.count+=1

class CurMostSearch(models.Model):
    keyword = models.CharField(null = False, max_length = 100)
    rank = models.IntegerField(null = False, default = 0)
    time = models.DateTimeField(auto_now_add=True)
    vector = models.IntegerField(null = False, default=0)

    
