from django.db import models

# Create your models here.
class Blog(models.Model):
    title = models.CharField(max_length=250)
    publication_date = models.DateTimeField()
    body = models.TextField()
    image = models.ImageField(upload_to='images/blog/')

    def __str__(self):
        return self.title

    def summary(self):
        return self.body[:100]

    def edit_pub_date(self):
        return self.publication_date.strftime('%H:%M - %d.%m.%Y')
