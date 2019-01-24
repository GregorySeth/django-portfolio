from django.db import models

# Create your models here.
class Contact(models.Model):
    name = models.CharField(max_length=50)
    mail_address = models.CharField(max_length=50)
    message = models.TextField()
