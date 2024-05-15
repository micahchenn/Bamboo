from django.db import models

# Create your models here.
class Student(models.Model):
    name = models.CharField(max_length=50)
    des = models.TextField()
    def __str__(self):
        return self.name