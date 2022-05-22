from django.db import models
from django.contrib.auth.models import User

class Meeting(models.Model):
    title = models.CharField(max_length=256)
    description = models.TextField()
    time = models.DateTimeField()
    members = models.ManyToManyField(User)

    def __str__(self):
        return self.title
