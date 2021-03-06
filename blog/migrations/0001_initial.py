# Generated by Django 2.1.5 on 2019-01-23 15:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Blog',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('publication_date', models.CharField(max_length=20)),
                ('body', models.CharField(max_length=500)),
                ('image', models.ImageField(upload_to='images/blog/')),
            ],
        ),
    ]
