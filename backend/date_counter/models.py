from django.contrib.auth import get_user_model
from django.db import models


class Date_Counter(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now=True)
    count = models.IntegerField(default=0)
