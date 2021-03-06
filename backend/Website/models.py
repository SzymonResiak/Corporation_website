from django.db import models
from django.contrib.auth.models import User


class Meeting(models.Model):
    title = models.CharField(max_length=256)
    description = models.TextField()
    time_start = models.DateTimeField()
    time_end = models.DateTimeField()
    members = models.ManyToManyField(User)

    def __str__(self):
        return self.title


class Document(models.Model):
    file = models.FileField(upload_to='media/DocsFiles')
    title = models.CharField(max_length=256)

    def __str__(self):
        return self.title
